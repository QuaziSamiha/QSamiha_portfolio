"use client"

import { useEffect, useState } from "react"

interface Word {
  text: string
  className?: string
}

interface TypewriterEffectProps {
  words: Word[]
  className?: string
  cursorClassName?: string
}

export const TypewriterEffect = ({
  words,
  className = "",
  cursorClassName = "text-emerald-400",
}: TypewriterEffectProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (!words || words.length === 0) return

    const word = words[currentWordIndex]?.text || ""
    const typingSpeed = isDeleting ? 50 : 150 // faster when deleting

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === word) {
        // Wait a bit before starting to delete
        setTimeout(() => {
          setIsDeleting(true)
        }, 1000)
        return
      }

      if (isDeleting && currentText === "") {
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
        return
      }

      setCurrentText((prev) => {
        if (isDeleting) {
          return prev.slice(0, -1)
        }
        return word.slice(0, prev.length + 1)
      })
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [currentText, currentWordIndex, isDeleting, words])

  return (
    <div className={`inline-flex ${className}`}>
      <span>{currentText}</span>
      <span className={`animate-pulse ${cursorClassName}`}>|</span>
    </div>
  )
}

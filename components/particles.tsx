"use client"

import { useEffect, useRef } from "react"

interface ParticlesProps {
  className?: string
  quantity?: number
  staticity?: number
  ease?: number
  refresh?: boolean
}

export function Particles({
  className = "",
  quantity = 30,
  staticity = 50,
  ease = 50,
  refresh = false,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasContainerRef = useRef<HTMLDivElement>(null)
  const context = useRef<CanvasRenderingContext2D | null>(null)
  const circles = useRef<any[]>([])
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 })
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d")
    }
    initCanvas()
    animate()
    window.addEventListener("resize", initCanvas)

    return () => {
      window.removeEventListener("resize", initCanvas)
    }
  }, [])

  useEffect(() => {
    initCanvas()
  }, [refresh])

  const initCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      circles.current = []
      canvasSize.current.w = canvasContainerRef.current.offsetWidth
      canvasSize.current.h = canvasContainerRef.current.offsetHeight
      canvasRef.current.width = canvasSize.current.w * dpr
      canvasRef.current.height = canvasSize.current.h * dpr
      canvasRef.current.style.width = `${canvasSize.current.w}px`
      canvasRef.current.style.height = `${canvasSize.current.h}px`
      context.current.scale(dpr, dpr)

      // Create particles
      for (let i = 0; i < quantity; i++) {
        circles.current.push(circleParams())
      }
    }
  }

  const circleParams = () => {
    const x = Math.floor(Math.random() * canvasSize.current.w)
    const y = Math.floor(Math.random() * canvasSize.current.h)
    const size = Math.floor(Math.random() * 2) + 0.1
    const alpha = 0.1 + Math.random() * 0.3
    const color = getRandomColor()

    return {
      x,
      y,
      size,
      alpha,
      color,
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2,
      magnetism: 0.1 + Math.random() * 4,
    }
  }

  const getRandomColor = () => {
    const colors = ["75, 219, 106", "43, 192, 228", "250, 176, 5", "253, 29, 83", "131, 56, 236", "58, 134, 255"]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  const clearContext = () => {
    if (context.current) {
      context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h)
    }
  }

  const drawCircle = (circle: any) => {
    if (context.current) {
      context.current.beginPath()
      context.current.arc(circle.x, circle.y, circle.size, 0, 2 * Math.PI)
      context.current.fillStyle = `rgba(${circle.color}, ${circle.alpha})`
      context.current.fill()
    }
  }

  const remapValue = (value: number, start1: number, end1: number, start2: number, end2: number) => {
    const remapped = ((value - start1) * (end2 - start2)) / (end1 - start1) + start2
    return remapped > 0 ? remapped : 0
  }

  const animate = () => {
    clearContext()
    circles.current.forEach((circle) => {
      // Handle the alpha value
      const edge = [
        circle.x + circle.size,
        canvasSize.current.w - circle.x + circle.size,
        circle.y + circle.size,
        canvasSize.current.h - circle.y + circle.size,
      ]
      const closestEdge = edge.reduce((a, b) => Math.min(a, b))
      const remapClosestEdge = remapValue(closestEdge, 0, 20, 0, 1)
      if (remapClosestEdge > 1) {
        circle.alpha = 0.3
      } else {
        circle.alpha = remapClosestEdge * 0.3
      }

      // Handle movement
      circle.x += circle.dx
      circle.y += circle.dy

      // Handle boundaries
      if (circle.x < 0 || circle.x > canvasSize.current.w) {
        circle.dx *= -1
      }
      if (circle.y < 0 || circle.y > canvasSize.current.h) {
        circle.dy *= -1
      }

      drawCircle(circle)
    })

    requestAnimationFrame(animate)
  }

  return (
    <div className={className} ref={canvasContainerRef} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  )
}

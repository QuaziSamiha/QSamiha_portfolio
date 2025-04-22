"use client"

import { useState } from "react"
import { Check, ClipboardCopy } from "lucide-react"

interface CodeWindowProps {
  title: string
  code: string
  language: string
}

export function CodeWindow({ title, code, language }: CodeWindowProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="overflow-hidden rounded-lg border border-zinc-800 bg-black">
      <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-4 py-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-sm text-zinc-400">{title}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 rounded-md p-1 text-xs text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-300"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <ClipboardCopy className="h-4 w-4" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="max-h-[500px] overflow-auto p-4">
        <pre className="font-mono text-sm text-zinc-300">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  )
}

interface TerminalCommandProps {
  command: string
  result: string
}

export function TerminalCommand({ command, result }: TerminalCommandProps) {
  return (
    <div className="mb-2">
      <div className="flex items-center">
        <span className="mr-2 text-emerald-400">~$</span>
        <span className="text-zinc-100">{command}</span>
      </div>
      <div className="ml-4 mt-1 whitespace-pre-wrap text-zinc-400">{result}</div>
    </div>
  )
}

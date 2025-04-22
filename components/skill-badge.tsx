import { Badge } from "@/components/ui/badge"

interface SkillBadgeProps {
  name: string
  level: number
}

export function SkillBadge({ name, level }: SkillBadgeProps) {
  // Determine color based on level
  let bgColor = "bg-zinc-800"
  let textColor = "text-zinc-300"

  if (level >= 90) {
    bgColor = "bg-emerald-500/20"
    textColor = "text-emerald-400"
  } else if (level >= 80) {
    bgColor = "bg-blue-500/20"
    textColor = "text-blue-400"
  } else if (level >= 70) {
    bgColor = "bg-purple-500/20"
    textColor = "text-purple-400"
  }

  return <Badge className={`${bgColor} ${textColor}`}>{name}</Badge>
}

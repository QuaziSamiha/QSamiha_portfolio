import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  demoUrl?: string
  githubUrl?: string
  professional?: boolean
}

export function ProjectCard({
  title,
  description,
  tags,
  image,
  demoUrl,
  githubUrl,
  professional = false,
}: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden border-zinc-800 bg-zinc-900/50 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/80">
      <div className="relative aspect-video overflow-hidden bg-black">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {professional && (
          <div className="absolute right-2 top-2">
            <Badge className="bg-emerald-500/80 text-white">Professional</Badge>
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
        <p className="mb-4 text-sm text-zinc-400">{description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="border-zinc-700 bg-zinc-800/50 text-zinc-300">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          {demoUrl && (
            <Button asChild variant="default" size="sm" className="bg-emerald-600 hover:bg-emerald-700">
              <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
              </Link>
            </Button>
          )}
          {githubUrl && (
            <Button asChild variant="outline" size="sm">
              <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Code
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

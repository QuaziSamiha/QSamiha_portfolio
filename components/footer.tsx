import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black/50 py-8 backdrop-blur-lg">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <div className="flex items-center space-x-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-full bg-emerald-500/20">
                <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-emerald-400">
                  S
                </span>
              </div>
              <span className="font-bold text-white">Quazi Samiha Tasnim</span>
            </div>
            <p className="text-center text-sm text-zinc-400 md:text-left">
              Front-End Developer specializing in Next.js, React, and TypeScript
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link href="https://github.com/QuaziSamiha" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/quazi-samiha-tasnim" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:quazisamiha@gmail.com">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-8 text-sm text-zinc-400 md:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:justify-start">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <Link href="/about" className="hover:text-white">
              About
            </Link>
            <Link href="/projects" className="hover:text-white">
              Projects
            </Link>
            <Link href="/experience" className="hover:text-white">
              Experience
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
          <p>&copy; {new Date().getFullYear()} Quazi Samiha Tasnim. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CommandMenu } from "@/components/command-menu"
import { Particles } from "@/components/particles"
import "@/app/globals.css"

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Quazi Samiha Tasnim | Front-End Developer",
  description:
    "Professional portfolio of Quazi Samiha Tasnim, a Front-End Developer specializing in Next.js, React, and TypeScript",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.variable} ${mono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="relative min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black">
            <Particles className="absolute inset-0 -z-10 animate-fade-in" />
            <Suspense fallback={<div className="h-16 border-b border-zinc-800 bg-black/50 backdrop-blur-lg"></div>}>
              <Navbar />
            </Suspense>
            <main className="relative z-10">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Suspense fallback={null}>
          <CommandMenu />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}

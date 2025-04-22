import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CodeWindow } from "@/components/code-window";
import { TypewriterEffect } from "@/components/typewriter-effect";
import { TerminalCommand } from "@/components/terminal-command";
import { ProjectCard } from "@/components/project-card";
import { SkillBadge } from "@/components/skill-badge";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Much more impressive and technical */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>

        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-2">
              <Badge
                variant="outline"
                className="border-green-500/20 bg-green-500/10 text-green-400"
              >
                Available for hire
              </Badge>
              <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                  Quazi Samiha
                </span>
              </h1>
              <div className="h-14">
                <TypewriterEffect
                  words={[
                    { text: "Front-End" },
                    { text: "Developer" },
                    { text: "with" },
                    { text: "Next.js" },
                    { text: "+" },
                    { text: "React" },
                    { text: "expertise" },
                  ]}
                  className="text-2xl font-bold sm:text-3xl md:text-4xl"
                />
              </div>
            </div>

            <p className="max-w-md text-base text-zinc-400 md:text-lg">
              Building pixel-perfect, responsive, and performant web
              applications with modern technologies. Currently at{" "}
              <a
                href="https://atilimited.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline"
              >
                ATI Limited
              </a>
              , crafting enterprise solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="group bg-emerald-600 hover:bg-emerald-700"
              >
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/QuaziSamiha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/quazi-samiha-tasnim"
                target="_blank"
                rel="noopener noreferrer"
              >
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

          <div className="flex items-center justify-center">
            <CodeWindow
              title="samiha.tsx"
              language="tsx"
              code={`import { Developer } from 'next/developer';

export default function Samiha() {
  return (
    <Developer
      name="Quazi Samiha Tasnim"
      role="Front-End Developer"
      location="Dhaka, Bangladesh"
      company={{
        name: "ATI Limited",
        url: "https://atilimited.net/"
      }}
      skills={[
        "Next.js", 
        "React", 
        "TypeScript",
        "Tailwind CSS",
        "Redux Toolkit"
      ]}
      education={{
        msc: "BUET (CSE, 2024-Present)",
        bsc: "RUET (CSE, 2018-2023)"
      }}
      experience={[
        {
          company: "ATI Limited",
          role: "Front-End Developer",
          period: "May 2024 - Present"
        },
        {
          company: "Code Studio",
          role: "Front-End Developer",
          period: "Sep 2022 - Apr 2023"
        }
      ]}
      links={{
        github: "https://github.com/QuaziSamiha",
        linkedin: "https://www.linkedin.com/in/quazi-samiha-tasnim",
        email: "quazisamiha@gmail.com"
      }}
    />
  );
}`}
            />
          </div>
        </div>
      </section>

      {/* Terminal Section */}
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-zinc-800 bg-black/50 p-4">
          <div className="mb-2 flex items-center gap-1">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <div className="ml-2 text-sm text-zinc-400">terminal</div>
          </div>
          <div className="font-mono text-sm">
            <TerminalCommand command="whoami" result="quazi-samiha" />
            <TerminalCommand
              command="cat skills.txt"
              result="Next.js, React, TypeScript, Tailwind CSS, Redux, React Query, Shadcn UI"
            />
            <TerminalCommand
              command="cat career.txt"
              result="Creative and detail-oriented Front-End Developer with a strong background in Next.js, TypeScript, and modern UI libraries. Currently working at ATI Limited, contributing to national and international-scale projects."
            />
            <TerminalCommand
              command="ls projects/"
              result="space-rocket-app/ blood-donation-system/ her-power/ procurement-management/ pos-system/"
            />
            <div className="flex items-center">
              <span className="mr-2 text-emerald-400">~$</span>
              <span className="relative flex h-5 items-center">
                <span className="text-zinc-100">
                  contact --email quazisamiha@gmail.com
                </span>
                <span className="absolute right-0 h-full w-1 animate-blink bg-emerald-400"></span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold text-white sm:text-4xl">
            Tech Stack
          </h2>
          <p className="mx-auto max-w-2xl text-zinc-400">
            Tools and technologies I use to bring products to life
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="Next.js" level={95} />
                <SkillBadge name="React" level={90} />
                <SkillBadge name="TypeScript" level={85} />
                <SkillBadge name="JavaScript" level={90} />
                <SkillBadge name="HTML/CSS" level={95} />
              </div>
            </CardContent>
          </Card>

          <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">Styling</h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="Tailwind CSS" level={95} />
                <SkillBadge name="Shadcn UI" level={90} />
                <SkillBadge name="Material UI" level={80} />
                <SkillBadge name="Bootstrap" level={85} />
              </div>
            </CardContent>
          </Card>

          <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">
                State Management
              </h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="Redux Toolkit" level={90} />
                <SkillBadge name="React Query" level={85} />
                <SkillBadge name="Context API" level={90} />
              </div>
            </CardContent>
          </Card>

          <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">
                Tools & Others
              </h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="Git" level={85} />
                <SkillBadge name="Firebase" level={80} />
                <SkillBadge name="Node.js" level={70} />
                <SkillBadge name="Express" level={65} />
                <SkillBadge name="MongoDB" level={65} />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="mb-2 text-3xl font-bold text-white sm:text-4xl">
              Featured Projects
            </h2>
            <p className="max-w-2xl text-zinc-400">Some of my recent work</p>
          </div>
          <Button asChild variant="outline">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <ProjectCard
            title="Space Rocket App"
            description="Interactive application for browsing and filtering SpaceX rockets with pagination and detailed information."
            tags={["React", "TypeScript", "Tailwind CSS", "Vite", "REST API"]}
            image="/space-flight.png?height=400&width=600"
            demoUrl="https://space-flight-azure.vercel.app/"
            githubUrl="https://github.com/QuaziSamiha/space-flight"
          />

          <ProjectCard
            title="Blood Donation System"
            description="Platform connecting blood donors with recipients, featuring user registration, profile management, and search functionality."
            tags={[
              "React",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Bootstrap",
              "Firebase",
            ]}
            image="/blood-donation.png?height=400&width=600"
            demoUrl="https://blood-donation-cse-3100.web.app/"
            githubUrl="https://github.com/QuaziSamiha/blood_donation_client"
          />
        </div>
      </section>

      {/* Experience Highlight */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="mb-2 text-3xl font-bold text-white sm:text-4xl">
              Work Experience
            </h2>
            <p className="max-w-2xl text-zinc-400">My professional journey</p>
          </div>
          <Button asChild variant="outline">
            <Link href="/experience">
              View Full Experience
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="relative border-l border-zinc-800 pl-6">
          <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-emerald-500"></div>
          <div className="mb-10">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <h3 className="text-xl font-semibold text-white">
                Front-End Developer
              </h3>
              <Badge
                variant="outline"
                className="border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
              >
                Current
              </Badge>
            </div>
            <p className="mb-1 text-emerald-400">ATI Limited</p>
            <p className="mb-4 text-sm text-zinc-400">May 2024 - Present</p>
            <ul className="ml-4 list-disc space-y-2 text-zinc-400">
              <li>
                Developed enterprise-level dashboards and admin panels using
                Next.js + Tailwind + Redux Toolkit
              </li>
              <li>
                Built reusable components and scalable layouts using Shadcn UI
                and TanStack Table
              </li>
              <li>
                Integrated APIs and managed complex data flow using TanStack
                Query
              </li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge className="bg-zinc-800 text-zinc-300">Next.js</Badge>
              <Badge className="bg-zinc-800 text-zinc-300">Tailwind</Badge>
              <Badge className="bg-zinc-800 text-zinc-300">Redux</Badge>
              <Badge className="bg-zinc-800 text-zinc-300">Shadcn</Badge>
            </div>
          </div>

          <div className="absolute -left-1.5 top-[180px] h-3 w-3 rounded-full bg-zinc-600"></div>
          <div>
            <h3 className="mb-2 text-xl font-semibold text-white">
              Front-End Developer
            </h3>
            {/* <p className="mb-1 text-zinc-400">Code Studio</p> */}
            <p className="text-zinc-400 mb-1">
              <a
                href="https://code-studio4.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Code Studio
              </a>
            </p>

            <p className="mb-4 text-sm text-zinc-400">Sep 2022 - Apr 2023</p>
            <ul className="ml-4 list-disc space-y-2 text-zinc-400">
              <li>Built mobile-first UIs using React + Tailwind</li>
              <li>Deployed responsive projects using cPanel</li>
              <li>Integrated REST APIs for live backend data</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge className="bg-zinc-800 text-zinc-300">React</Badge>
              <Badge className="bg-zinc-800 text-zinc-300">Tailwind</Badge>
              <Badge className="bg-zinc-800 text-zinc-300">REST APIs</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-black/50 p-8 backdrop-blur-sm md:p-12">
          <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl"></div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Let's Build Something Amazing Together
            </h2>
            <p className="mb-8 max-w-2xl text-zinc-400">
              I'm currently open to new opportunities and collaborations.
              Whether you need a front-end developer for your project or want to
              discuss potential ideas, I'd love to hear from you.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/resume">View Resume</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

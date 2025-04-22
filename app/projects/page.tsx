import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectCard } from "@/components/project-card";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
          Projects
        </h1>
        <p className="max-w-2xl text-zinc-400">
          A showcase of my work, side projects, and experiments
        </p>
      </div>

      <Tabs defaultValue="all" className="mb-16">
        <TabsList className="mb-8 grid w-full grid-cols-4 bg-zinc-800/50">
          <TabsTrigger value="all">All Projects</TabsTrigger>
          <TabsTrigger value="frontend">Frontend</TabsTrigger>
          <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
          <TabsTrigger value="professional">Professional</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
              tags={["React", "Node.js", "MongoDB", "Bootstrap", "Firebase"]}
              image="/blood-donation.png"
              demoUrl="https://blood-donation-cse-3100.web.app/"
              githubUrl="https://github.com/QuaziSamiha/blood_donation_client"
            />

            <ProjectCard
              title="Her Power"
              description="ICT Ministry project for women empowerment, featuring resource sharing, community forums, and educational content."
              tags={["Next.js", "Redux", "Tailwind", "Shadcn UI"]}
              image="/her-power.png?height=400&width=600"
              demoUrl="https://portal.herpower.gov.bd/en"
              professional={true}
            />

            <ProjectCard
              title="KYAMCH-BRS Bioresearch"
              description="Portfolio and management system for bioresearch projects, featuring publication tracking and researcher profiles."
              tags={["Next.js", "TypeScript", "TanStack Query", "Shadcn UI"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="#"
              professional={true}
            />

            <ProjectCard
              title="Procurement Management System"
              description="Comprehensive system for Drug International to manage procurements across 17 concerns, with approval workflows and reporting."
              tags={["Next.js", "Redux Toolkit", "React Hook Form", "Yup"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="#"
              professional={true}
            />

            <ProjectCard
              title="POS Machine System"
              description="Web platform for a USA-based POS system, supporting mobile, desktop, and web interfaces with real-time updates."
              tags={["Next.js", "TypeScript", "TanStack Table", "Shadcn UI"]}
              image="/pos.png?height=400&width=600"
              demoUrl="#"
              professional={true}
            />
          </div>
        </TabsContent>

        <TabsContent value="frontend">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Space Rocket App"
              description="Interactive application for browsing and filtering SpaceX rockets with pagination and detailed information."
              tags={["React", "TypeScript", "Tailwind CSS", "Vite", "REST API"]}
              image="/space-flight.png"
              demoUrl="https://space-flight-azure.vercel.app/"
              githubUrl="https://github.com/QuaziSamiha/space-flight"
            />

            <ProjectCard
              title="Her Power"
              description="ICT Ministry project for women empowerment, featuring resource sharing, community forums, and educational content."
              tags={["Next.js", "Redux", "Tailwind", "Shadcn UI"]}
              image="/her-power.png"
              demoUrl="https://portal.herpower.gov.bd/en"
              professional={true}
            />

            <ProjectCard
              title="KYAMCH-BRS Bioresearch"
              description="Portfolio and management system for bioresearch projects, featuring publication tracking and researcher profiles."
              tags={["Next.js", "TypeScript", "TanStack Query", "Shadcn UI"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="#"
              professional={true}
            />
          </div>
        </TabsContent>

        <TabsContent value="fullstack">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Blood Donation System"
              description="Platform connecting blood donors with recipients, featuring user registration, profile management, and search functionality."
              tags={["React", "Node.js", "MongoDB", "Bootstrap", "Firebase"]}
              image="/blood-donation.png"
              demoUrl="https://blood-donation-cse-3100.web.app/"
              githubUrl="https://github.com/QuaziSamiha/blood_donation_client"
            />

            <ProjectCard
              title="Procurement Management System"
              description="Comprehensive system for Drug International to manage procurements across 17 concerns, with approval workflows and reporting."
              tags={["Next.js", "Redux Toolkit", "React Hook Form", "Yup"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="#"
              professional={true}
            />

            <ProjectCard
              title="POS Machine System"
              description="Web platform for a USA-based POS system, supporting mobile, desktop, and web interfaces with real-time updates."
              tags={["Next.js", "TypeScript", "TanStack Table", "Shadcn UI"]}
              image="/pos.png?height=400&width=600"
              demoUrl="#"
              professional={true}
            />
          </div>
        </TabsContent>

        <TabsContent value="professional">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Her Power"
              description="ICT Ministry project for women empowerment, featuring resource sharing, community forums, and educational content."
              tags={["Next.js", "Redux", "Tailwind", "Shadcn UI"]}
              image="/her-power.png?height=400&width=600"
              demoUrl="https://portal.herpower.gov.bd/en"
              professional={true}
            />

            <ProjectCard
              title="KYAMCH-BRS Bioresearch"
              description="Portfolio and management system for bioresearch projects, featuring publication tracking and researcher profiles."
              tags={["Next.js", "TypeScript", "TanStack Query", "Shadcn UI"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="#"
              professional={true}
            />

            <ProjectCard
              title="Procurement Management System"
              description="Comprehensive system for Drug International to manage procurements across 17 concerns, with approval workflows and reporting."
              tags={["Next.js", "Redux Toolkit", "React Hook Form", "Yup"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="#"
              professional={true}
            />

            <ProjectCard
              title="POS Machine System"
              description="Web platform for a USA-based POS system, supporting mobile, desktop, and web interfaces with real-time updates."
              tags={["Next.js", "TypeScript", "TanStack Table", "Shadcn UI"]}
              image="/pos.png?height=400&width=600"
              demoUrl="#"
              professional={true}
            />
          </div>
        </TabsContent>
      </Tabs>

      <div className="mb-16">
        <h2 className="mb-8 text-3xl font-bold text-white">
          Project Spotlight
        </h2>

        <Card className="overflow-hidden border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="aspect-video overflow-hidden bg-black">
              <img
                src="/space-flight.png?height=400&width=600"
                alt="Space Rocket App"
                className="h-full w-full object-cover"
              />
            </div>

            <CardContent className="flex flex-col justify-center p-8">
              <div className="mb-2 flex items-center gap-2">
                <h3 className="text-2xl font-bold text-white">
                  Space Rocket App
                </h3>
                <Badge className="bg-emerald-500/20 text-emerald-400">
                  Featured
                </Badge>
              </div>

              <p className="mb-6 text-zinc-400">
                An interactive application that allows users to browse and
                filter SpaceX rockets with pagination and detailed information.
                Built with React, TypeScript, and Tailwind CSS.
              </p>

              <div className="mb-6">
                <h4 className="mb-2 text-lg font-medium text-white">
                  Key Features
                </h4>
                <ul className="ml-6 list-disc space-y-2 text-zinc-400">
                  <li>Browse rockets with pagination (9 per page)</li>
                  <li>Filter by name, launch status, and date</li>
                  <li>Responsive design for all devices</li>
                  <li>Detailed view for each rocket</li>
                  <li>Integration with SpaceX API</li>
                </ul>
              </div>

              <div className="mb-6 flex flex-wrap gap-2">
                <Badge className="bg-zinc-800 text-zinc-300">React</Badge>
                <Badge className="bg-zinc-800 text-zinc-300">TypeScript</Badge>
                <Badge className="bg-zinc-800 text-zinc-300">
                  Tailwind CSS
                </Badge>
                <Badge className="bg-zinc-800 text-zinc-300">Vite</Badge>
                <Badge className="bg-zinc-800 text-zinc-300">REST API</Badge>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                  <Link
                    href="https://space-flight-azure.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button asChild variant="outline">
                  <Link
                    href="https://github.com/QuaziSamiha/space-flight"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Repo
                    <Github className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>

      <div className="text-center">
        <h2 className="mb-4 text-3xl font-bold text-white">
          Want to Work Together?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-zinc-400">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
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
      </div>
    </div>
  );
}

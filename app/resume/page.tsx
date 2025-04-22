import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Code,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            Resume
          </h1>
          <p className="max-w-2xl text-zinc-400">
            My professional experience and qualifications
          </p>
        </div>
        <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
          <Link
            href="https://drive.google.com/file/d/1mYTIBu_te1UjTyybl9vJxzuMnEiJ5zcH/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Link>
        </Button>
      </div>

      <Card className="mb-12 border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
        <CardContent className="p-6 md:p-8">
          <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-3xl font-bold text-white">
                Quazi Samiha Tasnim
              </h2>
              <p className="text-xl text-emerald-400">Front-End Developer</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="outline" size="sm">
                <Link href="mailto:quazisamiha@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  quazisamiha@gmail.com
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="tel:+8801734006945">
                  <Phone className="mr-2 h-4 w-4" />
                  +8801734006945
                </Link>
              </Button>
            </div>
          </div>

          <div className="mb-6 flex flex-wrap gap-4 text-sm text-zinc-400">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>Dhaka, Bangladesh</span>
            </div>
            <div className="flex items-center gap-1">
              <Link
                href="https://www.linkedin.com/in/quazi-samiha-tasnim"
                className="flex items-center gap-1 text-emerald-400 hover:underline"
              >
                <span>LinkedIn</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
            <div className="flex items-center gap-1">
              <Link
                href="https://github.com/QuaziSamiha"
                className="flex items-center gap-1 text-emerald-400 hover:underline"
              >
                <span>GitHub</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
            <div className="flex items-center gap-1">
              <Link
                href="https://q-samiha-portfolio.vercel.app/"
                className="flex items-center gap-1 text-emerald-400 hover:underline"
              >
                <span>Portfolio</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          <div className="prose prose-invert max-w-none prose-p:text-zinc-400">
            <p>
              Creative and detail-oriented Front-End Developer with a strong
              background in Next.js, TypeScript, and modern UI libraries. I
              bring a user-first approach to building responsive, scalable web
              applications. Currently working at ATI Limited, contributing to
              national and international-scale projects.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="mb-12">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20">
            <Briefcase className="h-4 w-4 text-emerald-400" />
          </div>
          <h2 className="text-2xl font-bold text-white">Work Experience</h2>
        </div>

        <div className="space-y-6">
          {/* ATI Limited */}
          <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Front-End Developer
                  </h3>
                  <p className="text-emerald-400">
                    <a
                      href="https://atilimited.net/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      ATI Limited
                    </a>
                  </p>
                </div>
                <Badge
                  variant="outline"
                  className="border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                >
                  May 2024 - Present
                </Badge>
              </div>
              <ul className="ml-6 list-disc space-y-2 text-zinc-400">
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
                <li>
                  Delivered frontend for a POS system (USA-based) with support
                  for mobile, desktop, and web platforms
                </li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge className="bg-zinc-800 text-zinc-300">Next.js</Badge>
                <Badge className="bg-zinc-800 text-zinc-300">Tailwind</Badge>
                <Badge className="bg-zinc-800 text-zinc-300">Redux</Badge>
                <Badge className="bg-zinc-800 text-zinc-300">Shadcn</Badge>
                <Badge className="bg-zinc-800 text-zinc-300">
                  TanStack Query
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Code Studio */}
          <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Front-End Developer
                  </h3>
                  <p className="text-zinc-400">
                    <a
                      href="https://code-studio4.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Code Studio
                    </a>
                  </p>
                </div>
                <Badge
                  variant="outline"
                  className="border-zinc-700 bg-zinc-800/50 text-zinc-400"
                >
                  Sep 2022 - Apr 2023
                </Badge>
              </div>
              <ul className="ml-6 list-disc space-y-2 text-zinc-400">
                <li>Built mobile-first UIs using React + Tailwind</li>
                <li>Deployed responsive projects using cPanel</li>
                <li>Integrated REST APIs for live backend data</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge className="bg-zinc-800 text-zinc-300">React</Badge>
                <Badge className="bg-zinc-800 text-zinc-300">Tailwind</Badge>
                <Badge className="bg-zinc-800 text-zinc-300">REST APIs</Badge>
                <Badge className="bg-zinc-800 text-zinc-300">Postman</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Caden Enterprises */}
          <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Frontend Intern
                  </h3>
                  {/* <p className="text-zinc-400">Caden Enterprises</p> */}
                  <p className="text-zinc-400">
                    <a
                      href="https://drive.google.com/file/d/10u5IdsSSKd1qoBh8pOJF-yXlCw2gJHVa/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Caden Enterprises
                    </a>
                  </p>
                </div>
                <Badge
                  variant="outline"
                  className="border-zinc-700 bg-zinc-800/50 text-zinc-400"
                >
                  Sep 2021 - Oct 2021
                </Badge>
              </div>
              <ul className="ml-6 list-disc space-y-2 text-zinc-400">
                <li>Gained real-world experience with React & Redux</li>
                <li>Styled interfaces with Tailwind</li>
                <li>Collaborated with remote dev teams</li>
              </ul>
              <div className="mt-4">
                <h4 className="mb-2 text-sm font-medium text-white">
                  Tech Stack:
                </h4>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-zinc-800 text-zinc-300">React</Badge>
                  <Badge className="bg-zinc-800 text-zinc-300">Redux</Badge>
                  <Badge className="bg-zinc-800 text-zinc-300">Tailwind</Badge>
                </div>
              </div>
              {/* <div className="mt-4">
                <Button asChild variant="outline" size="sm">
                  <Link
                    href="https://drive.google.com/file/d/10u5IdsSSKd1qoBh8pOJF-yXlCw2gJHVa/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                  </Link>
                </Button>
              </div> */}
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-12">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20">
            <GraduationCap className="h-4 w-4 text-emerald-400" />
          </div>
          <h2 className="text-2xl font-bold text-white">Education</h2>
        </div>

        <div className="space-y-6">
          <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    MSc Engg in CSE
                  </h3>
                  <p className="text-emerald-400">
                    Bangladesh University of Engineering and Technology (BUET)
                  </p>
                </div>
                <Badge
                  variant="outline"
                  className="border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                >
                  April 2024 - Present
                </Badge>
              </div>
              <p className="mb-2 text-zinc-400">CGPA: 3.00 / 4.00</p>
              <p className="text-zinc-400">
                Research Focus: Natural Language Processing
              </p>
            </CardContent>
          </Card>

          <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    BSc in CSE
                  </h3>
                  <p className="text-zinc-400">
                    Rajshahi University of Engineering & Technology (RUET)
                  </p>
                </div>
                <Badge
                  variant="outline"
                  className="border-zinc-700 bg-zinc-800/50 text-zinc-400"
                >
                  2018 - 2023
                </Badge>
              </div>
              <p className="text-zinc-400">CGPA: 2.90 / 4.00</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-12">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20">
            <Code className="h-4 w-4 text-emerald-400" />
          </div>
          <h2 className="text-2xl font-bold text-white">Skills</h2>
        </div>

        <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-lg font-medium text-white">
                  Front-End Development
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-zinc-800 text-zinc-300">Next.js</Badge>
                  <Badge className="bg-zinc-800 text-zinc-300">React.js</Badge>
                  <Badge className="bg-zinc-800 text-zinc-300">
                    TypeScript
                  </Badge>
                  <Badge className="bg-zinc-800 text-zinc-300">
                    JavaScript
                  </Badge>
                  <Badge className="bg-zinc-800 text-zinc-300">HTML/CSS</Badge>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-medium text-white">
                  UI/UX Styling
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-zinc-800 text-zinc-300">
                    Tailwind CSS
                  </Badge>
                  <Badge className="bg-zinc-800 text-zinc-300">Shadcn UI</Badge>
                  <Badge className="bg-zinc-800 text-zinc-300">
                    Material UI
                  </Badge>
                  <Badge className="bg-zinc-800 text-zinc-300">
                    Styled Components
                  </Badge>
                  <Badge className="bg-zinc-800 text-zinc-300">SCSS</Badge>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-medium text-white">
                  State Management
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-zinc-800 text-zinc-300">
                    Redux Toolkit
                  </Badge>
                  <Badge className="bg-zinc-800 text-zinc-300">
                    React Query
                  </Badge>
                  <Badge className="bg-zinc-800 text-zinc-300">
                    Context API
                  </Badge>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-medium text-white">
                  Tools & Others
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-zinc-800 text-zinc-300">Git</Badge>
                  <Badge className="bg-zinc-800 text-zinc-300">GitHub</Badge>
                  <Badge className="bg-zinc-800 text-zinc-300">Firebase</Badge>
                  <Badge className="bg-zinc-800 text-zinc-300">Vercel</Badge>
                  <Badge className="bg-zinc-800 text-zinc-300">Netlify</Badge>
                  <Badge className="bg-zinc-800 text-zinc-300">Heroku</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20">
            <User className="h-4 w-4 text-emerald-400" />
          </div>
          <h2 className="text-2xl font-bold text-white">Certifications</h2>
        </div>

        <div className="space-y-6">
          <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Complete Web Development Course
                  </h3>
                  <p className="text-zinc-400">Programming Hero (2021)</p>
                </div>
                <Button asChild variant="outline" size="sm">
                  <Link
                    href="https://drive.google.com/file/d/1vwQ7H-S_3aDBp_1lf3p9KpexBecyzdxj/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                  </Link>
                </Button>
              </div>
              <ul className="ml-6 list-disc space-y-2 text-zinc-400">
                <li>HTML, CSS, JS, React, Bootstrap, Tailwind</li>
                <li>Backend with Node.js, MongoDB</li>
                <li>Deployment on Firebase, Netlify, Heroku</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Workshop on Networking, Routing & Switching
                  </h3>
                  <p className="text-zinc-400">In-person Training (2021)</p>
                </div>
                <Button asChild variant="outline" size="sm">
                  <Link
                    href="https://drive.google.com/file/d/123rE6SbPdcCwHmIIOPcxQF1Gg0DU3Mwp/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                  </Link>
                </Button>
              </div>
              <ul className="ml-6 list-disc space-y-2 text-zinc-400">
                <li>Routing simulations using Cisco Packet Tracer</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-12">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20">
            <User className="h-4 w-4 text-emerald-400" />
          </div>
          <h2 className="text-2xl font-bold text-white">References</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="mb-2 text-lg font-medium text-white">
                Mahfuz Islam
              </h3>
              <p className="mb-2 text-zinc-400">
                Team Lead (MERN Team), ATI Ltd
              </p>
              <p className="text-zinc-400">mahfuzislam1695@gmail.com</p>
            </CardContent>
          </Card>

          <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="mb-2 text-lg font-medium text-white">
                Soykot Hosen
              </h3>
              <p className="mb-2 text-zinc-400">Founder & CEO, Code Studio</p>
              <p className="text-zinc-400">soykothosen1603028@gmail.com</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="text-center">
        <Button
          asChild
          size="lg"
          className="bg-emerald-600 hover:bg-emerald-700"
        >
          <Link href="/contact">
            Contact Me
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

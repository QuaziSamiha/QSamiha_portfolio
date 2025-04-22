import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Calendar,
  Code,
  MapPin,
  Mail,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
          Experience
        </h1>
        <p className="max-w-2xl text-zinc-400">
          My professional journey and career highlights
        </p>
      </div>

      <Tabs defaultValue="timeline" className="mb-16">
        <TabsList className="mb-8 grid w-full grid-cols-2 bg-zinc-800/50">
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="details">Detailed Experience</TabsTrigger>
        </TabsList>

        <TabsContent value="timeline">
          <div className="relative border-l border-zinc-800 pl-6">
            {/* ATI Limited */}
            <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-emerald-500"></div>
            <div className="mb-12">
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
              <p className="mb-1 text-emerald-400">
                <a
                  href="https://atilimited.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  ATI Limited
                </a>
              </p>
              <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-zinc-400">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>May 2024 - Present</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
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
                <li>
                  Delivered frontend for a POS system (USA-based) with support
                  for mobile, desktop, and web platforms
                </li>
              </ul>
              <div className="mt-4">
                <h4 className="mb-2 text-lg font-medium text-white">
                  Key Projects:
                </h4>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-zinc-800 text-zinc-300">
                    Her Power (ICT Ministry)
                  </Badge>
                  <Badge className="bg-zinc-800 text-zinc-300">
                    KYAMCH-BRS Bioresearch
                  </Badge>
                  <Badge className="bg-zinc-800 text-zinc-300">
                    Procurement Management System
                  </Badge>
                  <Badge className="bg-zinc-800 text-zinc-300">
                    POS Machine System
                  </Badge>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="mb-2 text-lg font-medium text-white">
                  Tech Stack:
                </h4>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-zinc-800 text-zinc-300">Next.js</Badge>
                  <Badge className="bg-zinc-800 text-zinc-300">Tailwind</Badge>
                  <Badge className="bg-zinc-800 text-zinc-300">Redux</Badge>
                  <Badge className="bg-zinc-800 text-zinc-300">Shadcn</Badge>
                  <Badge className="bg-zinc-800 text-zinc-300">
                    TanStack Query
                  </Badge>
                </div>
              </div>
            </div>

            {/* Code Studio */}
            <div className="absolute -left-1.5 top-[300px] h-3 w-3 rounded-full bg-zinc-600"></div>
            <div className="mb-12">
              <h3 className="mb-2 text-xl font-semibold text-white">
                Front-End Developer
              </h3>
              <p className="mb-1 text-zinc-400">
                <a
                  href="https://code-studio4.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Code Studio
                </a>
              </p>
              <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-zinc-400">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>Sep 2022 - Apr 2023</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>Remote, Rajshahi</span>
                </div>
              </div>
              <ul className="ml-4 list-disc space-y-2 text-zinc-400">
                <li>Built mobile-first UIs using React + Tailwind</li>
                <li>Deployed responsive projects using cPanel</li>
                <li>Integrated REST APIs for live backend data</li>
              </ul>
              <div className="mt-4">
                <h4 className="mb-2 text-lg font-medium text-white">
                  Tech Stack:
                </h4>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-zinc-800 text-zinc-300">React</Badge>
                  <Badge className="bg-zinc-800 text-zinc-300">Tailwind</Badge>
                  <Badge className="bg-zinc-800 text-zinc-300">REST APIs</Badge>
                  <Badge className="bg-zinc-800 text-zinc-300">Postman</Badge>
                </div>
              </div>
            </div>

            {/* Caden Enterprises */}
            <div className="absolute -left-1.5 top-[500px] h-3 w-3 rounded-full bg-zinc-600"></div>
            <div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                Frontend Intern
              </h3>
              {/* <p className="mb-1 text-zinc-400">Caden Enterprises</p> */}
              <p className="text-zinc-400 mb-1">
                <a
                  href="https://drive.google.com/file/d/10u5IdsSSKd1qoBh8pOJF-yXlCw2gJHVa/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Caden Enterprises
                </a>
              </p>

              <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-zinc-400">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>Sep 2021 - Oct 2021</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>Remote, India</span>
                </div>
              </div>
              <ul className="ml-4 list-disc space-y-2 text-zinc-400">
                <li>Gained real-world experience with React & Redux</li>
                <li>Styled interfaces with Tailwind</li>
                <li>Collaborated with remote dev teams</li>
              </ul>
              <div className="mt-4">
                <h4 className="mb-2 text-lg font-medium text-white">
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
            </div>
          </div>
        </TabsContent>

        <TabsContent value="details">
          <div className="grid gap-8">
            {/* ATI Limited */}
            <Card className="overflow-hidden border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="border-b border-zinc-800 bg-zinc-900 p-6">
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20">
                        <Briefcase className="h-6 w-6 text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          Front-End Developer
                        </h3>
                        <p className="text-emerald-400">ATI Limited</p>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                    >
                      Current
                    </Badge>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>May 2024 - Present</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>Dhaka, Bangladesh</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Code className="h-4 w-4" />
                      <span>Full-time</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="mb-4 text-lg font-medium text-white">
                      Responsibilities
                    </h4>
                    <ul className="ml-6 list-disc space-y-2 text-zinc-400">
                      <li>
                        Developed enterprise-level dashboards and admin panels
                        using Next.js + Tailwind + Redux Toolkit
                      </li>
                      <li>
                        Built reusable components and scalable layouts using
                        Shadcn UI and TanStack Table
                      </li>
                      <li>
                        Integrated APIs and managed complex data flow using
                        TanStack Query
                      </li>
                      <li>
                        Delivered frontend for a POS system (USA-based) with
                        support for mobile, desktop, and web platforms
                      </li>
                      <li>
                        Collaborated with backend developers to ensure seamless
                        API integration
                      </li>
                      <li>
                        Implemented responsive designs for all screen sizes
                      </li>
                      <li>
                        Optimized application performance and loading times
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="mb-4 text-lg font-medium text-white">
                      Key Projects
                    </h4>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
                        <h5 className="mb-2 font-medium text-white">
                          Her Power (ICT Ministry)
                        </h5>
                        <p className="mb-2 text-sm text-zinc-400">
                          A platform for women empowerment, featuring resource
                          sharing, community forums, and educational content.
                          featuring resource sharing, community forums, and
                          educational content.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge className="bg-zinc-800 text-zinc-300">
                            Next.js
                          </Badge>
                          <Badge className="bg-zinc-800 text-zinc-300">
                            Redux
                          </Badge>
                          <Badge className="bg-zinc-800 text-zinc-300">
                            Tailwind
                          </Badge>
                          <Badge className="bg-zinc-800 text-zinc-300">
                            Shadcn UI
                          </Badge>
                        </div>
                      </div>

                      <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
                        <h5 className="mb-2 font-medium text-white">
                          KYAMCH-BRS Bioresearch
                        </h5>
                        <p className="mb-2 text-sm text-zinc-400">
                          Portfolio and management system for bioresearch
                          projects, featuring publication tracking and
                          researcher profiles.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge className="bg-zinc-800 text-zinc-300">
                            Next.js
                          </Badge>
                          <Badge className="bg-zinc-800 text-zinc-300">
                            TypeScript
                          </Badge>
                          <Badge className="bg-zinc-800 text-zinc-300">
                            TanStack Query
                          </Badge>
                          <Badge className="bg-zinc-800 text-zinc-300">
                            Shadcn UI
                          </Badge>
                        </div>
                      </div>

                      <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
                        <h5 className="mb-2 font-medium text-white">
                          Procurement Management System
                        </h5>
                        <p className="mb-2 text-sm text-zinc-400">
                          Comprehensive system for Drug International to manage
                          procurements across 17 concerns, with approval
                          workflows and reporting.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge className="bg-zinc-800 text-zinc-300">
                            Next.js
                          </Badge>
                          <Badge className="bg-zinc-800 text-zinc-300">
                            Redux Toolkit
                          </Badge>
                          <Badge className="bg-zinc-800 text-zinc-300">
                            React Hook Form
                          </Badge>
                          <Badge className="bg-zinc-800 text-zinc-300">
                            Yup
                          </Badge>
                        </div>
                      </div>

                      <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
                        <h5 className="mb-2 font-medium text-white">
                          POS Machine System
                        </h5>
                        <p className="mb-2 text-sm text-zinc-400">
                          Web platform for a USA-based POS system, supporting
                          mobile, desktop, and web interfaces with real-time
                          updates.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge className="bg-zinc-800 text-zinc-300">
                            Next.js
                          </Badge>
                          <Badge className="bg-zinc-800 text-zinc-300">
                            TypeScript
                          </Badge>
                          <Badge className="bg-zinc-800 text-zinc-300">
                            TanStack Table
                          </Badge>
                          <Badge className="bg-zinc-800 text-zinc-300">
                            Shadcn UI
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-4 text-lg font-medium text-white">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-zinc-800 text-zinc-300">
                        Next.js
                      </Badge>
                      <Badge className="bg-zinc-800 text-zinc-300">React</Badge>
                      <Badge className="bg-zinc-800 text-zinc-300">
                        TypeScript
                      </Badge>
                      <Badge className="bg-zinc-800 text-zinc-300">
                        Tailwind CSS
                      </Badge>
                      <Badge className="bg-zinc-800 text-zinc-300">
                        Redux Toolkit
                      </Badge>
                      <Badge className="bg-zinc-800 text-zinc-300">
                        TanStack Query
                      </Badge>
                      <Badge className="bg-zinc-800 text-zinc-300">
                        TanStack Table
                      </Badge>
                      <Badge className="bg-zinc-800 text-zinc-300">
                        Shadcn UI
                      </Badge>
                      <Badge className="bg-zinc-800 text-zinc-300">
                        React Hook Form
                      </Badge>
                      <Badge className="bg-zinc-800 text-zinc-300">Yup</Badge>
                      <Badge className="bg-zinc-800 text-zinc-300">Zod</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Code Studio */}
            <Card className="overflow-hidden border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="border-b border-zinc-800 bg-zinc-900 p-6">
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800">
                        <Briefcase className="h-6 w-6 text-zinc-400" />
                      </div>
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
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Sep 2022 - Apr 2023</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>Remote, Rajshahi</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Code className="h-4 w-4" />
                      <span>Full-time</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="mb-4 text-lg font-medium text-white">
                      Responsibilities
                    </h4>
                    <ul className="ml-6 list-disc space-y-2 text-zinc-400">
                      <li>Built mobile-first UIs using React + Tailwind</li>
                      <li>Deployed responsive projects using cPanel</li>
                      <li>Integrated REST APIs for live backend data</li>
                      <li>
                        Collaborated with designers to implement UI/UX designs
                      </li>
                      <li>Optimized website performance and loading times</li>
                      <li>Maintained and updated existing websites</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-4 text-lg font-medium text-white">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-zinc-800 text-zinc-300">React</Badge>
                      <Badge className="bg-zinc-800 text-zinc-300">
                        JavaScript
                      </Badge>
                      <Badge className="bg-zinc-800 text-zinc-300">
                        Tailwind CSS
                      </Badge>
                      <Badge className="bg-zinc-800 text-zinc-300">
                        REST APIs
                      </Badge>
                      <Badge className="bg-zinc-800 text-zinc-300">
                        Postman
                      </Badge>
                      <Badge className="bg-zinc-800 text-zinc-300">
                        cPanel
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Caden Enterprises */}
            <Card className="overflow-hidden border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="border-b border-zinc-800 bg-zinc-900 p-6">
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800">
                        <Briefcase className="h-6 w-6 text-zinc-400" />
                      </div>
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
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Sep 2021 - Oct 2021</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>Remote, India</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Code className="h-4 w-4" />
                      <span>Internship</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="mb-4 text-lg font-medium text-white">
                      Responsibilities
                    </h4>
                    <ul className="ml-6 list-disc space-y-2 text-zinc-400">
                      <li>Gained real-world experience with React & Redux</li>
                      <li>Styled interfaces with Tailwind</li>
                      <li>Collaborated with remote dev teams</li>
                      <li>Assisted in implementing UI components</li>
                      <li>Participated in code reviews and team meetings</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="mb-4 text-lg font-medium text-white">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-zinc-800 text-zinc-300">React</Badge>
                      <Badge className="bg-zinc-800 text-zinc-300">Redux</Badge>
                      <Badge className="bg-zinc-800 text-zinc-300">
                        JavaScript
                      </Badge>
                      <Badge className="bg-zinc-800 text-zinc-300">
                        Tailwind CSS
                      </Badge>
                    </div>
                  </div>

                  {/* <div>
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
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mb-16">
        <h2 className="mb-8 text-3xl font-bold text-white">References</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-zinc-800"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Mahfuz Islam
                  </h3>
                  <p className="text-zinc-400">
                    Team Lead (MERN Team), ATI Ltd
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-zinc-400" />
                <a
                  href="mailto:mahfuzislam1695@gmail.com"
                  className="text-zinc-400 hover:text-zinc-300"
                >
                  mahfuzislam1695@gmail.com
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-zinc-800"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Soykot Hosen
                  </h3>
                  <p className="text-zinc-400">Founder & CEO, Code Studio</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-zinc-400" />
                <a
                  href="mailto:soykothosen1603028@gmail.com"
                  className="text-zinc-400 hover:text-zinc-300"
                >
                  soykothosen1603028@gmail.com
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="text-center">
        <h2 className="mb-4 text-3xl font-bold text-white">
          Ready to Collaborate?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-zinc-400">
          I'm currently open to new opportunities and would love to discuss how
          I can contribute to your team.
        </p>
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

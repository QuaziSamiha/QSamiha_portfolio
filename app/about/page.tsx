import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Code,
  GraduationCap,
  Lightbulb,
  Rocket,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeWindow } from "@/components/code-window";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
          About Me
        </h1>
        <p className="max-w-2xl text-zinc-400">
          Get to know my background, skills, and what drives me as a developer
        </p>
      </div>

      <div className="mb-16 grid gap-12 lg:grid-cols-2">
        <div>
          <div className="mb-8 overflow-hidden rounded-xl border border-zinc-800 bg-black/50 p-1">
            <Image
              src="/pro-pic.png"
              alt="Quazi Samiha Tasnim"
              width={600}
              height={600}
              className="rounded-lg object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="mb-2 text-2xl font-bold text-white">
                Quazi Samiha Tasnim
              </h2>
              <p className="text-emerald-400">Front-End Developer</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-zinc-800 p-1">
                  <Code className="h-4 w-4 text-emerald-400" />
                </div>
                <div>
                  <p className="font-medium text-white">
                    Professional Developer
                  </p>
                  <p className="text-sm text-zinc-400">
                    With experience in enterprise applications
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-zinc-800 p-1">
                  <GraduationCap className="h-4 w-4 text-emerald-400" />
                </div>
                <div>
                  <p className="font-medium text-white">MSc in CSE at BUET</p>
                  <p className="text-sm text-zinc-400">
                    Focusing on Natural Language Processing
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-zinc-800 p-1">
                  <Rocket className="h-4 w-4 text-emerald-400" />
                </div>
                <div>
                  <p className="font-medium text-white">
                    Based in Dhaka, Bangladesh
                  </p>
                  <p className="text-sm text-zinc-400">
                    Open to remote opportunities worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-6 text-2xl font-bold text-white">My Journey</h2>

          <div className="text-justify prose prose-invert max-w-none prose-p:text-zinc-400 prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:underline">
            <p>
              I'm a creative and detail-oriented Front-End Developer with a
              strong background in Next.js, TypeScript, and modern UI libraries.
              I bring a user-first approach to building responsive, scalable web
              applications.
            </p>

            <p>
              Currently working at{" "}
              <a
                href="https://atilimited.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline"
              >
                ATI Limited
              </a>
              , I contribute to national and international-scale projects,
              developing enterprise-level dashboards, admin panels, and complex
              web applications. I specialize in building reusable components and
              scalable layouts using modern technologies like Shadcn UI and
              TanStack Table.
            </p>

            <p>
              Simultaneously, I'm pursuing my MSc in CSE at BUET, with a focus
              on Natural Language Processing. This academic pursuit complements
              my professional work, allowing me to bring research-based insights
              into my development process.
            </p>

            <p>
              My career objective is to become a full-stack developer and
              contribute to impactful software projects, with long-term goals in
              AI/NLP research and product design for scale.
            </p>

            <div className="not-prose mt-8">
              <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                <Link href="/experience">
                  View My Experience
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="education" className="mb-16">
        <TabsList className="mb-8 grid w-full grid-cols-3 bg-zinc-800/50">
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="certifications">Certifications</TabsTrigger>
          <TabsTrigger value="interests">Interests & Goals</TabsTrigger>
        </TabsList>

        <TabsContent value="education">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-2">
                  <div className="rounded-full bg-emerald-500/20 p-2">
                    <GraduationCap className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      MSc Engg in CSE
                    </h3>
                    <p className="text-sm text-zinc-400">
                      April 2024 - Present
                    </p>
                  </div>
                </div>
                <div>
                  <p className="mb-2 font-medium text-white">
                    Bangladesh University of Engineering and Technology (BUET)
                  </p>
                  <p className="mb-2 text-zinc-400">CGPA: 3.00 / 4.00</p>
                  <p className="text-zinc-400">
                    Research Focus: Natural Language Processing
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-2">
                  <div className="rounded-full bg-zinc-700 p-2">
                    <GraduationCap className="h-5 w-5 text-zinc-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      BSc in CSE
                    </h3>
                    <p className="text-sm text-zinc-400">2018 - 2023</p>
                  </div>
                </div>
                <div>
                  <p className="mb-2 font-medium text-white">
                    Rajshahi University of Engineering & Technology (RUET)
                  </p>
                  <p className="mb-2 text-zinc-400">CGPA: 2.90 / 4.00</p>
                  <p className="text-zinc-400">
                    Focused on Computer Science fundamentals and software
                    development
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-2">
                  <div className="rounded-full bg-zinc-700 p-2">
                    <BookOpen className="h-5 w-5 text-zinc-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">HSC</h3>
                    <p className="text-sm text-zinc-400">2017</p>
                  </div>
                </div>
                <div>
                  <p className="mb-2 font-medium text-white">
                    Rajshahi College
                  </p>
                  <p className="text-zinc-400">GPA: 5.00</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-2">
                  <div className="rounded-full bg-zinc-700 p-2">
                    <BookOpen className="h-5 w-5 text-zinc-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">SSC</h3>
                    <p className="text-sm text-zinc-400">2015</p>
                  </div>
                </div>
                <div>
                  <p className="mb-2 font-medium text-white">
                    Govt. PN Girls School
                  </p>
                  <p className="text-zinc-400">GPA: 5.00</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="certifications">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-2">
                  <div className="rounded-full bg-emerald-500/20 p-2">
                    <Code className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Complete Web Development Course
                    </h3>
                    <p className="text-sm text-zinc-400">
                      Programming Hero (2021)
                    </p>
                  </div>
                </div>
                <ul className="ml-6 list-disc space-y-2 text-zinc-400">
                  <li>HTML, CSS, JS, React, Bootstrap, Tailwind</li>
                  <li>Backend with Node.js, MongoDB</li>
                  <li>Deployment on Firebase, Netlify, Heroku</li>
                </ul>
                <div className="mt-4">
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
              </CardContent>
            </Card>

            <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-2">
                  <div className="rounded-full bg-emerald-500/20 p-2">
                    <Rocket className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Workshop on Networking, Routing & Switching
                    </h3>
                    <p className="text-sm text-zinc-400">
                      In-person Training (2021)
                    </p>
                  </div>
                </div>
                <ul className="ml-6 list-disc space-y-2 text-zinc-400">
                  <li>Routing simulations using Cisco Packet Tracer</li>
                  <li>Network configuration and troubleshooting</li>
                  <li>Hands-on experience with routing protocols</li>
                </ul>
                <div className="mt-4">
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
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="interests">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-2">
                  <div className="rounded-full bg-emerald-500/20 p-2">
                    <Lightbulb className="h-5 w-5 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    Professional Interests
                  </h3>
                </div>
                <ul className="ml-6 list-disc space-y-2 text-zinc-400">
                  <li>Full-stack development with MERN stack</li>
                  <li>UI/UX design and implementation</li>
                  <li>Performance optimization for web applications</li>
                  <li>Natural Language Processing and AI integration</li>
                  <li>Building accessible and inclusive web experiences</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-2">
                  <div className="rounded-full bg-emerald-500/20 p-2">
                    <Rocket className="h-5 w-5 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    Career Goals
                  </h3>
                </div>
                <ul className="ml-6 list-disc space-y-2 text-zinc-400">
                  <li>Become a proficient full-stack developer</li>
                  <li>Contribute to open-source projects</li>
                  <li>Lead development teams on impactful projects</li>
                  <li>Combine AI/NLP research with practical applications</li>
                  <li>
                    Design and build products that scale to millions of users
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mb-16">
        <h2 className="mb-8 text-3xl font-bold text-white">
          My Coding Philosophy
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <div className="prose prose-invert max-w-none prose-p:text-zinc-400">
              <p>
                I believe in writing clean, maintainable, and performant code.
                My approach to development is centered around these key
                principles:
              </p>

              <ul className="list-disc pl-6">
                <li>User-centric design and development</li>
                <li>Component-based architecture for reusability</li>
                <li>Performance optimization as a core requirement</li>
                <li>Accessibility for all users</li>
                <li>Continuous learning and improvement</li>
              </ul>

              <p>
                I'm passionate about creating web experiences that are not only
                visually appealing but also functionally robust and accessible
                to everyone.
              </p>
            </div>
          </div>

          <CodeWindow
            title="philosophy.js"
            language="javascript"
            code={`/**
 * My Development Philosophy
 * 
 * @author Quazi Samiha Tasnim
 */

const developmentPrinciples = {
  userCentric: true,
  componentBased: true,
  performanceOptimized: true,
  accessible: true,
  continuousLearning: true,
  
  apply: function(project) {
    // Start with user needs
    const userNeeds = project.getUserRequirements();
    
    // Design component architecture
    const components = this.designComponents(userNeeds);
    
    // Implement with performance in mind
    const implementation = components.map(
      component => this.implementWithPerformance(component)
    );
    
    // Ensure accessibility
    implementation.forEach(
      component => this.makeAccessible(component)
    );
    
    // Learn from the process
    this.learnAndImprove(project);
    
    return implementation;
  }
};

// Always be learning new technologies
const currentlyLearning = [
  "Advanced TypeScript Patterns",
  "SQL & NoSQL Databases",
  "NLP Research",
  "Full-stack Architecture"
];`}
          />
        </div>
      </div>

      <div className="text-center">
        <Button
          asChild
          size="lg"
          className="bg-emerald-600 hover:bg-emerald-700"
        >
          <Link href="/projects">
            Explore My Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

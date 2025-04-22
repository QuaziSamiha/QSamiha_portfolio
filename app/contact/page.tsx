import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CodeWindow } from "@/components/code-window"

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">Contact Me</h1>
        <p className="max-w-2xl text-zinc-400">Let's discuss how we can work together</p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <div className="mb-8">
            <h2 className="mb-6 text-2xl font-bold text-white">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20">
                  <Mail className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Email</h3>
                  <p className="text-zinc-400">
                    <a href="mailto:quazisamiha@gmail.com" className="hover:text-zinc-300">
                      quazisamiha@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20">
                  <Phone className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Phone</h3>
                  <p className="text-zinc-400">+8801734006945</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20">
                  <MapPin className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Location</h3>
                  <p className="text-zinc-400">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="mb-6 text-2xl font-bold text-white">Connect</h2>
            <div className="flex gap-4">
              <Link href="https://github.com/QuaziSamiha" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="h-12 w-12 rounded-full">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/quazi-samiha-tasnim" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="h-12 w-12 rounded-full">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:quazisamiha@gmail.com">
                <Button variant="outline" size="icon" className="h-12 w-12 rounded-full">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-2xl font-bold text-white">Quick Contact</h2>
            <CodeWindow
              title="contact.js"
              language="javascript"
              code={`/**
 * Contact Quazi Samiha
 */

const contact = {
  name: "Quazi Samiha Tasnim",
  email: "quazisamiha@gmail.com",
  phone: "+8801734006945",
  location: "Dhaka, Bangladesh",
  github: "https://github.com/QuaziSamiha",
  linkedin: "https://www.linkedin.com/in/quazi-samiha-tasnim",
  company: "https://atilimited.net/",
  
  // Send a message
  sendMessage: async function(message) {
    try {
      console.log("Sending message...");
      
      // Message details
      const details = {
        from: message.email,
        subject: message.subject,
        body: message.message,
        timestamp: new Date()
      };
      
      // Simulate API call
      await new Promise(resolve => 
        setTimeout(resolve, 1000)
      );
      
      console.log("Message sent successfully!");
      return {
        success: true,
        message: "I'll get back to you soon!"
      };
    } catch (error) {
      console.error("Error sending message:", error);
      return {
        success: false,
        message: "Please try again later."
      };
    }
  }
};

// Example usage
contact.sendMessage({
  name: "Potential Employer",
  email: "employer@company.com",
  subject: "Job Opportunity",
  message: "We'd like to discuss a position..."
});`}
            />
          </div>
        </div>

        <div>
          <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <h2 className="mb-6 text-2xl font-bold text-white">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">
                      Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="border-zinc-800 bg-zinc-950 text-white placeholder:text-zinc-400 focus-visible:ring-emerald-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="border-zinc-800 bg-zinc-950 text-white placeholder:text-zinc-400 focus-visible:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-white">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    placeholder="Subject of your message"
                    className="border-zinc-800 bg-zinc-950 text-white placeholder:text-zinc-400 focus-visible:ring-emerald-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    rows={6}
                    className="border-zinc-800 bg-zinc-950 text-white placeholder:text-zinc-400 focus-visible:ring-emerald-500"
                  />
                </div>

                <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8">
            <h2 className="mb-6 text-2xl font-bold text-white">Availability</h2>
            <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white">Current Status</span>
                    <span className="inline-flex items-center rounded-full bg-emerald-500/20 px-3 py-1 text-sm text-emerald-400">
                      <span className="mr-1.5 h-2 w-2 rounded-full bg-emerald-400"></span>
                      Available for Hire
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-white">Response Time</span>
                    <span className="text-zinc-400">Within 24 hours</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-white">Preferred Work</span>
                    <span className="text-zinc-400">Full-time</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-white">Remote Work</span>
                    <span className="text-zinc-400">Yes</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-white">Relocation</span>
                    <span className="text-zinc-400">Open to discussion</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

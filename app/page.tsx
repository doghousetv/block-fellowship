"use client"

import { useEffect, useState } from "react"
import { Download, Music, Github, Linkedin, Twitter, Mail, ExternalLink, Play } from "lucide-react"

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Set mouse position state
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
    setActiveSection(sectionId)
  }

  return (
    <main className="w-full bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full h-16 flex items-center px-8 md:px-16 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
        <div className="flex-1">
          <h1 className="text-xl font-light tracking-tight">George Arubi</h1>
        </div>
        <div className="flex gap-8 md:gap-12 text-sm font-light tracking-wide">
          {["about", "projects", "opensource", "djwork", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`transition-all duration-300 ${
                activeSection === item
                  ? "text-foreground border-b border-foreground/50"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.charAt(0).toUpperCase() +
                item
                  .slice(1)
                  .replace(/([A-Z])/g, " $1")
                  .trim()}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="about"
        className="min-h-screen flex items-center px-8 md:px-16 lg:px-24 pt-16 relative overflow-hidden"
      >
        {/* Geometric background elements */}
        <div className="absolute top-20 right-10 w-72 h-72 border border-border/30 rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-20 left-10 w-96 h-96 border border-border/20 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-2 h-2 bg-border rounded-full animate-ping"
          style={{ animationDuration: "3s" }}
        ></div>

        <div className="max-w-4xl w-full relative z-10">
          <div className="space-y-8">
            <div>
              <p className="text-muted-foreground text-sm font-light tracking-widest mb-4">FULL STACK ENGINEER</p>
              <h2 className="text-5xl md:text-7xl font-light tracking-tight mb-6 text-balance">
                Building at the intersection of{" "}
                <span className="text-foreground font-light border-b border-border/50 pb-1">AI, music</span>, and
                community.
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I rapidly prototype with AI tools, contribute to open source projects, and help music-tech startups move
              faster. Currently a fullstack engineer at <span className="text-foreground font-medium">Patchbay</span> —
              an agentic AI operating system for music management teams.
            </p>

            <div className="flex gap-4 pt-8">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 bg-foreground text-background text-sm font-light tracking-wide hover:bg-foreground/90 transition-colors"
              >
                View Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 border border-border text-sm font-light tracking-wide hover:bg-border/10 transition-colors"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center px-8 md:px-16 lg:px-24 py-32 relative">
        <div className="absolute top-1/4 right-0 w-1 h-1/2 bg-gradient-to-b from-border/30 via-border/50 to-transparent"></div>
        {/* Geometric corner accent */}
        <div className="absolute bottom-0 right-24 w-64 h-64 border border-border/20 rounded-tl-full opacity-30"></div>

        <div className="max-w-5xl w-full relative z-10">
          <div className="mb-20">
            <h3 className="text-4xl md:text-5xl font-light tracking-tight mb-4">Projects</h3>
            <p className="text-muted-foreground font-light">Selected work that defines my journey</p>
          </div>

          <div className="space-y-16">
            {/* Algorhythm - Featured Project */}
            <div className="group">
              {/* Image/video placeholder for projects */}
              <div className="mb-6 relative overflow-hidden rounded-lg bg-border/20 aspect-video flex items-center justify-center border border-border/30 hover:border-border/50 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-border/40 via-transparent to-transparent"></div>
                <div className="flex flex-col items-center gap-3 text-muted-foreground relative z-10">
                  <div className="w-12 h-12 border border-border/50 rounded-full flex items-center justify-center">
                    <Play className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-light">Project Preview</p>
                </div>
              </div>

              <div className="border-l-2 border-border pl-8 py-6 hover:border-foreground transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-light mb-2 group-hover:text-foreground/90 transition-colors">
                      Algorhythm
                    </h4>
                    <p className="text-muted-foreground text-sm">AI-powered music cover art recognition engine</p>
                  </div>
                  <span className="px-3 py-1 text-xs border border-border/50 rounded-full text-muted-foreground font-light">
                    Featured
                  </span>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Think reverse image search for vinyl records. I built a working prototype using AI and I'm currently
                  training the image model to improve its accuracy. The idea came while vinyl shopping—turning IRL music
                  discovery into an online moment where I can "collect" albums found in the wild. It's like Shazam for
                  music cover art.
                </p>
                <div className="flex gap-3 text-xs text-muted-foreground font-light">
                  <span>AI/ML</span>
                  <span>•</span>
                  <span>Computer Vision</span>
                  <span>•</span>
                  <span>Product</span>
                </div>
              </div>
            </div>

            {/* Patchbay */}
            <div className="group">
              <div className="mb-6 relative overflow-hidden rounded-lg bg-border/20 aspect-video flex items-center justify-center border border-border/30 hover:border-border/50 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-border/40 via-transparent to-transparent"></div>
                <div className="flex flex-col items-center gap-3 text-muted-foreground relative z-10">
                  <div className="w-12 h-12 border border-border/50 rounded-full flex items-center justify-center">
                    <Play className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-light">Project Preview</p>
                </div>
              </div>

              <div className="border-l-2 border-border pl-8 py-6 hover:border-foreground transition-colors">
                <div>
                  <h4 className="text-2xl font-light mb-2 group-hover:text-foreground/90 transition-colors">
                    Patchbay
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4">Music team OS for industry professionals</p>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  A music team operating system (operating system) for industry professionals. I developed the UI/UX,
                  defined the system architecture, and built AI-driven recommendation systems. This is where I currently
                  work as a fullstack engineer, pushing the boundaries of what's possible in music management
                  technology.
                </p>
                <div className="flex gap-3 text-xs text-muted-foreground font-light">
                  <span>TypeScript</span>
                  <span>•</span>
                  <span>Python</span>
                  <span>•</span>
                  <span>Systems Design</span>
                </div>
              </div>
            </div>

            {/* Rollout */}
            <div className="group">
              <div className="mb-6 relative overflow-hidden rounded-lg bg-border/20 aspect-video flex items-center justify-center border border-border/30 hover:border-border/50 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-border/40 via-transparent to-transparent"></div>
                <div className="flex flex-col items-center gap-3 text-muted-foreground relative z-10">
                  <div className="w-12 h-12 border border-border/50 rounded-full flex items-center justify-center">
                    <Play className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-light">Project Preview</p>
                </div>
              </div>

              <div className="border-l-2 border-border pl-8 py-6 hover:border-foreground transition-colors">
                <div>
                  <h4 className="text-2xl font-light mb-2 group-hover:text-foreground/90 transition-colors">Rollout</h4>
                  <p className="text-muted-foreground text-sm mb-4">Label-focused task management platform</p>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  A task management platform for record labels and artist managers. I led the development of an AI task
                  recommender that integrates Spotify and Chartmetric metadata to prioritize tasks intelligently.
                </p>
                <div className="flex gap-3 text-xs text-muted-foreground font-light">
                  <span>AI Integration</span>
                  <span>•</span>
                  <span>API Design</span>
                  <span>•</span>
                  <span>Full Stack</span>
                </div>
              </div>
            </div>

            {/* Silence Please */}
            <div className="group">
              <div className="mb-6 relative overflow-hidden rounded-lg bg-border/20 aspect-video flex items-center justify-center border border-border/30 hover:border-border/50 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-border/40 via-transparent to-transparent"></div>
                <div className="flex flex-col items-center gap-3 text-muted-foreground relative z-10">
                  <div className="w-12 h-12 border border-border/50 rounded-full flex items-center justify-center">
                    <Play className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-light">Project Preview</p>
                </div>
              </div>

              <div className="border-l-2 border-border pl-8 py-6 hover:border-foreground transition-colors">
                <div>
                  <h4 className="text-2xl font-light mb-2 group-hover:text-foreground/90 transition-colors">
                    Silence Please
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4">Intimate listening event platform</p>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  An experimental product creating spaces for deep listening and community-building around music. This
                  project explores the intersection of technology and intimate sonic experiences.
                </p>
                <div className="flex gap-3 text-xs text-muted-foreground font-light">
                  <span>Community</span>
                  <span>•</span>
                  <span>Experience Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section id="opensource" className="min-h-screen flex items-center px-8 md:px-16 lg:px-24 py-32 relative">
        {/* Geometric circle accents */}
        <div className="absolute top-1/3 left-0 w-96 h-96 border border-border/20 rounded-full opacity-40"></div>
        <div className="absolute bottom-0 left-1/2 w-1 h-1/2 bg-gradient-to-t from-border/30 via-border/50 to-transparent"></div>

        <div className="max-w-5xl w-full relative z-10">
          <div className="mb-20">
            <h3 className="text-4xl md:text-5xl font-light tracking-tight mb-4">Open Source</h3>
            <p className="text-muted-foreground font-light">Building tools and communities for music technology</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Everyone's Radio */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-border/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-8 border border-border group-hover:border-border/70 transition-colors rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Music className="w-6 h-6 text-foreground/60" />
                  <h4 className="text-xl font-light">Everyone's Radio</h4>
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed mb-6">
                  Co-founded an open-source music-tech community with 16 collaborators across design and engineering.
                </p>
                <div className="flex items-center gap-2 text-foreground/70 text-sm font-light hover:gap-3 hover:text-foreground transition-all">
                  <span>View on Notion</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Oroko Radio */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-border/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-8 border border-border group-hover:border-border/70 transition-colors rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Music className="w-6 h-6 text-foreground/60" />
                  <h4 className="text-xl font-light">Oroko Radio</h4>
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed mb-6">
                  Resident DJ and open-source contributor for this Accra-based internet radio station. I've built custom
                  tools for DJs and improved internal workflows to support station operations.
                </p>
                <div className="flex items-center gap-2 text-foreground/70 text-sm font-light hover:gap-3 hover:text-foreground transition-all">
                  <span>Visit Station</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DJ Work Section */}
      <section
        id="djwork"
        className="min-h-screen flex items-center px-8 md:px-16 lg:px-24 py-32 relative overflow-hidden"
      >
        {/* Animated geometric circle accent */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 border border-border/25 rounded-full animate-pulse"
          style={{ animationDuration: "4s" }}
        ></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 border-2 border-dashed border-border/15 rounded-full opacity-40"></div>

        <div className="max-w-5xl w-full relative z-10">
          <div className="mb-20">
            <h3 className="text-4xl md:text-5xl font-light tracking-tight mb-4">DJ Work</h3>
            <p className="text-muted-foreground font-light">Where music fuels technical creativity</p>
          </div>

          <div className="prose-invert max-w-2xl">
            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              As a resident DJ at <span className="text-foreground font-medium">Oroko Radio</span>, I channel my love
              for sonic storytelling into curated musical journeys. Music isn't just entertainment for me—it's a source
              of inspiration that fuels my creativity in tech.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80">
              Whether I'm behind the turntables or the keyboard, the art of mixing and improvisation inspires me to
              build technology that brings people together and amplifies creative expression. The same principles apply:
              listening deeply, understanding context, and orchestrating elements to create something greater than the
              sum of its parts.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center px-8 md:px-16 lg:px-24 py-32 relative">
        {/* Replaced orange gradient with subtle border gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-border/10 via-transparent to-transparent opacity-50"></div>

        <div className="max-w-5xl w-full relative z-10">
          <div className="mb-20">
            <h3 className="text-4xl md:text-5xl font-light tracking-tight mb-4">Get In Touch</h3>
            <p className="text-muted-foreground font-light">Let's build something together</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Email */}
            <div className="group">
              <p className="text-xs text-muted-foreground font-light tracking-widest mb-4 uppercase">Email</p>
              <a
                href="mailto:george@example.com"
                className="text-xl font-light hover:text-foreground transition-colors group-hover:translate-x-2 transition-transform inline-block"
              >
                george@example.com
              </a>
            </div>

            {/* GitHub */}
            <div className="group">
              <p className="text-xs text-muted-foreground font-light tracking-widest mb-4 uppercase">GitHub</p>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-light hover:text-foreground transition-colors group-hover:translate-x-2 transition-transform inline-block flex items-center gap-2"
              >
                @georgearubi <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* LinkedIn */}
            <div className="group">
              <p className="text-xs text-muted-foreground font-light tracking-widest mb-4 uppercase">LinkedIn</p>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-light hover:text-foreground transition-colors group-hover:translate-x-2 transition-transform inline-block flex items-center gap-2"
              >
                George Arubi <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 pt-12 border-t border-border/50">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-border hover:border-foreground/50 text-muted-foreground hover:text-foreground transition-all rounded-lg"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-border hover:border-foreground/50 text-muted-foreground hover:text-foreground transition-all rounded-lg"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-border hover:border-foreground/50 text-muted-foreground hover:text-foreground transition-all rounded-lg"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:george@example.com"
              className="p-3 border border-border hover:border-foreground/50 text-muted-foreground hover:text-foreground transition-all rounded-lg"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Resume Download */}
          <div className="mt-16 pt-12 border-t border-border/50">
            <p className="text-sm text-muted-foreground font-light mb-4">Download my resume</p>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-3 px-6 py-3 border border-border bg-border/10 hover:bg-border/20 text-foreground text-sm font-light tracking-wide transition-all rounded-lg"
            >
              <Download className="w-4 h-4" />
              George_Arubi_Resume.pdf
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-8 md:px-16 lg:px-24">
        <div className="flex justify-between items-center text-xs text-muted-foreground font-light">
          <p>© 2025 George Arubi. All rights reserved.</p>
          <p>Crafted with attention to detail</p>
        </div>
      </footer>
    </main>
  )
}

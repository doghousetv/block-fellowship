"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight, Play, Radio } from "lucide-react"

const projects = [
  {
    number: "01",
    name: "Feeture",
    url: "https://feeture.com",
    title: "Turning collaboration into a growth engine for artists.",
    description:
      "A marketplace connecting artists and teams for features, remixes, co-writes, and session work—using data to inform collaboration fees, predict listener growth, and recommend artist matches.",
    detail:
      "As Head of Product, I lead the artist-facing app, backend platform, and intelligence layer, spanning collaboration workflows, payments, and predictive models validated against real-world outcomes.",
    tags: ["Product Leadership", "Applied ML", "Full-Stack Engineering"],
    accent: "coral",
  },
  {
    number: "02",
    name: "Patchbay",
    url: "https://patchbay.xyz",
    title: "Building better infrastructure for the music industry.",
    description:
      "Music teams spend too much time managing fragmented workflows across deals, catalogs, releases, contracts, and payments. Patchbay brings these moving parts into one workspace.",
    detail:
      "I contributed across product design, frontend and backend engineering, system architecture, and AI-driven product experiences—helping turn complex music-industry workflows into a more cohesive way of working.",
    tags: ["Full-Stack Engineering", "Product Design", "Systems Architecture"],
    accent: "blue",
  },
  {
    number: "03",
    name: "Rollout",
    url: "https://rollout.cc",
    title: "Helping artists build sustainable businesses.",
    description:
      "Artists need more than a place to release music. They need the tools and infrastructure to grow their businesses.",
    detail:
      "As a founding engineer, I built products that helped artists and their teams operate more effectively, including an AI-powered task recommendation system combining streaming and industry data.",
    tags: ["Founding Engineering", "AI Integration", "API Design"],
    accent: "gold",
  },
  {
    number: "04",
    name: "Silence Please",
    url: "https://silence-please.vercel.app",
    title: "Creating space for deeper listening.",
    description:
      "An exploration of how intentional listening experiences can bring people closer to music and one another.",
    detail:
      "Through event experiences and supporting digital tools, the project looks beyond passive music consumption toward more intimate, participatory ways of discovering and sharing music.",
    tags: ["Experience Design", "Music Culture", "Community"],
    accent: "ink",
  },
]

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const sections = ["about", "projects", "opensource", "djwork", "contact"]
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)),
      { rootMargin: "-35% 0px -55%" },
    )
    sections.forEach((id) => document.getElementById(id) && observer.observe(document.getElementById(id)!))
    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <main className="site-shell">
      <nav className="site-nav">
        <button className="brand-mark" onClick={() => scrollToSection("about")} aria-label="Back to top">
          George Arubi<span>.</span>
        </button>
        <div className="nav-links" aria-label="Primary navigation">
          {["about", "projects", "opensource", "djwork", "contact"].map((item) => (
            <button key={item} onClick={() => scrollToSection(item)} className={activeSection === item ? "active" : ""}>
              {item === "djwork" ? "DJ" : item === "opensource" ? "Community" : item}
            </button>
          ))}
        </div>
      </nav>

      <section id="about" className="hero section-pad">
        <div className="hero-copy">
          <p className="eyebrow">Software Engineer · Product Builder · DJ</p>
          <h1>Building technology for <em>music, culture,</em> and community.</h1>
          <p className="hero-intro">I&apos;m a software engineer and product builder working at the intersection of technology, creativity, and culture. I turn ideas into products—from early-stage prototypes and AI-powered systems to thoughtful interfaces and reliable software.</p>
          <div className="hero-actions"><button className="button button-dark" onClick={() => scrollToSection("projects")}>Explore my work <ArrowUpRight size={16} /></button><button className="text-link" onClick={() => scrollToSection("contact")}>Get in touch <span>↗</span></button></div>
        </div>
        <div className="hero-art" aria-label="Abstract graphic representing sound and systems">
          <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-orbit orbit-three" /><div className="art-core" /><span className="art-label">CREATE / CONNECT / DISCOVER</span>
        </div>
      </section>

      <section id="projects" className="projects section-pad">
        <div className="section-heading"><div><p className="eyebrow">01 / Selected work</p><h2>Products with a point of view.</h2></div><p>A collection of products, experiments, and tools exploring what&apos;s possible when technology meets music and culture.</p></div>
        <div className="project-list">{projects.map((project) => <article className={`project-card accent-${project.accent}`} key={project.name}><div className="project-index">{project.number}</div><a className="project-visual" href={project.url} target="_blank" rel="noreferrer"><div className="visual-grid" /><span>{project.name}</span><ArrowUpRight size={20} /></a><div className="project-content"><p className="project-kicker">{project.name}</p><h3>{project.title}</h3><p>{project.description}</p><p className="project-detail">{project.detail}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
      </section>

      <section id="opensource" className="community section-pad"><div className="community-intro"><p className="eyebrow">02 / Open source & community</p><h2>Building in public. Building with people.</h2><p>I believe the best technology ecosystems are built through collaboration, shared knowledge, and tools that give communities more agency.</p></div><div className="community-grid"><article><div className="community-icon"><Radio size={19} /></div><p className="project-kicker">Community / 001</p><h3>Everyone&apos;s Radio</h3><p>Co-founded an open-source music-tech community bringing together 16 collaborators across design and engineering. The project grew from a shared interest in the infrastructure, ideas, and creative possibilities shaping the future of music.</p><a href="https://github.com/everyonesradio" target="_blank" rel="noreferrer">Explore the project <ArrowUpRight size={16} /></a></article><article><div className="community-icon"><Radio size={19} /></div><p className="project-kicker">Community / 002</p><h3>Oroko Radio</h3><p>An Accra-based internet radio station centering music, conversation, and culture from across Africa and its diaspora. As a resident DJ and open-source contributor, I&apos;ve built tools for DJs and improved internal workflows to support station operations.</p><a href="https://oroko.live" target="_blank" rel="noreferrer">Visit Oroko Radio <ArrowUpRight size={16} /></a></article></div></section>

      <section id="djwork" className="dj-section section-pad"><div className="dj-heading"><p className="eyebrow">03 / Beyond the code</p><h2>DOGHOUSE</h2></div><div className="dj-content"><div className="record-art"><div className="record"><Play size={18} fill="currentColor" /></div><p>LISTEN / MOVE / REPEAT</p></div><div><p className="large-copy">Music is both my creative practice and a lens through which I understand technology.</p><p>As DOGHOUSE, I explore House, GQOM, Afrobeats, Rap, and drum-heavy rhythms across the African diaspora. My approach is rooted in Nigerian musical perspectives, with a curiosity for the connections between sounds, scenes, and cultures.</p><p>My work behind the decks informs how I build: listen closely, understand the context, experiment with intention, and create experiences that bring people together.</p><a className="button button-light" href="#contact">Listen to my sets <ArrowUpRight size={16} /></a></div></div></section>

      <section id="contact" className="contact section-pad"><p className="eyebrow">04 / Get in touch</p><h2>Have an idea<br /><em>worth building?</em></h2><p>I&apos;m interested in ambitious products, thoughtful collaborations, and opportunities to build technology that makes a meaningful difference—especially across music, AI, and creative industries.</p><div className="contact-links"><a href="mailto:arubigeorge0@gmail.com">Email me <ArrowUpRight size={18} /></a><a href="https://github.com/doghousetv" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={18} /></a><a href="https://linkedin.com/in/george-arubi" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={18} /></a></div></section>
      <footer><span>© 2026 George Arubi</span><span>Made with intention · Everywhere</span></footer>
    </main>
  )
}

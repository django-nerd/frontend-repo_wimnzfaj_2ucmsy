import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { ArrowRight, Mail, Linkedin, Github, ExternalLink, Quote, Star } from 'lucide-react'

const Section = ({ id, children, className = '' }) => (
  <section id={id} className={`relative py-24 sm:py-28 ${className}`}>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
  </section>
)

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-neutral-200/60 bg-white/60 px-3 py-1 text-xs font-medium text-neutral-600 shadow-sm backdrop-blur dark:border-neutral-800/60 dark:bg-neutral-900/60 dark:text-neutral-300">
    {children}
  </span>
)

const ProjectCard = ({ title, tags, description, image, link }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    whileHover={{ y: -6 }}
    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    className="group relative overflow-hidden rounded-2xl border border-neutral-200/60 bg-white/70 p-5 shadow-sm ring-1 ring-transparent backdrop-blur transition-all hover:shadow-xl dark:border-neutral-800/60 dark:bg-neutral-900/60"
  >
    <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
      <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
    </div>
    <div className="mt-4 flex items-start justify-between gap-4">
      <div>
        <h3 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-white">{title}</h3>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      </div>
      <ExternalLink className="mt-1 h-5 w-5 text-neutral-400 transition-colors group-hover:text-neutral-700 dark:group-hover:text-neutral-200" />
    </div>
  </motion.a>
)

function Navbar() {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex h-14 items-center justify-between rounded-2xl border border-neutral-200/60 bg-white/60 px-4 shadow-sm backdrop-blur dark:border-neutral-800/60 dark:bg-neutral-900/60">
          <a href="#home" className="font-semibold tracking-tight text-neutral-900 dark:text-white">
            <span className="bg-gradient-to-r from-fuchsia-500 via-violet-500 to-blue-500 bg-clip-text text-transparent">UI/UX</span> Portfolio
          </a>
          <nav className="hidden gap-6 md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-neutral-700 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">
                {l.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-neutral-900 md:inline-flex">
            Let’s talk
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(1250px_650px_at_10%_10%,rgba(168,85,247,0.18),transparent),radial-gradient(1250px_650px_at_90%_20%,rgba(59,130,246,0.18),transparent)] text-neutral-900 dark:text-neutral-100">
      <Navbar />

      {/* Hero */}
      <section id="home" className="relative flex min-h-[92vh] items-center overflow-hidden pt-24">
        <div className="pointer-events-none absolute inset-0">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/90 dark:from-neutral-950/80 dark:via-neutral-950/40 dark:to-neutral-950/95" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-200/60 bg-white/70 px-3 py-1 text-xs font-medium text-neutral-600 backdrop-blur dark:border-neutral-800/60 dark:bg-neutral-900/60 dark:text-neutral-300">
              Available for freelance projects
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
              Designing thoughtful, playful, human interfaces
            </h1>
            <p className="mt-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-300 sm:text-lg">
              I craft experiences that balance clarity with character. From product strategy to polished UI, I design with intention.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-neutral-900">
                Explore work <ArrowRight className="h-4 w-4" />
              </a>
              <div className="flex items-center gap-3 text-neutral-600 dark:text-neutral-300">
                <a href="mailto:designer@example.com" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200/60 bg-white/70 backdrop-blur transition hover:scale-105 dark:border-neutral-800/60 dark:bg-neutral-900/60">
                  <Mail className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200/60 bg-white/70 backdrop-blur transition hover:scale-105 dark:border-neutral-800/60 dark:bg-neutral-900/60">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200/60 bg-white/70 backdrop-blur transition hover:scale-105 dark:border-neutral-800/60 dark:bg-neutral-900/60">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <Section id="about">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About me</h2>
            <p className="mt-4 text-neutral-700 dark:text-neutral-300">
              I’m a UI/UX designer with a passion for motion and micro-interactions. I translate product goals into elegant, usable interfaces. My process blends research, prototyping, and visual storytelling.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Product Design', 'Interaction Design', 'Prototyping', 'Design Systems'].map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-neutral-200/60 bg-white/50 p-2 shadow-sm dark:border-neutral-800/60 dark:bg-neutral-900/60">
              <div className="h-full w-full rounded-2xl bg-gradient-to-br from-fuchsia-500/70 via-violet-500/70 to-blue-500/70" />
            </div>
            <div className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-full bg-fuchsia-500/20 blur-2xl" />
            <div className="pointer-events-none absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl" />
          </motion.div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" className="">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl font-bold tracking-tight sm:text-4xl">
          Selected projects
        </motion.h2>
        <p className="mt-2 max-w-2xl text-neutral-700 dark:text-neutral-300">
          Case studies that highlight process, outcomes, and the details in-between.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Wellness App',
              description: 'Design system + motion guidelines for a mindful experience.',
              tags: ['Mobile', 'Motion', 'System'],
              image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1400&auto=format&fit=crop',
              link: 'https://example.com',
            },
            {
              title: 'Fintech Dashboard',
              description: 'Data-dense UI made simple with progressive disclosure.',
              tags: ['Web', 'UX', 'Dashboard'],
              image: 'https://images.unsplash.com/photo-1748439435495-722cc1728b7e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGaW50ZWNoJTIwRGFzaGJvYXJkfGVufDB8MHx8fDE3NjI4ODQ1NDd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
              link: 'https://example.com',
            },
            {
              title: 'E-commerce UX',
              description: 'Conversion-focused shopping with delightful micro-interactions.',
              tags: ['Ecom', 'Research', 'Prototype'],
              image: 'https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=1400&auto=format&fit=crop',
              link: 'https://example.com',
            },
          ].map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Skills</h2>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">A blend of strategy, systems thinking, and craft.</p>
            <div className="mt-6 space-y-4">
              {[
                { name: 'Product strategy', level: 90 },
                { name: 'Interaction design', level: 95 },
                { name: 'Visual design', level: 92 },
                { name: 'Prototyping', level: 88 },
              ].map((s) => (
                <div key={s.name}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span>{s.name}</span>
                    <span className="text-neutral-500">{s.level}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-neutral-200/60 dark:bg-neutral-800/60">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, ease: 'easeOut' }}
                      className="h-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-blue-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {['Figma', 'Framer', 'After Effects', 'Notion', 'Webflow', 'Miro'].map((tool) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center justify-center rounded-2xl border border-neutral-200/60 bg-white/70 p-6 text-sm font-medium shadow-sm backdrop-blur dark:border-neutral-800/60 dark:bg-neutral-900/60"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section id="testimonials">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Kind words</h2>
        <div className="mt-8 overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
            className="flex gap-6"
          >
            {[
              {
                quote:
                  'A rare mix of product thinking and visual finesse. Our KPIs jumped after the redesign.',
                author: 'PM, Fintech Startup',
              },
              {
                quote:
                  'Brings personality to interfaces without sacrificing usability. A joy to collaborate with.',
                author: 'Engineer, HealthTech',
              },
              {
                quote: 'Meticulous, fast, and empathetic to users. Highly recommended.',
                author: 'Founder, SaaS',
              },
              {
                quote: 'Elevated our brand while simplifying the flows. Nailed it.',
                author: 'Marketing Lead',
              },
            ]
              .concat([
                {
                  quote:
                    'A rare mix of product thinking and visual finesse. Our KPIs jumped after the redesign.',
                  author: 'PM, Fintech Startup',
                },
                {
                  quote:
                    'Brings personality to interfaces without sacrificing usability. A joy to collaborate with.',
                  author: 'Engineer, HealthTech',
                },
                { quote: 'Meticulous, fast, and empathetic to users. Highly recommended.', author: 'Founder, SaaS' },
                { quote: 'Elevated our brand while simplifying the flows. Nailed it.', author: 'Marketing Lead' },
              ])
              .map((t, i) => (
                <figure
                  key={i}
                  className="w-[28rem] shrink-0 rounded-2xl border border-neutral-200/60 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-neutral-800/60 dark:bg-neutral-900/60"
                >
                  <Quote className="h-6 w-6 text-neutral-400" />
                  <blockquote className="mt-4 text-neutral-700 dark:text-neutral-300">{t.quote}</blockquote>
                  <figcaption className="mt-4 text-sm text-neutral-500">{t.author}</figcaption>
                </figure>
              ))}
          </motion.div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="pb-32">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let’s build something delightful</h2>
            <p className="mt-2 max-w-prose text-neutral-700 dark:text-neutral-300">
              Tell me about your product and goals. I’ll get back within 24 hours.
            </p>
            <div className="mt-6 flex items-center gap-3 text-neutral-600 dark:text-neutral-300">
              <Mail className="h-5 w-5" />
              designer@example.com
            </div>
          </div>
          <form
            action="https://formspree.io/f/mwkgrnkl"
            method="POST"
            className="space-y-4 rounded-2xl border border-neutral-200/60 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-neutral-800/60 dark:bg-neutral-900/60"
          >
            <div>
              <label className="text-sm text-neutral-600 dark:text-neutral-300">Name</label>
              <input name="name" required className="mt-1 w-full rounded-xl border border-neutral-200/60 bg-white/80 px-4 py-3 text-sm outline-none ring-0 placeholder:text-neutral-400 focus:border-neutral-300 dark:border-neutral-800/60 dark:bg-neutral-950/60" />
            </div>
            <div>
              <label className="text-sm text-neutral-600 dark:text-neutral-300">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-xl border border-neutral-200/60 bg-white/80 px-4 py-3 text-sm outline-none ring-0 placeholder:text-neutral-400 focus:border-neutral-300 dark:border-neutral-800/60 dark:bg-neutral-950/60" />
            </div>
            <div>
              <label className="text-sm text-neutral-600 dark:text-neutral-300">Message</label>
              <textarea name="message" rows="5" required className="mt-1 w-full rounded-xl border border-neutral-200/60 bg-white/80 px-4 py-3 text-sm outline-none ring-0 placeholder:text-neutral-400 focus:border-neutral-300 dark:border-neutral-800/60 dark:bg-neutral-950/60" />
            </div>
            <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-neutral-900">
              Send message
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </Section>

      <footer className="border-t border-neutral-200/60 py-10 text-center text-sm text-neutral-500 dark:border-neutral-800/60">
        © {new Date().getFullYear()} Your Name — Crafted with care and motion
      </footer>
    </div>
  )
}

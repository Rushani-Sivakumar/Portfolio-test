import { Github, ExternalLink } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'
import { projects } from '../data/projects.js'

function ProjectCard({ project, index }) {
  const [ref, visible] = useReveal()
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} border border-line bg-surface p-7 md:p-9`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex items-start justify-between gap-6 flex-wrap">
        <div>
          <p className="font-mono text-xs text-signal-blue mb-2">
            In [{project.id}]: {project.module}
          </p>
          <h3 className="font-display text-2xl font-semibold tracking-tight">{project.title}</h3>
        </div>
        <span className="font-mono text-[11px] text-signal-green border border-signal-green/40 px-2.5 py-1 whitespace-nowrap">
          {project.metric}
        </span>
      </div>

      <p className="mt-4 text-ink/80 leading-relaxed max-w-2xl">{project.summary}</p>

      <ul className="mt-5 space-y-1.5">
        {project.highlights.map((h) => (
          <li key={h} className="text-sm text-ink/70 flex gap-2">
            <span className="text-signal-orange mt-1.5">▪</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        {project.tech.map((t) => (
          <span key={t} className="font-mono text-[11px] px-2.5 py-1 bg-paper border border-line text-ink/70">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-5">
        {/* TODO: replace repoUrl/demoUrl in src/data/projects.js with your real links */}
        <a
          href={project.repoUrl}
          className="inline-flex items-center gap-1.5 font-mono text-xs hover:text-signal-blue transition-colors"
        >
          <Github size={15} /> Code
        </a>
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            className="inline-flex items-center gap-1.5 font-mono text-xs hover:text-signal-blue transition-colors"
          >
            <ExternalLink size={15} /> Live demo
          </a>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <p className="eyebrow mb-3"># projects</p>
        <h2 className="font-display text-3xl font-semibold tracking-tight mb-10">
          Academic Projects
        </h2>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

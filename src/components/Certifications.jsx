import { BadgeCheck, ExternalLink } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'
import { certifications } from '../data/projects.js'

export default function Certifications() {
  const [ref, visible] = useReveal()

  return (
    <section id="certifications" className="py-24 border-t border-line bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <p className="eyebrow mb-3"># certifications</p>
        <h2 className="font-display text-3xl font-semibold tracking-tight mb-10">
          Certifications
        </h2>

        <div ref={ref} className={`space-y-4 reveal ${visible ? 'is-visible' : ''}`}>
          {certifications.map((c) => (
            <div
              key={c.title}
              className="border border-line p-6 flex items-start gap-4 flex-wrap justify-between"
            >
              <div className="flex items-start gap-4">
                <BadgeCheck className="text-signal-blue shrink-0 mt-1" size={22} />
                <div>
                  <h3 className="font-display text-lg font-semibold">{c.title}</h3>
                  <p className="font-mono text-xs text-muted mt-1">{c.issuer}</p>
                  <p className="text-sm text-ink/70 mt-2 max-w-xl">{c.detail}</p>
                </div>
              </div>
              {/* TODO: replace with your real credential URL */}
              <a
                href={c.credentialUrl}
                className="inline-flex items-center gap-1.5 font-mono text-xs hover:text-signal-blue transition-colors shrink-0"
              >
                <ExternalLink size={14} /> View credential
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

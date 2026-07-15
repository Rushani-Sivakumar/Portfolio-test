import useReveal from '../hooks/useReveal.js'
import { skillGroups } from '../data/skills.js'

export default function Skills() {
  const [ref, visible] = useReveal()

  return (
    <section id="skills" className="py-24 border-t border-line bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <p className="eyebrow mb-3"># skills</p>
        <h2 className="font-display text-3xl font-semibold tracking-tight mb-10">
          Tools & Technologies
        </h2>

        <div ref={ref} className={`grid sm:grid-cols-2 gap-8 reveal ${visible ? 'is-visible' : ''}`}>
          {skillGroups.map((group) => (
            <div key={group.tag} className="border border-line p-6">
              <p className="font-mono text-sm text-signal-blue mb-4">{group.label}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[12px] px-3 py-1.5  border border-line bg-paper text-ink/80 hover:border-signal-blue hover:text-signal-blue transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

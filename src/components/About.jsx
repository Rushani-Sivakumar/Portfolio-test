import useReveal from '../hooks/useReveal.js'

const stats = [
  { label: 'year', value: 'Final Year' },
  { label: 'degree', value: 'B.Comp (Hons) CS' },
  { label: 'certified', value: 'IBM Data Science Professional' },
  // { label: 'projects', value: '3 academic ML/DA' },
]

export default function About() {
  const [ref, visible] = useReveal()

  return (
    <section id="about" className="py-24 border-t border-line">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_1.3fr] gap-12 reveal ${
          visible ? 'is-visible' : ''
        }`}
      >
        <div>
          <p className="eyebrow mb-3"># about</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight">About</h2>
        </div>

        <div>
          <p className="text-lg leading-relaxed text-ink/90">
            I'm a final-year Computer Science undergraduate reading for a Bachelor of Computing (Hons) in Computer Science
            degree, with a focus on data science and machine learning. I like taking
            data that's messy, incomplete, or just hard to make sense of, and working
            it into something a decision-maker can actually use — a model, a dashboard,
            or a clear statistical answer.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink/90">
            Across my coursework I've worked on the full pipeline: cleaning and
            feature-engineering raw datasets, running descriptive and inferential
            analysis, training and comparing classification models, and building
            interactive dashboards that communicate findings clearly.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="font-mono text-xs border border-line bg-surface px-3 py-2 flex items-center gap-2"
              >
                <span className="text-signal-blue">{s.label}=</span>
                <span className="text-ink/80">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { useEffect, useState } from 'react'
import useReveal from '../hooks/useReveal.js'

const CODE_LINES = [
  '>>> import pandas as pd',
  ">>> profile = pd.DataFrame(rushani, index=['value'])",
  '>>> profile.head()',
]

const ROWS = [
  ['name', 'Rushani Sivakumar'],
  ['role', 'Aspiring Data Scientist'],
  ['degree', 'B.Comp (Hons) Computer Science'],
  ['status', 'Open to internship opportunities'],
]

const stats = [
  { label: 'year', value: 'Final Year' },
  { label: 'degree', value: 'B.Comp (Hons) CS' },
  { label: 'certification', value: 'IBM Data Science Professional' },
]

export default function About() {
  const [ref, visible] = useReveal()
  const [typed, setTyped] = useState('')
  const [showTable, setShowTable] = useState(false)
  const fullScript = CODE_LINES.join('\n')

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i += 1
      setTyped(fullScript.slice(0, i))
      if (i >= fullScript.length) {
        clearInterval(interval)
        setTimeout(() => setShowTable(true), 300)
      }
    }, 22)
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section id="about" className="py-24 border-t border-line">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 reveal ${
          visible ? 'is-visible' : ''
        }`}
      >
        {/* Left: title + signature terminal */}
        <div>
          <p className="eyebrow mb-3"># about</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight mb-8">About</h2>

          <div className="bg-ink text-paper rounded-md shadow-xl overflow-hidden font-mono text-[13px] leading-relaxed">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-signal-orange/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-signal-green/80" />
              <span className="ml-3 text-white/40 text-xs">profile.py</span>
            </div>

            <div className="p-5 min-h-[210px]">
              <pre className="whitespace-pre-wrap text-white/90">
                {typed}
                <span className="inline-block w-2 h-4 bg-signal-blue align-middle animate-blink ml-0.5" />
              </pre>

              {showTable && (
                <div className="mt-4 animate-fadeUp">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="text-white/40 border-b border-white/10">
                        <th className="py-1.5 pr-3 font-normal"></th>
                        <th className="py-1.5 pr-3 font-normal">attribute</th>
                        <th className="py-1.5 font-normal">value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ROWS.map(([k, v], idx) => (
                        <tr key={k} className={idx % 2 === 0 ? 'bg-white/5' : ''}>
                          <td className="py-1.5 pr-3 text-white/30">{idx}</td>
                          <td className="py-1.5 pr-3 text-signal-orange">{k}</td>
                          <td className="py-1.5 text-white/90">{v}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right: description */}
        <div>
          <p className="text-lg leading-relaxed text-ink/90">
            I'm a final-year Computer Science undergraduate reading for a Bachelor of
            Computing (Hons) in Computer Science degree, with a focus on data science
            and machine learning. I like taking data that's messy, incomplete, or just
            hard to make sense of, and working it into something a decision-maker can
            actually use — a model, a dashboard, or a clear statistical answer.
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
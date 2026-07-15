import { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'
import ProfileImage from '/Profile.jpeg'

const CODE_LINES = [
  '>>> import pandas as pd',
  ">>> profile = pd.DataFrame(rushani, index=['value'])",
  '>>> profile.head()',
]

const ROWS = [
  ['name', 'Rushani Sivakumar'],
  ['role', 'Aspiring Data Scientist'],
  ['degree', 'B.Sc (Hons) Computer Science'],
  ['status', 'Open to internship opportunities'],
]

export default function Hero() {
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
    <section id="top" className="relative pt-40 pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-fade pointer-events-none" aria-hidden="true" />

      <div className="relative  max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        {/* Left: intro */}
        <div>
          <p className="eyebrow mb-4"># introduction</p>
          <h1 className="font-display text-5xl sm:text-6xl font-semibold leading-[1.05] tracking-tight">
            Rushani
            <br />
            Sivakumar
          </h1>
          <p className="mt-6 text-lg text-muted max-w-md">
            Final-year Computer Science undergraduate turning messy, real-world datasets
            into clear, model-backed decisions — with Python, statistics, machine learning and a lot of
            curiosity.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-3 font-mono text-sm hover:bg-signal-blue transition-colors"
            >
              View projects <ArrowDown size={15} />
            </a>
            {/* TODO: replace '#' with a link to your hosted resume PDF */}
            <a
              href="/Rushani_Resume.pdf"
              download
              className="inline-flex items-center gap-2 border border-ink px-5 py-3 font-mono text-sm hover:border-signal-blue hover:text-signal-blue transition-colors"
            >
              Download resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5 text-ink/70">
            {/* TODO: replace these href values with your real profile links */}
            <a href="https://github.com/Rushani-Sivakumar" aria-label="GitHub" className="hover:text-signal-blue transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/rushani-sivakumar" aria-label="LinkedIn" className="hover:text-signal-blue transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:rushani.sivakumar@gmail.com" aria-label="Email" className="hover:text-signal-blue transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Right: signature terminal -> dataframe card */}
        {/* <div className="bg-ink text-paper rounded-md shadow-xl overflow-hidden font-mono text-[13px] leading-relaxed">
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
        </div> */}

        {/* <div className="w-full h-full p-5 text-paper rounded-md shadow-xl overflow-hidden font-mono text-[13px] leading-relaxed flex items-center justify-center">
        <img
          src={ProfileImage}
          alt="Rushani Sivakumar"
          className="w-full h-full object-cover rounded-md"
  />
        </div> */}

        <div className=" w-full max-h-[420px] p-20 text-paper rounded-md  overflow-hidden font-mono text-[13px] leading-relaxed flex items-center justify-center">
          <img
            src={ProfileImage}
            alt="Rushani Sivakumar"
            className="rounded-md"
          />
        </div>
      </div>
    </section>
  )
}


import { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'
import ProfileImage from '/Profile_N.png'

export default function Hero() {
  

  return (
    // <section id="top" className="relative pt-40 pb-24 overflow-hidden">
      // <section id="top" className="relative h-screen flex items-center pt-16 overflow-hidden">
      <section id="top" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
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
        {/* Right: profile photo */}

        {/* <div className="relative h-[55vh] md:h-[60vh]"> */}
        <div className="relative h-[35vh] md:h-[60vh]">
  <div className="absolute -inset-3 border border-signal-blue/30 -z-10" aria-hidden="true" />
  <img
    src="/Profile_N.png"
    alt="Rushani Sivakumar"
    // 
    className="w-full h-full object-cover object-[center_13%] grayscale-[15%] contrast-105"
  />
  {/* <span className="absolute bottom-3 left-3 font-mono text-[11px] bg-ink text-paper px-2.5 py-1">
    rushani.sivakumar
  </span> */}
</div>

      </div>
    </section>
  )
}

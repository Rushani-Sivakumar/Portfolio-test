import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [progress, setProgress] = useState(0)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      const pct = scrollHeight - clientHeight > 0 ? (scrollTop / (scrollHeight - clientHeight)) * 100 : 0
      setProgress(pct)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Scroll progress — framed as a live data stream rather than a decorative bar */}
      <div className="h-[3px] w-full bg-line/60">
        <div
          className="h-full bg-signal-blue transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <nav className="bg-paper/90 backdrop-blur border-b border-line">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <a href="#top" className="font-display font-semibold text-lg tracking-tight">
            rushani<span className="text-signal-blue">.sivakumar</span>
          </a>

          <div className="hidden md:flex items-center gap-8 font-mono text-[13px] text-ink/80">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-signal-blue transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-line bg-paper px-6 py-4 flex flex-col gap-4 font-mono text-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-signal-blue">
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

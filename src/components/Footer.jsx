export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-muted">
        <span>© {new Date().getFullYear()} Rushani Sivakumar</span>
        <span>Built with React &amp; Tailwind CSS</span>
      </div>
    </footer>
  )
}

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'
import { Mail, Github, Linkedin } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'

// TODO: Create a free account at https://www.emailjs.com and replace these
// three values with your own Service ID, Template ID, and Public Key.
// (EmailJS dashboard -> Email Services / Email Templates / Account -> General)
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

export default function Contact() {
  const [ref, visible] = useReveal()
  const formRef = useRef(null)
  const [sending, setSending] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID') {
      toast.error('Contact form is not configured yet — add your EmailJS keys in Contact.jsx.')
      return
    }

    setSending(true)
    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        toast.success("Message sent — I'll get back to you soon!")
        formRef.current.reset()
      })
      .catch(() => {
        toast.error('Something went wrong. Please try again or email me directly.')
      })
      .finally(() => setSending(false))
  }

  return (
    <section id="contact" className="py-24 border-t border-line">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_1.3fr] gap-12 reveal ${
          visible ? 'is-visible' : ''
        }`}
      >
        <div>
          <p className="eyebrow mb-3"># contact</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight">Get in touch</h2>
          <p className="mt-4 text-ink/70 max-w-sm">
            Open to data science / analytics internship opportunities. Feel free to
            reach out — I usually reply within a day or two.
          </p>

          <div className="mt-8 flex flex-col gap-3 font-mono text-sm">
            {/* TODO: replace with your real email address and profile links */}
            <a href="mailto:rushani.sivakumar@gmail.com" className="inline-flex items-center gap-2 hover:text-signal-blue">
              <Mail size={16} /> rushani.sivakumar@gmail.com
            </a>
            <a href="https://github.com/Rushani-Sivakumar" className="inline-flex items-center gap-2 hover:text-signal-blue">
              <Github size={16} /> github.com/Rushani-Sivakumar
            </a>
            <a href="https://www.linkedin.com/in/rushani-sivakumar" className="inline-flex items-center gap-2 hover:text-signal-blue">
              <Linkedin size={16} /> linkedin.com/in/rushani-sivakumar
            </a>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="border border-line bg-surface p-7 space-y-5">
          <div>
            <label htmlFor="name" className="font-mono text-xs text-muted">
              name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1.5 w-full border border-line bg-paper px-3 py-2.5 text-sm focus:outline-none focus:border-signal-blue"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="font-mono text-xs text-muted">
              email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1.5 w-full border border-line bg-paper px-3 py-2.5 text-sm focus:outline-none focus:border-signal-blue"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="font-mono text-xs text-muted">
              message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="mt-1.5 w-full border border-line bg-paper px-3 py-2.5 text-sm focus:outline-none focus:border-signal-blue resize-none"
              placeholder="What would you like to talk about?"
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-3 font-mono text-sm hover:bg-signal-blue transition-colors disabled:opacity-60"
          >
            {sending ? 'Sending…' : 'Send message'}
          </button>
        </form>
      </div>
    </section>
  )
}

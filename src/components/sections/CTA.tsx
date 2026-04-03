import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Send, CheckCircle2 } from 'lucide-react'

type Interest = 'tester' | 'investor' | 'developer' | 'other'

export default function CTA() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [interest, setInterest] = useState<Interest>('tester')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Build mailto with form data
    const subject = encodeURIComponent(`[${interest.charAt(0).toUpperCase() + interest.slice(1)}] Early Access Request from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nInterested as: ${interest}\n\n${message}`
    )
    window.location.href = `mailto:contact@metarium.io?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section id="cta" className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light to-navy" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.06] rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-accent/20 bg-accent/5 text-sm text-accent mb-8">
            <Sparkles className="w-4 h-4" strokeWidth={1.5} />
            Free during early access
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Get <span className="gradient-text">Early Access</span>
          </h2>

          <p className="text-lg text-[#94A3B8] mb-4 max-w-xl mx-auto leading-relaxed">
            Join the early access program. Get the full platform for free and help shape the future of database fleet intelligence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {submitted ? (
            <div className="glass-card p-12 text-center">
              <div className="w-16 h-16 rounded-md bg-success/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-success" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Your email client should open shortly</h3>
              <p className="text-[#94A3B8]">
                If it didn't, you can email us directly at{' '}
                <a href="mailto:contact@metarium.io" className="text-accent hover:underline">
                  contact@metarium.io
                </a>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card p-8 sm:p-10 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="cta-name" className="block text-sm font-medium text-[#94A3B8] mb-2">
                    Name
                  </label>
                  <input
                    id="cta-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-md bg-surface border border-surface-border text-white text-sm placeholder-[#64748B] focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="cta-email" className="block text-sm font-medium text-[#94A3B8] mb-2">
                    Email
                  </label>
                  <input
                    id="cta-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-md bg-surface border border-surface-border text-white text-sm placeholder-[#64748B] focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#94A3B8] mb-3">
                  I'm interested as a...
                </label>
                <div className="flex flex-wrap gap-3">
                  {([
                    { value: 'tester', label: 'Beta Tester' },
                    { value: 'investor', label: 'Investor' },
                    { value: 'developer', label: 'Developer' },
                    { value: 'other', label: 'Other' },
                  ] as const).map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setInterest(opt.value)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors border ${
                        interest === opt.value
                          ? 'border-accent bg-accent/10 text-accent'
                          : 'border-surface-border text-[#94A3B8] hover:border-[#94A3B8]/40 hover:text-white'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="cta-message" className="block text-sm font-medium text-[#94A3B8] mb-2">
                  Message <span className="text-[#64748B]">(optional)</span>
                </label>
                <textarea
                  id="cta-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  placeholder="Tell us about your database fleet, what you're looking for, or how you'd like to get involved..."
                  className="w-full px-4 py-3 rounded-md bg-surface border border-surface-border text-white text-sm placeholder-[#64748B] focus:outline-none focus:border-accent/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="glow-btn relative z-10 inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-md bg-accent hover:bg-[#1D4ED8] text-white font-medium text-lg transition-all hover:scale-105 active:scale-95"
              >
                <Send className="w-5 h-5" strokeWidth={1.5} />
                Send Request
                <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

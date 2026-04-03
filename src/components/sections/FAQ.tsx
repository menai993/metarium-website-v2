import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    q: 'Is Metarium production-ready?',
    a: 'Yes. The core platform is fully functional with 130+ data collection handlers, AI-powered investigation, real-time monitoring, and governance features. We\'re in early access to gather feedback and validate with diverse fleet configurations.',
  },
  {
    q: 'Is it free during early access?',
    a: 'Yes. Early access partners get full platform access at no cost. In return, we ask for honest feedback on your experience — what works, what doesn\'t, and what you\'d prioritize next.',
  },
  {
    q: 'What databases are supported?',
    a: 'SQL Server (2016+) and PostgreSQL (12+). Both engines share the same dashboard, AI, and governance features. MySQL/MariaDB support is on the roadmap.',
  },
  {
    q: 'Can I self-host Metarium?',
    a: 'Yes. Metarium is designed for self-hosted deployment within your infrastructure. Your data never leaves your network. Cloud-hosted and Docker-based deployment options are in progress.',
  },
  {
    q: 'How does the AI handle sensitive data?',
    a: 'AI analysis uses metadata and aggregated metrics — not your actual row-level data. LLM provider configuration is fully under your control: use OpenAI, Azure OpenAI, or self-hosted Ollama for complete data isolation.',
  },
  {
    q: 'What\'s the agent footprint on my servers?',
    a: 'Metarium uses agentless collection via standard SQL connections. No software is installed on your database servers. Data collection queries are designed to be lightweight with configurable scheduling.',
  },
  {
    q: 'How many servers can it manage?',
    a: 'The architecture supports multi-node worker scaling with leader election. It\'s been designed to handle fleets of 50+ servers. During early access, we\'re validating with real-world fleet sizes.',
  },
  {
    q: 'I\'m a developer — can I contribute?',
    a: 'Absolutely. We\'re looking for .NET, React/TypeScript, and AI/ML engineers interested in building database tooling. Reach out via the contact form or email and let\'s talk about how you can get involved.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="glass-card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-[#253348] transition-colors"
      >
        <span className="text-sm sm:text-base font-medium text-white">{q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-[#64748B]" strokeWidth={1.5} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm text-[#94A3B8] leading-relaxed border-t border-surface-border">
              <p className="pt-4">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-navy-light/50" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-surface-border bg-surface-card/60 text-sm text-[#94A3B8] mb-8">
            <HelpCircle className="w-4 h-4 text-accent" strokeWidth={1.5} />
            Common Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Frequently Asked Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="space-y-3"
        >
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    q: 'Is Metarium production-ready?',
    a: 'Metarium has production-grade architecture and deployed-grade components, but product maturity is best described as early access with active hardening. Core systems are functional — we\'re validating with real fleets.',
  },
  {
    q: 'Is it free during early access?',
    a: 'Early access pricing is being finalized. If you\'re interested in testing Metarium on your fleet, reach out — we\'re actively looking for partners and will work out terms directly.',
  },
  {
    q: 'What databases are supported?',
    a: 'SQL Server (2019/2022 verified) and PostgreSQL (16.x verified). Both engines share the same dashboards, AI, and governance features with engine-specific drivers and collectors.',
  },
  {
    q: 'Can I self-host Metarium?',
    a: 'Yes. The architecture supports on-prem, cloud, and hybrid deployments using Windows services, IIS-hosted API patterns, and Docker-based runtime options. Your data stays in your infrastructure.',
  },
  {
    q: 'How does the AI handle sensitive data?',
    a: 'AI handlers use SQL text, metadata, and telemetry context. Sensitive patterns (SSN, card numbers, email, phone) are masked automatically, and all AI interactions are logged for auditability.',
  },
  {
    q: 'What is the agent footprint on my servers?',
    a: 'Monitoring is worker-driven from Metarium nodes, not per-database agents. Target systems are accessed through configured SQL connections and optional OS-level channels. Nothing is installed on your servers.',
  },
  {
    q: 'How many servers can it manage?',
    a: 'There is no hardcoded fleet cap. Scale is achieved by adding worker nodes and partitioned scheduling. The architecture supports leader election and multi-node coordination out of the box.',
  },
  {
    q: 'I\'m a developer — can I contribute?',
    a: 'We\'re actively looking for .NET 8/C#, React/TypeScript, SQL internals, and AI orchestration engineers. The contribution model is being formalized — reach out via the contact form to start a conversation.',
  },
  {
    q: 'What permissions are required on monitored databases?',
    a: 'Metarium is designed around read-oriented collection plus scoped metadata and performance queries. Credential scope is controlled per server configuration — no blanket sysadmin access needed.',
  },
  {
    q: 'Does Metarium support real-time updates?',
    a: 'Yes. The platform includes SignalR/WebSocket communication patterns for live dashboard updates, operational alerts, and investigation workflow state changes.',
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

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light to-navy" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.06] rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-accent/20 bg-accent/5 text-sm text-accent mb-8">
            <Sparkles className="w-4 h-4" strokeWidth={1.5} />
            Stop firefighting. Start engineering.
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Your Database Fleet Deserves{' '}
            <span className="gradient-text">Better Tooling</span>
          </h2>

          <p className="text-lg text-[#94A3B8] mb-10 max-w-xl mx-auto leading-relaxed">
            We built Metarium because we were tired of stitching together monitoring scripts,
            spreadsheet inventories, and tribal knowledge. If that sounds familiar, let's talk.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@metarium.io"
              className="glow-btn relative z-10 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-accent hover:bg-[#1D4ED8] text-white font-medium text-lg transition-all hover:scale-105 active:scale-95"
            >
              Request a Demo
              <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
            </a>
            <a
              href="#overview"
              className="inline-flex items-center justify-center px-8 py-4 rounded-md border border-surface-border text-white font-medium text-lg hover:bg-surface-card/50 transition-all hover:border-[#94A3B8]/40"
            >
              See How It Works
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

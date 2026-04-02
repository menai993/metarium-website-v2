import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light to-navy" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric/[0.06] rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric/20 bg-electric/5 text-sm text-electric mb-8">
            <Sparkles className="w-4 h-4" />
            Ready to get started?
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Take Control of Your{' '}
            <span className="gradient-text">Database Fleet</span>
          </h2>

          <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed">
            See how Metarium can transform your database operations with AI-powered
            intelligence, automated monitoring, and enterprise governance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@metarium.io"
              className="glow-btn relative z-10 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-electric to-cyan-accent text-white font-semibold text-lg transition-transform hover:scale-105 active:scale-95"
            >
              Request Demo
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#overview"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-lg hover:bg-white/5 transition-all hover:border-white/40"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

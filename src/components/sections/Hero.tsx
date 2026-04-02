import { motion } from 'framer-motion'
import { ChevronDown, Database, Cpu, Zap } from 'lucide-react'
import { useTypewriter } from '../../hooks/useTypewriter'
import ScreenshotFrame from '../ScreenshotFrame'
import Constellation from '../Constellation'

export default function Hero() {
  const { displayed, isDone } = useTypewriter(
    'Database Intelligence That Actually Works',
    40,
    400
  )

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
    >
      {/* Constellation canvas background */}
      <Constellation />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.10)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-32 sm:pt-40">
        {/* Logo / brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-surface-border bg-surface-card/60 text-sm font-medium text-[#94A3B8]">
            <Database className="w-4 h-4 text-accent" strokeWidth={1.5} />
            SQL Server & PostgreSQL Fleet Management
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          <span className="flex items-center justify-center gap-4 mb-2">
            <img src="/metarium_full_logo.png" alt="Metarium" className="h-14 sm:h-18 lg:h-22 brightness-0 invert" />
          </span>
          <span className="gradient-text block text-3xl sm:text-4xl lg:text-5xl font-semibold min-h-[1.3em]">
            {displayed}
            {!isDone && (
              <motion.span
                className="inline-block w-[3px] h-[1em] bg-accent ml-1 align-text-bottom"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity }}
              />
            )}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Monitor, analyze, and optimize your SQL Server and PostgreSQL fleet.
          AI that understands your actual workloads, not just dashboards.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="#cta"
            className="glow-btn relative z-10 inline-flex items-center justify-center px-8 py-4 rounded-md bg-accent hover:bg-[#1D4ED8] text-white font-medium text-lg transition-all hover:scale-105 active:scale-95"
          >
            Request a Demo
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center px-8 py-4 rounded-md border border-surface-border text-white font-medium text-lg hover:bg-surface-card/50 transition-all hover:border-[#94A3B8]/40"
          >
            See How It Works
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-6 text-sm text-[#64748B]"
        >
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-accent" strokeWidth={1.5} />
            <span>SQL Server + PostgreSQL</span>
          </div>
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-cyan-accent" strokeWidth={1.5} />
            <span>130+ Automated Data Collectors</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-accent" strokeWidth={1.5} />
            <span>AI-Powered Investigation</span>
          </div>
        </motion.div>
      </div>

      {/* Hero dashboard screenshot */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 mt-16 pb-24">
        <ScreenshotFrame
          id="screenshot-hero"
          src="/screenshots/hero-dashboard.png"
          alt="Metarium main dashboard showing fleet-wide database monitoring overview"
          perspective
          className="mx-auto max-w-5xl"
        />
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#overview"
        className="relative z-10 block mx-auto w-fit pb-8 text-[#64748B] hover:text-white transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="w-6 h-6" strokeWidth={1.5} />
      </motion.a>
    </section>
  )
}

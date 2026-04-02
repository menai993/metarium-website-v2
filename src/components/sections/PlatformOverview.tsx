import { motion } from 'framer-motion'
import { flywheel } from '../../data/features'
import { ArrowRight } from 'lucide-react'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function PlatformOverview() {
  return (
    <section id="overview" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">The Metarium Flywheel</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A continuous cycle of discovery, monitoring, analysis, governance, and
            optimization &mdash; each stage feeding intelligence into the next.
          </p>
        </motion.div>

        {/* Flywheel steps */}
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {flywheel.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div key={item.step} variants={itemVariants} className="flex items-center">
                <div className="glass-card rounded-2xl p-6 text-center w-56 hover:bg-white/[0.06] transition-colors">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-electric/20 to-cyan-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-electric" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.step}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                </div>
                {i < flywheel.length - 1 && (
                  <ArrowRight className="hidden lg:block w-6 h-6 text-electric/40 mx-2 shrink-0" />
                )}
              </motion.div>
            )
          })}
        </motion.div>

        {/* Repeat arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.5 }}
          className="hidden lg:flex justify-center mt-6"
        >
          <div className="flex items-center gap-2 text-sm text-electric/50">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-electric/30" />
            <span>Continuous cycle</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-electric/30" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

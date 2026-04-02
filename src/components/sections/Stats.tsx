import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { stats } from '../../data/features'
import { useCountUp } from '../../hooks/useCountUp'

function StatCard({
  label,
  value,
  suffix,
  displayText,
  inView,
  delay,
}: {
  label: string
  value: number
  suffix: string
  displayText?: string
  inView: boolean
  delay: number
}) {
  const count = useCountUp(value, 2000, inView)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center px-6 py-8"
    >
      <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">
        {displayText || (
          <>
            {count}
            {suffix}
          </>
        )}
      </div>
      <div className="text-sm text-[#94A3B8] font-medium">{label}</div>
    </motion.div>
  )
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="stats" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">By the Numbers</span>
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-xl mx-auto">
            What ships out of the box. No add-ons, no enterprise tiers.
          </p>
        </motion.div>

        <div className="glass-card">
          <div className="grid grid-cols-2 md:grid-cols-3 divide-x divide-y divide-white/5">
            {stats.map((stat, i) => (
              <StatCard
                key={stat.label}
                label={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                displayText={stat.displayText}
                inView={isInView}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { featurePillars } from '../../data/features'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function FeaturePillars() {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light to-navy" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Everything You Need</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Six powerful pillars covering every aspect of database intelligence &mdash;
            from discovery to operations.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {featurePillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <motion.a
                key={pillar.id}
                href={`#${pillar.id}`}
                variants={cardVariants}
                className="glass-card glass-card-hover gradient-border rounded-2xl p-8 group cursor-pointer block"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-electric/20 to-cyan-accent/20 flex items-center justify-center mb-6 group-hover:from-electric/30 group-hover:to-cyan-accent/30 transition-colors">
                  <Icon className="w-7 h-7 text-electric group-hover:text-cyan-light transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {pillar.headline}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {pillar.subheadline}
                </p>
                <span className="text-electric text-sm font-medium group-hover:text-cyan-light transition-colors">
                  Explore &rarr;
                </span>
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

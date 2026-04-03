import { motion } from 'framer-motion'
import { FlaskConical, TrendingUp, Code2, ArrowRight } from 'lucide-react'

const cards = [
  {
    icon: FlaskConical,
    title: 'Beta Testers',
    description:
      'We want teams running mixed SQL Server and PostgreSQL estates to validate signal quality, workflow fit, and rollout safety.',
    highlights: [
      'Multi-server production environments preferred',
      'Weekly feedback from DB owners',
      'Early influence on roadmap',
    ],
    cta: 'Apply for Early Access',
    href: '#cta',
  },
  {
    icon: TrendingUp,
    title: 'Investors',
    description:
      'Metarium is an early-stage, working product in a large enterprise pain market where performance, risk, and governance are converging.',
    highlights: [
      'Working product, not slides',
      'AI plus deep telemetry moat',
      'Large DBA modernization market',
    ],
    cta: "Let's Talk",
    href: 'mailto:contact@metarium.io?subject=Investment%20Inquiry',
  },
  {
    icon: Code2,
    title: 'Developers',
    description:
      'We need engineers who can ship across .NET services, React UX, SQL internals, and AI orchestration patterns.',
    highlights: [
      '.NET 8 and C# depth',
      'React and TypeScript product work',
      'Shape the platform from day one',
    ],
    cta: 'Get Involved',
    href: 'mailto:contact@metarium.io?subject=Developer%20Collaboration',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
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

export default function LookingFor() {
  return (
    <section id="join" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/[0.04] rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-accent/20 bg-accent/5 text-sm text-accent mb-8">
            <FlaskConical className="w-4 h-4" strokeWidth={1.5} />
            Early Access — Limited Spots
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Join the Journey</span>
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            Metarium is built. Now it needs testers to validate it, investors to scale it,
            and developers to accelerate it.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                variants={cardVariants}
                className="glass-card gradient-border p-8 flex flex-col group hover:bg-[#253348] transition-colors"
              >
                <div className="w-14 h-14 rounded-md bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-7 h-7 text-accent group-hover:text-cyan-light transition-colors" strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">{card.description}</p>

                <ul className="space-y-2 mb-8 flex-1">
                  {card.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-[#94A3B8]">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                      {h}
                    </li>
                  ))}
                </ul>

                <a
                  href={card.href}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-accent/30 text-accent font-medium text-sm hover:bg-accent/10 transition-colors"
                >
                  {card.cta}
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </a>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

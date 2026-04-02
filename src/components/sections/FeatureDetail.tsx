import { motion } from 'framer-motion'
import type { FeaturePillar } from '../../data/features'
import ScreenshotFrame from '../ScreenshotFrame'
import ScreenshotGallery from '../ScreenshotGallery'

interface Props {
  pillar: FeaturePillar
  index: number
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

// Sections with many sub-features get a gallery with multiple screenshots
const galleryConfigs: Record<string, { src: string; alt: string; label: string }[]> = {
  analyze: [
    { src: '/screenshots/analyze-performance.png', alt: 'Performance Dashboard with slow query trends and wait type distribution', label: 'Performance' },
    { src: '/screenshots/analyze-query.png', alt: 'Query Analyzer with AI-powered plan explanation and optimization suggestions', label: 'Query Analyzer' },
    { src: '/screenshots/analyze-quality.png', alt: 'Data Quality Dashboard with composite scores and freshness status', label: 'Data Quality' },
    { src: '/screenshots/analyze-drift.png', alt: 'Schema Compare showing DDL drift detection between databases', label: 'Schema Drift' },
  ],
}

// Screenshot descriptions for single-image sections
const screenshotMeta: Record<string, string> = {
  discover: 'Infrastructure Explorer showing hierarchical fleet view with server health indicators',
  monitor: 'Live Monitoring Hub showing active sessions, blocking chains, and server health metrics',
  'ai-intelligence': 'AI Advisor dashboard with performance recommendations and confidence scoring',
  govern: 'Security Hub showing login inventory, role hierarchy, and data classification overview',
  'platform-ops': 'Operations Dashboard with handler execution status and system health metrics',
}

export default function FeatureDetail({ pillar, index }: Props) {
  const Icon = pillar.icon
  const isReversed = index % 2 === 1
  const hasGallery = pillar.id in galleryConfigs

  return (
    <section id={pillar.id} className="relative py-24 overflow-hidden">
      {/* Alternating subtle background */}
      {index % 2 === 0 && (
        <div className="absolute inset-0 bg-navy-light/50" />
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Top row: text + screenshot, alternating sides */}
        <div
          className={`flex flex-col ${
            isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
          } gap-12 lg:gap-16 items-center mb-16`}
        >
          {/* Text side */}
          <motion.div
            className="flex-1 lg:max-w-md"
            initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-md bg-accent/10 flex items-center justify-center">
                <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
              </div>
              <span className="text-sm font-medium text-accent uppercase tracking-wider">
                Pillar {index + 1}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              {pillar.tagline}
            </h2>
            <p className="text-lg text-[#94A3B8] leading-relaxed mb-6">
              {pillar.subheadline}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-accent/10 text-accent text-sm font-medium">
              <span>{pillar.subFeatures.length} capabilities</span>
            </div>
          </motion.div>

          {/* Screenshot side */}
          <div className="flex-1 w-full max-w-xl lg:max-w-none">
            {hasGallery ? (
              <ScreenshotGallery
                id={`screenshot-${pillar.id}`}
                images={galleryConfigs[pillar.id]}
              />
            ) : (
              <ScreenshotFrame
                id={`screenshot-${pillar.id}`}
                src={`/screenshots/${pillar.id}.png`}
                alt={screenshotMeta[pillar.id] || `${pillar.headline} interface screenshot`}
              />
            )}
          </div>
        </div>

        {/* Sub-feature cards below */}
        <motion.div
          className="w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {pillar.subFeatures.map((sub) => {
              const SubIcon = sub.icon
              return (
                <motion.div
                  key={sub.name}
                  variants={itemVariants}
                  className="glass-card p-4 hover:bg-[#253348] transition-colors group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-md bg-accent/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent/20 transition-colors">
                      <SubIcon className="w-4.5 h-4.5 text-accent" strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold text-white mb-1 leading-tight">
                        {sub.name}
                      </h4>
                      <p className="text-xs text-[#94A3B8] leading-relaxed">
                        {sub.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

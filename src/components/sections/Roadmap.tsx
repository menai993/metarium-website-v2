import { motion } from 'framer-motion'
import { CheckCircle2, Circle, Clock } from 'lucide-react'

type RoadmapStatus = 'shipped' | 'in-progress' | 'planned'

interface RoadmapItem {
  title: string
  description: string
  status: RoadmapStatus
}

const roadmapPhases: { phase: string; items: RoadmapItem[] }[] = [
  {
    phase: 'Shipped',
    items: [
      { title: 'Fleet Auto-Discovery', description: 'SQL Server & PostgreSQL server, database, and object discovery', status: 'shipped' },
      { title: '130+ Data Handlers', description: 'Automated collection for performance, schema, security, replication, storage', status: 'shipped' },
      { title: 'AI Chat & Investigation', description: 'Context-aware natural language conversations with multi-turn investigation', status: 'shipped' },
      { title: 'Real-Time Monitoring', description: 'WebSocket-powered live sessions, blocking chains, and deadlock tracking', status: 'shipped' },
      { title: 'Business Glossary & Canvas', description: 'Business context mapping with drag-and-drop data flow diagrams', status: 'shipped' },
      { title: 'Security & Compliance Hub', description: 'Login inventory, data classification, compliance scoring, audit logs', status: 'shipped' },
    ],
  },
  {
    phase: 'In Progress',
    items: [
      { title: 'Enhanced PostgreSQL Coverage', description: 'Deep PG-specific monitoring: vacuum stats, bloat detection, connection pooling', status: 'in-progress' },
      { title: 'Advanced AI Advisor v2', description: 'Proactive recommendations with scheduled health reports and trend analysis', status: 'in-progress' },
      { title: 'Notification Channels Expansion', description: 'Slack, Teams, PagerDuty, and custom webhook integrations', status: 'in-progress' },
    ],
  },
  {
    phase: 'Planned',
    items: [
      { title: 'Cloud-Native Deployment', description: 'Docker Compose and Kubernetes deployment with Helm charts', status: 'planned' },
      { title: 'REST API & SDK', description: 'Public API for automation, third-party integrations, and custom dashboards', status: 'planned' },
      { title: 'Plugin Architecture', description: 'Community-contributed handlers, dashboards, and AI prompt templates', status: 'planned' },
      { title: 'MySQL & MariaDB Support', description: 'Extending fleet management to include MySQL-compatible engines', status: 'planned' },
    ],
  },
]

const statusConfig: Record<RoadmapStatus, { icon: typeof CheckCircle2; color: string; bg: string }> = {
  shipped: { icon: CheckCircle2, color: 'text-success', bg: 'bg-success/10' },
  'in-progress': { icon: Clock, color: 'text-accent', bg: 'bg-accent/10' },
  planned: { icon: Circle, color: 'text-[#64748B]', bg: 'bg-[#64748B]/10' },
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light to-navy" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Product Roadmap</span>
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            What's shipped, what's in progress, and where we're headed.
            Built in public — your feedback shapes what comes next.
          </p>
        </motion.div>

        <div className="space-y-12">
          {roadmapPhases.map((phase) => (
            <motion.div
              key={phase.phase}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
                {phase.phase === 'Shipped' && <CheckCircle2 className="w-5 h-5 text-success" strokeWidth={1.5} />}
                {phase.phase === 'In Progress' && <Clock className="w-5 h-5 text-accent" strokeWidth={1.5} />}
                {phase.phase === 'Planned' && <Circle className="w-5 h-5 text-[#64748B]" strokeWidth={1.5} />}
                {phase.phase}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {phase.items.map((item) => {
                  const config = statusConfig[item.status]
                  const StatusIcon = config.icon
                  return (
                    <motion.div
                      key={item.title}
                      variants={itemVariants}
                      className="glass-card p-5 hover:bg-[#253348] transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-8 h-8 rounded-md ${config.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                          <StatusIcon className={`w-4 h-4 ${config.color}`} strokeWidth={1.5} />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white mb-1">{item.title}</h4>
                          <p className="text-xs text-[#94A3B8] leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

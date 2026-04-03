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
      { title: 'Fleet Metadata Inventory', description: 'Collects and normalizes tables, views, procedures, functions, triggers, and related object metadata across monitored environments', status: 'shipped' },
      { title: 'DDL Change Intelligence', description: 'Tracks schema changes with historical context and produces impact-oriented records for investigation and auditing', status: 'shipped' },
      { title: 'Dead Object Detection', description: 'Scores unused tables, indexes, and columns with confidence levels using workload and usage evidence', status: 'shipped' },
      { title: 'Heavy Query Analysis', description: 'Captures costly query behavior, execution characteristics, and optimization signals for performance triage', status: 'shipped' },
      { title: 'Multi-Node Orchestration', description: 'Runs schedule-driven execution with heartbeat, liveness, and leader-aware failover and recovery behavior', status: 'shipped' },
      { title: 'AI Query Optimization', description: 'Creates async AI jobs that return structured optimization recommendations from analysis context and workload metadata', status: 'shipped' },
      { title: 'Incident Investigation Engine', description: 'Correlates anomalies, query behavior, and infrastructure signals through iterative investigation handlers and tools', status: 'shipped' },
      { title: 'Role-Based Access', description: 'Implements tenant RBAC, permission mapping, and object ownership for secure, scoped operational access', status: 'shipped' },
    ],
  },
  {
    phase: 'In Progress',
    items: [
      { title: 'Comparison Data Source Fix', description: 'Database comparison flow is being corrected to use collected catalog data instead of live sys queries', status: 'in-progress' },
      { title: 'Access Inheritance Completion', description: 'Effective access recalculation is being extended to include Server to Database to Object inheritance paths', status: 'in-progress' },
      { title: 'Object Event Dispatching', description: 'Event production and notification dispatch wiring is under active implementation hardening', status: 'in-progress' },
      { title: 'WMI Metrics Expansion', description: 'OS-level Windows telemetry collectors are being implemented to complement DMV-based infrastructure visibility', status: 'in-progress' },
    ],
  },
  {
    phase: 'Planned',
    items: [
      { title: 'Cross-Database Dependencies', description: 'Add explicit cross-database dependency resolution and unresolved-reference tracking for migration and risk analysis', status: 'planned' },
      { title: 'Hash Change Detection', description: 'Introduce hash-driven DDL change detection for faster, more reliable object version comparison workflows', status: 'planned' },
      { title: 'PostgreSQL DBA Deepening', description: 'Expand PostgreSQL-first intelligence around vacuum, bloat, replication, locks, and platform-specific advisory features', status: 'planned' },
      { title: 'Access-Scoped Dashboards', description: 'Enforce effective access projections directly in overview and catalog views for role-accurate UI filtering', status: 'planned' },
      { title: 'Safety Gate Evolution', description: 'Extend pre-execution safeguards and AI-assisted validation to reduce high-risk query execution in production workflows', status: 'planned' },
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

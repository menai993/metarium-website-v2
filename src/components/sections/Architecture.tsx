import { motion } from 'framer-motion'
import {
  Server, Globe, Database, Brain, Shield, Layers,
  ArrowRight, Monitor, Cpu,
} from 'lucide-react'

const layers = [
  {
    label: 'Presentation Layer',
    tech: 'React + TypeScript + Tailwind CSS',
    icon: Monitor,
    description: 'Responsive SPA with real-time WebSocket updates, Framer Motion animations, and role-specific dashboards.',
  },
  {
    label: 'API Gateway',
    tech: '.NET 8+ REST API + SignalR',
    icon: Globe,
    description: 'Clean architecture with CQRS pattern, JWT authentication, rate limiting, and real-time event streaming.',
  },
  {
    label: 'AI Engine',
    tech: 'Multi-Provider LLM Integration',
    icon: Brain,
    description: 'Context-aware AI with 60+ prompt templates, multi-turn investigation, and pluggable LLM providers (OpenAI, Azure, Ollama).',
  },
  {
    label: 'Business Logic',
    tech: 'Domain Services + Worker Nodes',
    icon: Layers,
    description: '130+ automated data collection handlers with leader election, priority scheduling, and multi-node scaling.',
  },
  {
    label: 'Data Layer',
    tech: 'SQL Server + PostgreSQL',
    icon: Database,
    description: 'Metadata repository with time-series storage, baseline computation, anomaly scoring, and full audit logging.',
  },
  {
    label: 'Security Layer',
    tech: 'RBAC + Encryption + Audit',
    icon: Shield,
    description: 'Role-based access control, data classification engine, credential vault, and complete action audit trail.',
  },
]

const techStack = [
  { name: '.NET 8+', category: 'Backend' },
  { name: 'React 18', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'SQL Server', category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'SignalR', category: 'Real-time' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'OpenAI / Azure / Ollama', category: 'AI' },
  { name: 'Framer Motion', category: 'Animation' },
  { name: 'Vite', category: 'Build' },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

export default function Architecture() {
  return (
    <section id="architecture" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Architecture & Tech Stack</span>
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            Production-grade architecture built for reliability. Clean separation of concerns,
            multi-node scaling, and real-time data pipelines.
          </p>
        </motion.div>

        {/* Architecture layers */}
        <motion.div
          className="space-y-3 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {layers.map((layer, i) => {
            const Icon = layer.icon
            return (
              <motion.div
                key={layer.label}
                variants={itemVariants}
                className="glass-card p-5 sm:p-6 hover:bg-[#253348] transition-colors group"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="flex items-center gap-4 shrink-0">
                    <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                    </div>
                    <div className="sm:w-44">
                      <h3 className="text-sm font-semibold text-white">{layer.label}</h3>
                      <p className="text-xs text-cyan-accent font-medium">{layer.tech}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#94A3B8] leading-relaxed flex-1">
                    {layer.description}
                  </p>
                </div>
                {i < layers.length - 1 && (
                  <div className="hidden sm:flex justify-center mt-3">
                    <ArrowRight className="w-4 h-4 text-accent/20 rotate-90" strokeWidth={1.5} />
                  </div>
                )}
              </motion.div>
            )
          })}
        </motion.div>

        {/* Data flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            Data Collection Pipeline
          </h3>
          <div className="glass-card p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0">
              {[
                { icon: Server, label: 'Your Fleet', sub: 'SQL Server & PostgreSQL' },
                { icon: Cpu, label: '130+ Handlers', sub: 'Scheduled collection' },
                { icon: Database, label: 'Metadata Store', sub: 'Time-series + baselines' },
                { icon: Brain, label: 'AI Analysis', sub: 'Context-aware insights' },
                { icon: Monitor, label: 'Dashboards', sub: 'Real-time via WebSocket' },
              ].map((step, i, arr) => (
                <div key={step.label} className="flex items-center">
                  <div className="text-center px-4 py-3">
                    <div className="w-12 h-12 rounded-md bg-accent/10 flex items-center justify-center mx-auto mb-3">
                      <step.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                    </div>
                    <p className="text-sm font-semibold text-white">{step.label}</p>
                    <p className="text-xs text-[#94A3B8]">{step.sub}</p>
                  </div>
                  {i < arr.length - 1 && (
                    <ArrowRight className="hidden lg:block w-5 h-5 text-accent/30 shrink-0" strokeWidth={1.5} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tech stack badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-surface-border bg-surface-card/60 text-sm"
              >
                <span className="text-white font-medium">{tech.name}</span>
                <span className="text-[#64748B]">{tech.category}</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

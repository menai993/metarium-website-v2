import { motion } from 'framer-motion'
import {
  Server, Globe, Database, Brain, Shield, Layers,
  ArrowRight, Monitor, Cpu,
} from 'lucide-react'

const layers = [
  {
    label: 'Presentation Layer',
    tech: 'React 19 + TypeScript 5.9 + Tailwind CSS 4',
    icon: Monitor,
    description: 'Dashboard-first UI with role-based pages, AI views, and real-time updates via SignalR/WebSocket patterns. Built with Vite 7 and React Router 7.',
  },
  {
    label: 'API Gateway',
    tech: 'ASP.NET Core on .NET 8',
    icon: Globe,
    description: 'Clean Architecture with MediatR/CQRS patterns, REST APIs, and authentication for local, Windows, and AD/LDAP scenarios plus API key support for service integrations.',
  },
  {
    label: 'AI Engine',
    tech: 'OpenAI + Anthropic + Phi-3/Ollama',
    icon: Brain,
    description: 'Multi-provider LLM architecture through provider abstraction. Versioned prompt templates from JSON and database-backed config, with handler-specific context assembly and cost/usage governance.',
  },
  {
    label: 'Business Logic',
    tech: '117 Handlers + 38 Investigation Tools',
    icon: Layers,
    description: 'Distributed worker model claims scheduled jobs from shared execution tables with deterministic execution, idempotency controls, leader election, and heartbeat/liveness checks.',
  },
  {
    label: 'Data Layer',
    tech: 'SQL Server System of Record',
    icon: Database,
    description: 'Coordination, inventory, jobs, identity, and AI telemetry/configuration tables. Collector and monitoring tables store snapshots, history, and trend data for scoring, baselines, and change impact analysis.',
  },
  {
    label: 'Security Layer',
    tech: 'RBAC + Encrypted Credentials + Audit',
    icon: Shield,
    description: 'System roles (Admin, DBA, Analyst, Viewer, Owner) with object-level ownership and permission mapping. Encrypted credential storage, hashed/salted passwords, and AI interaction auditing with sensitive-pattern masking.',
  },
]

const techStack = [
  { name: '.NET 8', category: 'Backend' },
  { name: 'ASP.NET Core', category: 'API' },
  { name: 'EF Core 8.x', category: 'ORM' },
  { name: 'Microsoft.Data.SqlClient', category: 'Driver' },
  { name: 'Npgsql 8.0.6', category: 'Driver' },
  { name: 'React 19.2.0', category: 'Frontend' },
  { name: 'TypeScript 5.9.x', category: 'Language' },
  { name: 'Vite 7.2.5', category: 'Build' },
  { name: 'Tailwind CSS 4.1.18', category: 'Styling' },
  { name: 'SignalR / WebSocket', category: 'Real-time' },
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
                { icon: Server, label: 'Your Fleet', sub: 'SQL Server & PostgreSQL instances' },
                { icon: Cpu, label: '117 Handlers', sub: 'Scheduled metadata & metrics' },
                { icon: Database, label: 'Platform Tables', sub: 'Snapshots, history & trends' },
                { icon: Brain, label: 'AI + Intelligence', sub: 'Risk scores & recommendations' },
                { icon: Monitor, label: 'Live Dashboards', sub: 'SignalR real-time delivery' },
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

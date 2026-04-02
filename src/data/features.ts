import type { ComponentType } from 'react'
import type { LucideProps } from 'lucide-react'
import {
  Compass, Activity, TrendingUp, Sparkles, Shield, Settings,
  Network, Database, UserPlus, Play, BookOpen, PenTool,
  GitMerge, Users, Search,
  MonitorDot, HeartPulse, HardDrive, GitBranch, AlertTriangle, Bell,
  BarChart3, Code2, Flame, Brain, ClipboardCheck, Clock,
  Table2, GitCompare, LineChart, AlertOctagon, Trash2, Truck, Wrench,
  MessageSquare, Lightbulb, Languages, FileSearch, FileText, PieChart, DollarSign,
  Lock, Tag, FileCheck, KeyRound, FileBarChart, BellRing,
  Gauge, Server, Sliders, UserCog, TriangleAlert, ScrollText,
} from 'lucide-react'

export type LucideIcon = ComponentType<LucideProps>

export interface SubFeature {
  name: string
  description: string
  icon: LucideIcon
}

export interface FeaturePillar {
  id: string
  icon: LucideIcon
  headline: string
  subheadline: string
  tagline: string
  subFeatures: SubFeature[]
}

export const featurePillars: FeaturePillar[] = [
  {
    id: 'discover',
    icon: Compass,
    headline: 'Discover & Understand',
    tagline: 'Know Every Corner of Your Database Fleet',
    subheadline:
      'Automatic discovery, intelligent cataloging, and business-context enrichment across your entire SQL Server and PostgreSQL estate.',
    subFeatures: [
      {
        name: 'Infrastructure Explorer',
        description:
          'Hierarchical tree view of your entire fleet \u2014 servers, databases, schemas, tables \u2014 all auto-discovered and continuously updated.',
        icon: Network,
      },
      {
        name: 'Object Catalog',
        description:
          'Global searchable inventory of every database object across all servers. Find any table, view, or procedure in seconds.',
        icon: Database,
      },
      {
        name: 'Server Onboarding Wizard',
        description:
          'Step-by-step guided wizard to add new servers. Connect, configure, and start monitoring in minutes.',
        icon: UserPlus,
      },
      {
        name: 'SQL Agent Dashboard',
        description:
          'Monitor all SQL Server Agent jobs across your fleet from a single pane with history and failure tracking.',
        icon: Play,
      },
      {
        name: 'Business Glossary',
        description:
          'Company-wide data dictionary bridging business terminology and database schema with version-controlled definitions.',
        icon: BookOpen,
      },
      {
        name: 'Business Context Canvas',
        description:
          'Visual drag-and-drop editor for documenting data flows, powered by ReactFlow with AI auto-enrichment.',
        icon: PenTool,
      },
      {
        name: 'Business Processes',
        description:
          'Document and manage workflows with links to underlying data objects. AI generates process drafts from your schema.',
        icon: GitMerge,
      },
      {
        name: 'Ownership Matrix',
        description:
          'Assign owners, define escalation chains, and export accountability records for every database object.',
        icon: Users,
      },
      {
        name: 'Unified Search',
        description:
          'Find anything across the platform \u2014 catalog objects, glossary terms, processes, canvases \u2014 from one search bar.',
        icon: Search,
      },
    ],
  },
  {
    id: 'monitor',
    icon: Activity,
    headline: 'Monitor & Detect',
    tagline: 'Real-Time Visibility Into Every Heartbeat',
    subheadline:
      'Live monitoring, instant anomaly detection, and proactive alerting \u2014 so you catch problems before your users do.',
    subFeatures: [
      {
        name: 'Live Monitoring Hub',
        description:
          'Real-time production dashboard showing active sessions, blocking chains, deadlock tracking, and live summary stats.',
        icon: MonitorDot,
      },
      {
        name: 'Server Health Monitoring',
        description:
          'Continuous tracking of CPU, memory, wait statistics, TempDB contention, and error log pattern recognition.',
        icon: HeartPulse,
      },
      {
        name: 'Storage Analytics',
        description:
          'Disk and file-level intelligence with growth forecasting, I/O latency analytics, and transaction log management.',
        icon: HardDrive,
      },
      {
        name: 'Replication Monitoring',
        description:
          'Unified monitoring for Always On AG, Log Shipping, Transactional Replication, and PostgreSQL WAL replication.',
        icon: GitBranch,
      },
      {
        name: 'Anomaly Detection',
        description:
          'AI-powered detection with automatic baseline learning, multi-dimensional scoring, and timeline visualization.',
        icon: AlertTriangle,
      },
      {
        name: 'Alert Rules & Notifications',
        description:
          'Configurable thresholds with multi-channel delivery \u2014 email, webhook, and role-based subscriptions.',
        icon: Bell,
      },
    ],
  },
  {
    id: 'analyze',
    icon: TrendingUp,
    headline: 'Analyze & Optimize',
    tagline: 'Turn Data Into Decisions, Automatically',
    subheadline:
      'Performance intelligence, query optimization, data quality scoring, risk assessment, and growth analytics \u2014 unified in one powerful workbench.',
    subFeatures: [
      {
        name: 'Performance Dashboard',
        description:
          'Morning health check with slow query trends, missing index scores, wait type distribution, and improvement indicators.',
        icon: BarChart3,
      },
      {
        name: 'Query Analyzer',
        description:
          'Deep-dive SQL optimization workbench with AI plan explanation, risk scoring, and optimization history tracking.',
        icon: Code2,
      },
      {
        name: 'Heavy Query Identification',
        description:
          'Automatically surfaces queries burning the most resources, ranked by duration, CPU, or I/O consumption.',
        icon: Flame,
      },
      {
        name: 'AI Query Optimizer',
        description:
          'AI-powered automatic query rewriting with side-by-side comparison and estimated 5\u201390%+ improvement gains.',
        icon: Brain,
      },
      {
        name: 'Data Quality Dashboard',
        description:
          'Unified health scorecard with composite quality scores, freshness status, and data criticality rankings.',
        icon: ClipboardCheck,
      },
      {
        name: 'Data Freshness Monitoring',
        description:
          'Last-modified timestamps, staleness detection, row count delta tracking, and 30-day trend visualization.',
        icon: Clock,
      },
      {
        name: 'Data Profiling',
        description:
          'Column statistics \u2014 min, max, average, distinct counts, null rates \u2014 with priority-based execution.',
        icon: Table2,
      },
      {
        name: 'Schema Compare & Drift',
        description:
          'Automated DDL drift detection with severity classification, schema binding tracking, and comparison history.',
        icon: GitCompare,
      },
      {
        name: 'Growth Analytics',
        description:
          'Table size trending with growth forecasting, index health scoring, and object popularity ranking.',
        icon: LineChart,
      },
      {
        name: 'Risk & Change Management',
        description:
          'Enterprise risk scorecard 0\u2013100 with schema change scoring, impact analysis, and anomaly correlation.',
        icon: AlertOctagon,
      },
      {
        name: 'Dead Object Analysis',
        description:
          'Identify unused tables, indexes, and columns with dependency-aware safe-to-delete detection.',
        icon: Trash2,
      },
      {
        name: 'ETL & Pipeline Monitoring',
        description:
          'Track SSIS, CDC, Change Tracking, Linked Servers, and Service Broker queue health.',
        icon: Truck,
      },
      {
        name: 'Maintenance Intelligence',
        description:
          'Proactive DBCC check scheduling, statistics age monitoring, and corruption detection.',
        icon: Wrench,
      },
    ],
  },
  {
    id: 'ai-intelligence',
    icon: Sparkles,
    headline: 'AI Intelligence',
    tagline: "Your Database Team's AI Co-Pilot",
    subheadline:
      'From natural language queries to autonomous incident investigation \u2014 AI that understands your databases as well as you do.',
    subFeatures: [
      {
        name: 'Ask Metarium \u2014 AI Chat',
        description:
          'ChatGPT-style conversational interface with context-scoped conversations and source attribution.',
        icon: MessageSquare,
      },
      {
        name: 'AI Advisor',
        description:
          'Intelligent recommendations organized by impact \u2014 Performance, Risk, Architecture, Security \u2014 with confidence scoring.',
        icon: Lightbulb,
      },
      {
        name: 'Natural Language to SQL',
        description:
          'Convert business questions to executable SQL automatically. No SQL expertise required.',
        icon: Languages,
      },
      {
        name: 'AI Incident Investigation',
        description:
          'Classic and iterative investigation modes with multi-server support and downloadable reports.',
        icon: FileSearch,
      },
      {
        name: 'Object Explainer',
        description:
          'Instant AI-generated documentation for any database object with column-by-column breakdowns.',
        icon: FileText,
      },
      {
        name: 'AI Analytics Hub',
        description:
          'Workload profiling, capacity forecasting, migration readiness assessment, and AI-generated reports.',
        icon: PieChart,
      },
      {
        name: 'AI Governance',
        description:
          'Usage dashboards, budget controls, prompt template management (60+), and multi-provider LLM configuration.',
        icon: DollarSign,
      },
    ],
  },
  {
    id: 'govern',
    icon: Shield,
    headline: 'Govern & Secure',
    tagline: 'Enterprise Governance Without the Red Tape',
    subheadline:
      'Security auditing, data classification, compliance reporting, and access control \u2014 automated and always current.',
    subFeatures: [
      {
        name: 'Security Hub',
        description:
          'Comprehensive SQL security dashboard with login inventory, role hierarchy, and permission explorer.',
        icon: Lock,
      },
      {
        name: 'Data Classification',
        description:
          'Column-level PII/PCI/Confidential tracking with risk scoring for GDPR, HIPAA, and SOC2 compliance.',
        icon: Tag,
      },
      {
        name: 'Compliance Center',
        description:
          'Encryption monitoring, audit specifications, DDL audit trails, and policy-based compliance scoring.',
        icon: FileCheck,
      },
      {
        name: 'Access Control Dashboard',
        description:
          'Permissions matrix, role-based access control with custom roles, group management, and audit trails.',
        icon: KeyRound,
      },
      {
        name: 'Compliance Reports',
        description:
          'Pre-built templates for SLA, GDPR, Fleet, Cost, and Security reports. Export to PDF/CSV.',
        icon: FileBarChart,
      },
      {
        name: 'Notification Management',
        description:
          'Granular role-based subscriptions with multi-channel delivery and severity-based routing rules.',
        icon: BellRing,
      },
    ],
  },
  {
    id: 'platform-ops',
    icon: Settings,
    headline: 'Platform & Operations',
    tagline: 'Mission Control for Your Data Platform',
    subheadline:
      'Worker orchestration, schedule management, infrastructure monitoring, and configuration \u2014 all centralized and self-managing.',
    subFeatures: [
      {
        name: 'Operations Dashboard',
        description:
          'Real-time handler execution status, schedule adherence, error rates, and system health metrics.',
        icon: Gauge,
      },
      {
        name: 'Active Alerts Center',
        description:
          'Centralized severity-based alert management with acknowledgment and resolution workflows.',
        icon: AlertTriangle,
      },
      {
        name: 'Infrastructure Center',
        description:
          'Worker nodes, 130+ execution schedules, data collection status, and handler management per server.',
        icon: Server,
      },
      {
        name: 'Configuration Center',
        description:
          'Alert rules, notification routing, retention policies, and LLM provider/budget configuration.',
        icon: Sliders,
      },
      {
        name: 'Administration',
        description:
          'User management, group hierarchies, ownership assignment, tag management, and license activation.',
        icon: UserCog,
      },
      {
        name: 'Problems Dashboard',
        description:
          'Fleet-wide cross-server problem detection with severity-sorted display and per-server drill-down.',
        icon: TriangleAlert,
      },
      {
        name: 'Audit Log',
        description:
          'Complete audit trail of all platform actions \u2014 user activity, config changes, and data access.',
        icon: ScrollText,
      },
    ],
  },
]

export const differentiators = [
  {
    title: 'Multi-Engine Support',
    description:
      'Single platform for both SQL Server and PostgreSQL. Unified governance, monitoring, and analytics without tool sprawl.',
    highlight: 'One platform, two engines, zero compromises.',
  },
  {
    title: '130+ Automated Handlers',
    description:
      'Pre-built data collection handlers covering performance, schema, security, replication, storage, and more.',
    highlight: 'No custom scripting required.',
  },
  {
    title: 'AI-First Architecture',
    description:
      'AI is woven into every feature \u2014 from query optimization to incident investigation to auto-documentation.',
    highlight: 'Not an add-on. Built in from day one.',
  },
  {
    title: 'Connected Knowledge Graph',
    description:
      'Glossary terms link to objects, which connect to processes, which map through canvases, which tie to ownership.',
    highlight: 'Changes flow through every perspective automatically.',
  },
  {
    title: 'Iterative AI Investigation',
    description:
      'Multi-turn conversational investigations that ask clarifying questions and progressively narrow root causes.',
    highlight: 'Not just reports. Real dialogue.',
  },
  {
    title: 'Column-Level Lineage',
    description:
      'Track data flow at the individual column level. Know exactly where each column comes from and what depends on it.',
    highlight: 'Beyond table-to-table. Column precision.',
  },
  {
    title: 'Real-Time WebSocket',
    description:
      'Live data via SignalR WebSocket connections. No polling, no refresh \u2014 see changes as they happen.',
    highlight: 'Instant. Always current.',
  },
  {
    title: 'Role-Based Dashboards',
    description:
      'Every role sees a tailored experience: DBAs see performance, Engineers see pipelines, Managers see fleet overview.',
    highlight: 'Personalized from login.',
  },
  {
    title: 'Self-Documenting with AI',
    description:
      'AI writes object descriptions, creates process docs, enriches canvases, and explains query behavior \u2014 automatically.',
    highlight: 'Your platform documents itself.',
  },
  {
    title: 'Enterprise-Grade Architecture',
    description:
      '.NET 8+ with clean architecture, multi-node worker scalability, leader election, and comprehensive observability.',
    highlight: 'Built for scale from the start.',
  },
]

export const stats = [
  { label: 'Automated Handlers', value: 130, suffix: '+' },
  { label: 'AI Prompt Templates', value: 60, suffix: '+' },
  { label: 'Investigation Tools', value: 30, suffix: '+' },
  { label: 'Supported Engines', value: 2, suffix: '', displayText: 'SQL Server + PostgreSQL' },
  { label: 'Role-Based Dashboards', value: 6, suffix: ' Roles' },
  { label: 'LLM Providers', value: 3, suffix: '+' },
]

export const flywheel = [
  { step: 'Discover', description: 'Auto-discover and catalog your entire database estate', icon: Compass },
  { step: 'Monitor', description: 'Real-time visibility with instant anomaly detection', icon: Activity },
  { step: 'Analyze', description: 'AI-powered performance intelligence and optimization', icon: TrendingUp },
  { step: 'Govern', description: 'Automated compliance, classification, and access control', icon: Shield },
  { step: 'Optimize', description: 'Continuous improvement driven by AI recommendations', icon: Sparkles },
]

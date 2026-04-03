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
    headline: 'Discover & Catalog',
    tagline: 'See Everything. Miss Nothing.',
    subheadline:
      'Auto-discovers every server, database, and object in your SQL Server and PostgreSQL fleet. Builds a searchable catalog with business context. No manual inventory spreadsheets.',
    subFeatures: [
      {
        name: 'Infrastructure Explorer',
        description:
          'Your full fleet in one tree: servers, databases, schemas, tables. Auto-discovered, auto-updated. No more half-forgotten dev instances.',
        icon: Network,
      },
      {
        name: 'Object Catalog',
        description:
          'Every table, view, and stored procedure across every server, searchable in under a second. Like grep for your entire database estate.',
        icon: Database,
      },
      {
        name: 'Server Onboarding',
        description:
          'Add a new server in 3 minutes. Guided setup handles connection, permissions check, and initial data collection automatically.',
        icon: UserPlus,
      },
      {
        name: 'SQL Agent Dashboard',
        description:
          'Every SQL Agent job across every server, one screen. See what failed, what\'s running long, what hasn\'t run in weeks.',
        icon: Play,
      },
      {
        name: 'Business Glossary',
        description:
          'Map business terms to actual database columns. Version-controlled, team-editable. "Revenue" finally means the same thing to everyone.',
        icon: BookOpen,
      },
      {
        name: 'Business Context Canvas',
        description:
          'Drag-and-drop data flow diagrams backed by ReactFlow. AI suggests connections based on your schema.',
        icon: PenTool,
      },
      {
        name: 'Business Processes',
        description:
          'Document the workflows your data supports. AI drafts process documentation from your schema, then you review and publish.',
        icon: GitMerge,
      },
      {
        name: 'Ownership Matrix',
        description:
          'Know who owns what. Escalation chains, accountability records, exportable. No more "ask Dave, he might know."',
        icon: Users,
      },
      {
        name: 'Unified Search',
        description:
          'One search bar. Catalog objects, glossary terms, processes, canvases. All indexed and ranked.',
        icon: Search,
      },
    ],
  },
  {
    id: 'monitor',
    icon: Activity,
    headline: 'Monitor & Detect',
    tagline: 'Catch Problems Before Your Users Call',
    subheadline:
      'Real-time monitoring across your entire fleet. Anomaly detection with learned baselines, not static thresholds. Alerts that mean something.',
    subFeatures: [
      {
        name: 'Live Monitoring Hub',
        description:
          'Active sessions, blocking chains, deadlock tracking. All live, all the time. WebSocket-powered, no refresh needed.',
        icon: MonitorDot,
      },
      {
        name: 'Server Health',
        description:
          'CPU, memory, wait stats, TempDB contention, error log patterns. Baselines learned automatically. Alerts fire on deviations, not arbitrary numbers.',
        icon: HeartPulse,
      },
      {
        name: 'Storage Analytics',
        description:
          'Disk growth forecasting, I/O latency breakdowns, transaction log management. Know when you\'ll run out of space weeks before it happens.',
        icon: HardDrive,
      },
      {
        name: 'Replication Monitoring',
        description:
          'Always On, Log Shipping, Transactional Replication, PostgreSQL WAL. One screen instead of four different tools.',
        icon: GitBranch,
      },
      {
        name: 'Anomaly Detection',
        description:
          'Multi-dimensional scoring against learned baselines. Not "CPU > 90%" but "this workload pattern hasn\'t been seen before on this server."',
        icon: AlertTriangle,
      },
      {
        name: 'Alert Rules',
        description:
          'Thresholds you define, delivered where you want: email, webhook, role-based routing. Signal, not noise.',
        icon: Bell,
      },
    ],
  },
  {
    id: 'analyze',
    icon: TrendingUp,
    headline: 'Analyze & Optimize',
    tagline: 'Find the Slow Queries. Fix Them.',
    subheadline:
      'Performance intelligence that actually tells you what to do. Query optimization, data quality scoring, risk assessment, growth forecasting. One workbench, no tab-switching.',
    subFeatures: [
      {
        name: 'Performance Dashboard',
        description:
          'Morning health check: slow query trends, missing index scores, wait type distribution. Spot regressions before standup.',
        icon: BarChart3,
      },
      {
        name: 'Query Analyzer',
        description:
          'Paste a query, get an AI-explained execution plan, risk score, and optimization history. Like having a senior DBA review every query.',
        icon: Code2,
      },
      {
        name: 'Heavy Query Detection',
        description:
          'Top resource consumers ranked by duration, CPU, or I/O. The queries your CFO is paying for, sorted by cost.',
        icon: Flame,
      },
      {
        name: 'AI Query Optimizer',
        description:
          'AI rewrites your slow queries with side-by-side comparison. We\'ve seen 5\u201390%+ improvement. One report query went from 1.8s to 120ms.',
        icon: Brain,
      },
      {
        name: 'Data Quality Scores',
        description:
          'Composite quality scores per table: freshness, completeness, consistency. Scored and ranked so you fix the important stuff first.',
        icon: ClipboardCheck,
      },
      {
        name: 'Freshness Monitoring',
        description:
          'When was this table last updated? How many rows changed? 30-day trend lines tell you if an ETL silently broke three weeks ago.',
        icon: Clock,
      },
      {
        name: 'Data Profiling',
        description:
          'Column-level stats: min, max, average, distinct counts, null rates. Priority-based execution so it doesn\'t crush your production server.',
        icon: Table2,
      },
      {
        name: 'Schema Compare & Drift',
        description:
          'Automated DDL diff between environments. Severity classification helps you focus on changes that actually break things.',
        icon: GitCompare,
      },
      {
        name: 'Growth Analytics',
        description:
          'Table size trends with forecasting, index health scores, object popularity ranking. Plan capacity based on data, not guesses.',
        icon: LineChart,
      },
      {
        name: 'Risk & Change Management',
        description:
          'Risk score 0\u2013100 for every schema change. Impact analysis across dependent objects. Catches the ALTER TABLE that locks production for 20 minutes.',
        icon: AlertOctagon,
      },
      {
        name: 'Dead Object Analysis',
        description:
          'Finds unused tables, indexes, and columns. Dependency-aware safe-to-delete detection. Clean up without breaking anything.',
        icon: Trash2,
      },
      {
        name: 'ETL & Pipeline Monitoring',
        description:
          'SSIS, CDC, Change Tracking, Linked Servers, Service Broker. All in one place instead of scattered across SSMS windows.',
        icon: Truck,
      },
      {
        name: 'Maintenance Intelligence',
        description:
          'DBCC check scheduling, statistics age tracking, corruption detection. The maintenance tasks your future self will thank you for.',
        icon: Wrench,
      },
    ],
  },
  {
    id: 'ai-intelligence',
    icon: Sparkles,
    headline: 'AI Intelligence',
    tagline: 'Ask Questions. Get Real Answers.',
    subheadline:
      'Not a chatbot bolted onto a dashboard. AI that has context on your actual servers, queries, and workloads. Investigates problems the way a senior DBA would.',
    subFeatures: [
      {
        name: 'Ask Metarium',
        description:
          'Natural language conversations grounded in your actual server metrics. Ask "why is prod-sql-03 slow?" and get a real answer.',
        icon: MessageSquare,
      },
      {
        name: 'AI Advisor',
        description:
          'Prioritized recommendations across Performance, Risk, Architecture, and Security. Confidence scores so you know what to trust.',
        icon: Lightbulb,
      },
      {
        name: 'Natural Language to SQL',
        description:
          'Describe what you need in English, get executable SQL. Useful for the data analysts who shouldn\'t need to know about JOINs.',
        icon: Languages,
      },
      {
        name: 'AI Incident Investigation',
        description:
          'Multi-turn investigation that asks clarifying questions and narrows root causes. Classic and iterative modes with downloadable reports.',
        icon: FileSearch,
      },
      {
        name: 'Object Explainer',
        description:
          'Point at any table, view, or procedure. AI generates documentation with column breakdowns. The docs you never got around to writing.',
        icon: FileText,
      },
      {
        name: 'AI Analytics Hub',
        description:
          'Workload profiling, capacity forecasting, migration readiness. The analysis that usually takes a consultant two weeks.',
        icon: PieChart,
      },
      {
        name: 'AI Governance',
        description:
          'Usage dashboards, budget controls, 60+ prompt templates, multi-provider LLM config. Keep AI costs predictable.',
        icon: DollarSign,
      },
    ],
  },
  {
    id: 'govern',
    icon: Shield,
    headline: 'Govern & Secure',
    tagline: 'Security and Compliance That Updates Itself',
    subheadline:
      'Who has access to what, is the data classified correctly, are we compliant? Answers that stay current without quarterly manual audits.',
    subFeatures: [
      {
        name: 'Security Hub',
        description:
          'Login inventory, role hierarchy, permission explorer. Every SQL security question answered from one screen.',
        icon: Lock,
      },
      {
        name: 'Data Classification',
        description:
          'Column-level PII, PCI, and Confidential tagging with risk scores. Know where the sensitive data actually lives for GDPR, HIPAA, and SOC2.',
        icon: Tag,
      },
      {
        name: 'Compliance Center',
        description:
          'Encryption status, audit specs, DDL audit trails, policy-based scoring. Your compliance posture in real-time, not on a spreadsheet from last quarter.',
        icon: FileCheck,
      },
      {
        name: 'Access Control',
        description:
          'Full permissions matrix with custom roles, group management, and audit trails. See exactly who can do what.',
        icon: KeyRound,
      },
      {
        name: 'Compliance Reports',
        description:
          'Pre-built templates for SLA, GDPR, Fleet, Cost, and Security reports. PDF and CSV export for auditors who still want paper.',
        icon: FileBarChart,
      },
      {
        name: 'Notification Management',
        description:
          'Role-based subscriptions with severity routing. Critical alerts go to the DBA on-call, not the entire Slack channel.',
        icon: BellRing,
      },
    ],
  },
  {
    id: 'platform-ops',
    icon: Settings,
    headline: 'Platform Operations',
    tagline: 'The Control Plane for Everything Else',
    subheadline:
      '130+ automated handlers, schedule management, worker orchestration. The infrastructure that runs quietly so you can focus on actual problems.',
    subFeatures: [
      {
        name: 'Operations Dashboard',
        description:
          'Handler execution status, schedule adherence, error rates, system health. The ops view that tells you if the platform itself is healthy.',
        icon: Gauge,
      },
      {
        name: 'Active Alerts Center',
        description:
          'Every active alert, severity-sorted, with acknowledgment workflows. Resolve, snooze, or escalate. All tracked.',
        icon: AlertTriangle,
      },
      {
        name: 'Infrastructure Center',
        description:
          'Worker nodes, 130+ execution schedules, data collection status per server. One screen to manage the whole collection pipeline.',
        icon: Server,
      },
      {
        name: 'Configuration Center',
        description:
          'Alert rules, notification routing, retention policies, LLM provider setup. Config changes audit-logged automatically.',
        icon: Sliders,
      },
      {
        name: 'Administration',
        description:
          'Users, groups, ownership, tags, licenses. The admin panel that doesn\'t require reading a 50-page guide.',
        icon: UserCog,
      },
      {
        name: 'Problems Dashboard',
        description:
          'Fleet-wide cross-server problem detection with severity sorting and drill-down. Patterns across servers you\'d miss looking at them individually.',
        icon: TriangleAlert,
      },
      {
        name: 'Audit Log',
        description:
          'Every platform action logged: user activity, config changes, data access. Because "who changed that?" shouldn\'t take an hour to answer.',
        icon: ScrollText,
      },
    ],
  },
]

export const differentiators = [
  {
    title: 'SQL Server + PostgreSQL',
    description:
      'One platform, both engines. Same dashboards, same AI, same governance. No switching between Redgate for SQL Server and pgAdmin for Postgres.',
    highlight: 'Unified fleet management across both engines.',
  },
  {
    title: '130+ Data Collection Handlers',
    description:
      'Pre-built handlers for performance, schema, security, replication, storage. Collecting data on a schedule you control.',
    highlight: 'Covers what most teams cobble together with 30+ custom scripts.',
  },
  {
    title: 'AI Built Into the Core',
    description:
      'AI assists every workflow: query optimization, incident investigation, documentation, advisor recommendations. Not a sidebar feature.',
    highlight: 'AI that has context on your actual data. Not generic suggestions.',
  },
  {
    title: 'Connected Metadata Graph',
    description:
      'Glossary terms \u2192 database objects \u2192 business processes \u2192 data flow canvases \u2192 ownership. Change one, the connected views update.',
    highlight: 'Context propagates automatically across the platform.',
  },
  {
    title: 'Conversational Investigation',
    description:
      'Multi-turn AI investigations that ask clarifying questions, pull relevant metrics, and progressively narrow root causes.',
    highlight: 'Debug production issues by asking questions, not writing queries.',
  },
  {
    title: 'Column-Level Data Lineage',
    description:
      'Track data flow at the column level. Know where each value originates and what downstream depends on it.',
    highlight: 'Precise enough to trace a single column through your pipeline.',
  },
  {
    title: 'Real-Time via WebSocket',
    description:
      'Live data over SignalR WebSocket connections. Monitoring screens update instantly. No polling, no page refresh.',
    highlight: 'You see blocking chains form in real-time.',
  },
  {
    title: 'Role-Specific Dashboards',
    description:
      'DBAs see performance and health. Data engineers see pipelines and quality. Managers see fleet summary and costs. Same platform, different views.',
    highlight: 'Every role gets the view that matters to them.',
  },
  {
    title: 'AI Auto-Documentation',
    description:
      'AI generates object descriptions, process docs, canvas annotations, and query explanations. The documentation you never had time to write.',
    highlight: 'Your database fleet documents itself.',
  },
  {
    title: 'Production-Grade Architecture',
    description:
      '.NET 8+ clean architecture with multi-node worker scaling, leader election, and full observability. Handles fleets of 50+ servers without breaking a sweat.',
    highlight: 'Built by people who\'ve managed large database estates.',
  },
]

export const stats = [
  { label: 'Execution Handlers', value: 117, suffix: '' },
  { label: 'Investigation Tools', value: 38, suffix: '' },
  { label: 'AI Prompt Templates', value: 60, suffix: '+' },
  { label: 'Supported Engines', value: 2, suffix: '', displayText: 'SQL Server + PostgreSQL' },
  { label: 'System Roles', value: 5, suffix: '', displayText: 'Admin \u00b7 DBA \u00b7 Analyst \u00b7 Viewer \u00b7 Owner' },
  { label: 'LLM Providers', value: 3, suffix: '', displayText: 'OpenAI \u00b7 Anthropic \u00b7 Ollama' },
]

export const flywheel = [
  { step: 'Discover', description: 'Auto-discover servers, databases, and objects across your fleet', icon: Compass },
  { step: 'Monitor', description: 'Real-time health tracking with learned baselines, not static thresholds', icon: Activity },
  { step: 'Analyze', description: 'Find the slow queries, the risky changes, the growing tables', icon: TrendingUp },
  { step: 'Govern', description: 'Security, compliance, and access control that stays current automatically', icon: Shield },
  { step: 'Optimize', description: 'AI-driven recommendations that get smarter as your fleet grows', icon: Sparkles },
]

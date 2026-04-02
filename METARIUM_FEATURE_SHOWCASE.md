# Metarium Platform — Feature Showcase Specification

> **Purpose:** This document describes every feature of the Metarium platform. Use it as the single source of truth for building a modern marketing landing page that showcases what the platform offers.

---

## Brand Identity

- **Product Name:** Metarium
- **Tagline:** "The AI-Powered Database Intelligence Platform"
- **Subtitle:** "Monitor, Analyze, Govern & Optimize your SQL Server and PostgreSQL fleet — powered by AI."
- **Primary Color Palette:** Deep navy / Electric blue / Cyan accents / White text
- **Tone:** Enterprise-grade yet modern, authoritative but approachable, data-driven, intelligent

---

## Target Audience

| Role | Pain Point | Value Proposition |
|------|-----------|-------------------|
| **DBA** | Manual monitoring, incident firefighting, query tuning | Automated monitoring, AI-powered diagnostics, optimization suggestions |
| **Data Engineer** | Pipeline blindspots, schema drift, lineage gaps | Column-level lineage, impact analysis, data quality monitoring |
| **Data Analyst** | Stale data, no business context, slow queries | Freshness tracking, business glossary, NL-to-SQL |
| **Security Officer** | Audit gaps, permission sprawl, classification burden | Automated classification, audit trails, compliance dashboards |
| **Engineering Manager** | No fleet visibility, reactive operations | Role-based dashboards, risk scoring, fleet-wide analytics |

---

## Page Structure — Recommended Sections

### Section 1: Hero
- Big bold headline, animated subtitle typing effect
- Background: subtle animated particle grid or database node constellation
- CTA buttons: "Request Demo" / "See Features"
- Trust badges: "SQL Server + PostgreSQL", "130+ Automated Handlers", "AI-Powered"

### Section 2: Platform Overview (The Big Picture)
- Animated diagram showing the Metarium flywheel: Discover → Monitor → Analyze → Govern → Optimize → repeat
- Brief 1-liner per stage
- Reveal on scroll with staggered fade-in

### Section 3: Feature Pillars (6 cards)
- Card grid (2×3 or 3×2) with icons, each linking to expanded detail below
- Cards tilt/hover effect, fade-in staggered on scroll

### Section 4–9: Deep Feature Sections (one per pillar)
- Each section scrolls into view with parallax or slide-up animation
- Left/right alternating layout (text + screenshot/illustration)
- Feature bullet points with small icon badges

### Section 10: AI Intelligence Showcase
- Special full-width section with dark background
- Animated chat UI mockup showing "Ask Metarium"
- Typing indicators, streaming response effect

### Section 11: Differentiators
- Horizontal scroll or carousel of unique selling points
- Comparison table vs. traditional tools

### Section 12: Stats / Social Proof
- Counter animations (e.g., "130+ Automated Handlers", "60+ Prompt Templates")
- Logos or badges

### Section 13: CTA / Contact
- Final call-to-action section
- Demo request form or contact link

---

## Feature Pillar 1: DISCOVER & UNDERSTAND

> **Icon suggestion:** Compass / Magnifying Glass
> **Headline:** "Know Every Corner of Your Database Fleet"
> **Subheadline:** "Automatic discovery, intelligent cataloging, and business-context enrichment across your entire SQL Server and PostgreSQL estate."

### Infrastructure Explorer
Hierarchical tree view of your entire database fleet — servers, databases, schemas, tables, views, procedures — all auto-discovered and continuously updated. Switch between tree view and fleet view with sorting by name, CPU, memory, disk usage, or alert count.
- Auto-discovers all managed SQL Server and PostgreSQL instances
- Real-time status indicators per server
- Deep drill-down tabs: Metrics, Health, Problems, Storage, Configuration, Backup, Performance, Data Quality, Objects

### Object Catalog
Global searchable inventory of every database object across all servers. Find any table, view, stored procedure, function, or trigger in seconds.
- Full-text search across all objects with filters
- Rich detail pages: schema, owner, creation date, modification history
- Column listing with data types, nullability, descriptions
- Dependency graph showing upstream/downstream relationships
- Usage context showing which queries reference the object

### Server Onboarding Wizard
Step-by-step guided wizard to add new servers to the platform. Connect via SQL authentication or Windows auth, configure collection schedules, and start monitoring in minutes.

### SQL Agent Dashboard
Monitor all SQL Server Agent jobs across your fleet from a single pane. See job history, last run status, schedule configuration, and failure counts.

### Business Glossary
Create a company-wide data dictionary that bridges the gap between business terminology and database schema.
- Define business terms with rich descriptions (e.g., "Customer Lifetime Value", "Churn Rate")
- Link terms to actual database columns and tables
- Version-controlled definitions with edit history
- Searchable and browsable by category
- AI-powered Q&A about glossary terms

### Business Context Canvas
Visual drag-and-drop editor for documenting how data flows through your systems — powered by ReactFlow.
- Drag database objects (tables, views, procedures) onto the canvas
- AI auto-enrichment: generates descriptions, detects relationships, resolves dynamic SQL
- Living documentation that stays current with your schema
- Zero SQL required — accessible to business users and analysts

### Business Processes
Document and manage business workflows with links to underlying data objects.
- Create step-by-step process definitions
- Link each step to the database objects it touches
- AI process generator creates process drafts from your schema
- Hierarchical process organization

### Ownership Matrix
Know who is responsible for every database object. Assign owners, define escalation chains, and export accountability records.

### Unified Search
Find anything across the entire Metarium platform: catalog objects, glossary terms, business processes, canvases, and query contexts — all from one search bar.

---

## Feature Pillar 2: MONITOR & DETECT

> **Icon suggestion:** Activity pulse / Heartbeat
> **Headline:** "Real-Time Visibility Into Every Heartbeat"
> **Subheadline:** "Live monitoring, instant anomaly detection, and proactive alerting — so you catch problems before your users do."

### Live Monitoring Hub
Real-time production database activity dashboard showing everything happening right now.
- **Active Sessions** — Every connected session with query text, duration, CPU and memory impact
- **Blocking Detection** — Real-time blocking chain identification with victim/blocker relationships
- **Deadlock Tracking** — Instant detection with daily summaries and severity classification
- **Live Summary Bar** — At-a-glance: active sessions, blocked count, deadlocks today

### Server Health Monitoring
Continuous tracking of server vitals across your fleet.
- CPU utilization with trend lines and threshold alerts
- Memory allocation and buffer pool breakdown
- Wait statistics analysis with spinlock diagnostics
- TempDB monitoring and contention detection
- Error log analysis with pattern recognition

### Storage Analytics
Disk and file-level storage intelligence with predictive capabilities.
- Volume capacity monitoring with growth forecasting
- Database file I/O latency analytics per file
- Growth trend projection with anomaly detection
- Transaction log space management and VLF monitoring
- Log reuse wait analysis

### Replication Monitoring
Unified monitoring for all replication technologies.
- Always On Availability Groups health and lag tracking
- Log Shipping status and restore latency
- Transactional Replication subscriber status
- PostgreSQL WAL replication monitoring
- Cross-technology dashboard for mixed environments

### Anomaly Detection
AI-powered detection of unusual patterns across all monitored metrics.
- Automatic baseline learning per server
- Multi-dimensional anomaly scoring
- Configurable alert rules with severity levels
- Anomaly event feed with timeline visualization

### Alert Rules & Notifications
Flexible alerting engine with multi-channel delivery.
- Configurable thresholds per metric, per server, per database
- Alert severity classification (Info, Warning, Critical)
- Notification routing: email, webhook, and subscription-based delivery
- Alert suppression and de-duplication
- Role-based notification subscriptions

---

## Feature Pillar 3: ANALYZE & OPTIMIZE

> **Icon suggestion:** Chart trending up / Brain
> **Headline:** "Turn Data Into Decisions, Automatically"
> **Subheadline:** "Performance intelligence, query optimization, data quality scoring, risk assessment, and growth analytics — unified in one powerful analysis workbench."

### Performance Dashboard
Morning health check dashboard with key metrics at a glance.
- Slow query count trending over 7 days
- Critical query count with severity breakdown
- Missing index impact scores
- Wait type distribution analysis
- Improvement/degradation trend indicators

### Query Analyzer
Deep-dive SQL optimization workbench with integrated AI analysis.
- SQL editor with syntax highlighting (Monaco editor)
- AI-powered plan explanation: "Why is this query slow?"
- Optimization suggestions with proposed SQL alternatives
- Referenced object listing with cost contribution per object
- Risk scoring for each optimization suggestion
- Optimization history tracking multiple versions
- Natural language explanation of what the query does
- Session persistence — work survives page refresh

### Heavy Query Identification
Automatically surfaces the queries burning the most resources.
- Top N queries ranked by duration, CPU, or I/O consumption
- Execution frequency and trend analysis
- One-click drill down to Query Analyzer for optimization
- Historical trending showing if queries are getting worse

### AI Query Optimizer
AI-powered automatic query rewriting and optimization.
- Side-by-side comparison: original vs. optimized SQL
- Impact prediction with estimated improvement percentage (5–90%+ gains)
- Risk scoring to flag potentially destabilizing changes
- Approval workflow for controlled deployment
- Proposal history tracking all suggestions and their adoption

### Data Quality Dashboard
Unified data health scorecard across your entire estate.
- Composite quality score per database
- Freshness status with staleness indicators
- Profiling completeness coverage
- Data criticality rankings

### Data Freshness Monitoring
Know exactly when your data was last updated.
- Last-modified timestamps for every table
- Staleness detection with configurable freshness thresholds
- Row count delta tracking (adds/deletes per day)
- 30-day trend visualization
- Smart alerts for unexpectedly stale tables

### Data Profiling
Statistical column analysis to understand data distribution and quality.
- Column statistics: min, max, average, distinct counts
- Null rate tracking with color-coded severity
- Sample size configuration for cost control on massive tables
- Priority-based execution for high-value tables
- Profiling scope definitions

### Schema Compare & Drift Detection
Automated schema drift detection between databases.
- Auto-detect DDL differences (column additions, drops, type changes)
- Drift severity classification (Critical → Minor)
- Schema binding tracking for procedure/view impact
- Comparison history over time
- Activate/deactivate comparison policies on demand

### Growth & Statistics Analytics
Table growth trends, index health, and popularity metrics.
- Table size trending with growth forecasting
- Index health scoring and fragmentation analysis
- Object popularity ranking by query frequency
- Statistics age monitoring with refresh recommendations

### Risk & Change Management
Enterprise risk scorecard with composite risk calculation.
- Schema change severity scoring
- Dead object presence detection (tech debt indicator)
- Impact analysis integration
- Anomaly correlation
- Risk score 0–100 where 70+ = critical intervention needed

### Dead Object Analysis
Identify and clean up tech debt cluttering your schema.
- Dead tables not queried in 6+ months
- Unused indexes consuming storage without benefit
- Dead columns with no constraints or references
- Dependency-aware safe-to-delete detection
- Bulk cleanup operations

### ETL & Pipeline Monitoring
Track data pipeline health across all integration technologies.
- SSIS package execution monitoring
- CDC (Change Data Capture) status tracking
- Change Tracking configuration monitoring
- Linked Server health and connectivity
- Service Broker queue monitoring

### Maintenance Intelligence
Proactive maintenance tracking and recommendations.
- DBCC check history and scheduling
- Statistics age monitoring with auto-refresh recommendations
- Maintenance plan execution tracking
- Corruption detection and alerting

---

## Feature Pillar 4: AI INTELLIGENCE

> **Icon suggestion:** Sparkle / Neural network
> **Headline:** "Your Database Team's AI Co-Pilot"
> **Subheadline:** "From natural language queries to autonomous incident investigation — AI that understands your databases as well as you do."
> **Special treatment:** This section deserves a dark, premium visual treatment with animated elements.

### Ask Metarium — AI Chat
ChatGPT-style conversational interface for your database environment.
- Ask natural language questions about your data architecture, query performance, and schema
- Context-scoped conversations: ask within a specific Server, Database, or Business Canvas context
- Source attribution: see exactly where the AI found its answers in your data
- Auto-generated follow-up suggestions for deeper exploration
- Transparent AI usage: model name, token consumption, and cost tracking
- Click-through object exploration from AI responses

### AI Advisor
Intelligent recommendation engine that continuously analyzes your environment.
- Recommendations organized by impact: Performance, Risk, Architecture, Security
- Confidence scoring with estimated improvement percentage
- Risk assessment classifying each change (Very Low → Very High)
- Multi-stage workflow: New → Acknowledged → Resolved
- Filters by recommendation type and adoption status

### Natural Language to SQL (NL-to-SQL)
Convert business questions to SQL queries automatically. Ask "Show me all customers who haven't ordered in 90 days" and get executable SQL — no SQL expertise required.

### AI-Powered Incident Investigation
Two investigation modes for database incidents:
- **Classic Mode** — Provide time window + description; AI analyzes error logs, wait stats, performance metrics, and generates comprehensive incident report
- **Iterative Mode** — Multi-turn conversational investigation where AI asks clarifying questions and progressively refines diagnosis
- Multi-server incident support with cross-database context
- Downloadable investigation reports for compliance/documentation
- Investigation status and completion tracking

### Object Explainer
Select any database object and get instant AI-generated documentation.
- Purpose explanation: what does this object do?
- Column-by-column breakdown explaining each field's role
- Related objects with dependency and lineage context
- Confidence badges showing AI certainty level
- Glossary integration connecting technical objects to business terms

### AI Analytics Hub
Centralized AI-powered analytics workspace.
- Workload profiling with AI pattern recognition
- Capacity forecasting with trend extrapolation
- Migration readiness assessment
- Incident investigation history and insights
- AI-generated performance reports

### AI Governance
Full transparency and control over AI usage across the platform.
- Usage dashboards: requests, tokens, cost per provider
- Budget controls with spending limits and alerts
- Pricing configuration per LLM provider
- Prompt template management (60+ templates)
- Model configuration (OpenAI, Anthropic, Local Phi-3)

---

## Feature Pillar 5: GOVERN & SECURE

> **Icon suggestion:** Shield / Lock
> **Headline:** "Enterprise Governance Without the Red Tape"
> **Subheadline:** "Security auditing, data classification, compliance reporting, and access control — automated and always current."

### Security Hub
Comprehensive SQL security management dashboard.
- Login inventory with creation dates, authentication types, and descriptions
- Role hierarchy viewer: who belongs to what role
- Permission explorer: "who can do what?" answered instantly
- Risk indicators for overly-permissive accounts and unused logins

### Data Classification
Column-level sensitive data tracking and governance.
- Classify columns as PII, PCI, Confidential, Internal, or Public
- Classification dashboard showing data sensitivity distribution
- Risk scoring weighted toward PII/PCI for compliance priorities
- Classified column browser with full lineage paths
- Supports GDPR, HIPAA, SOC2 compliance frameworks

### Compliance Center
Single pane for all compliance metrics and reporting.
- Encryption status monitoring (TDE, Always Encrypted)
- Audit specification management (server and database level)
- DDL audit trail tracking schema modifications
- Policy-based compliance scoring with trend lines
- Pre-built compliance report templates

### Access Control Dashboard
Platform-level permission management.
- Permissions matrix: users × features × access levels
- Role-based access control (RBAC) with custom roles
- Group management with inheritance
- Audit trail of all permission changes

### Compliance Reports
Pre-built and customizable reports for various frameworks.
- **SLA Reports** — Uptime, availability, performance SLA tracking
- **GDPR Reports** — Data classification coverage, PII inventory, audit logs
- **Fleet Reports** — Server inventory, patch levels, configuration compliance
- **Cost Reports** — Resource utilization, AI usage costs, optimization savings
- **Security Reports** — Permission audits, login activity, risk assessments
- Export to PDF/CSV for external distribution

### Notification & Subscription Management
Granular control over who gets notified about what.
- Role-based default subscriptions
- Per-user notification preferences
- Multi-channel delivery (email, webhook, in-app)
- Notification routing rules based on severity and type

---

## Feature Pillar 6: PLATFORM & OPERATIONS

> **Icon suggestion:** Settings gear / Command center
> **Headline:** "Mission Control for Your Data Platform"
> **Subheadline:** "Worker orchestration, schedule management, infrastructure monitoring, and configuration — all centralized and self-managing."

### Operations Dashboard
Real-time operational status of the entire Metarium platform.
- Handler execution status and success rates
- Schedule adherence and execution history
- Error rates and failure classification
- System health metrics

### Active Alerts Center
Centralized alert management console.
- All active alerts across the fleet in one view
- Severity-based prioritization
- Alert acknowledgment and resolution workflow
- Historical alert analysis

### Infrastructure Center
Manage the Metarium platform infrastructure itself.
- **Worker Nodes** — View all worker nodes, their status, health, and workload distribution
- **Execution Schedules** — 130+ automated handlers with configurable schedules
- **Data Collection Status** — Monitor what data is being collected and when
- **Handler Management** — Enable/disable specific collection handlers per server

### Configuration Center
Centralized configuration for all platform behaviors.
- **Alert Rules** — Define thresholds, conditions, and severity for every metric
- **Notification Rules** — Configure routing, channels, and escalation
- **Retention Policies** — Set data retention periods per data type
- **LLM Configuration** — Choose AI providers, set budgets, configure prompts

### Administration
User and platform administration.
- User management with role assignment
- Group management with hierarchical permissions
- Ownership assignment for database objects
- Tag management for organizational grouping
- License management and feature activation

### Problems Dashboard
Fleet-wide cross-server problem detection and triage.
- Real-time problem detection across all managed servers
- Severity-sorted display (Critical first)
- Expandable server sections showing per-server issues
- Total critical/warning counts across the fleet

### Audit Log
Complete audit trail of all platform actions.
- User activity logging
- Configuration change tracking
- Data access auditing
- Exportable audit records for compliance

---

## Unique Differentiators — Key Selling Points

### 1. Multi-Engine Support
Single platform for both SQL Server and PostgreSQL. Unified governance, monitoring, and analytics without tool sprawl. One platform, two engines, zero compromises.

### 2. 130+ Automated Collection Handlers
The platform ships with over 130 pre-built data collection handlers covering performance metrics, schema metadata, security configurations, replication status, storage analytics, and more. No custom scripting required.

### 3. AI-First Architecture
AI is not an add-on — it's woven into every feature. From query optimization to incident investigation, from object documentation to data flow mapping, AI amplifies every capability.

### 4. Connected Knowledge Graph
All metadata is interconnected: glossary terms link to database objects, which connect to business processes, which map through canvases, which tie to ownership. Changes flow through every perspective automatically.

### 5. Iterative AI Investigation
Unlike "run report, get output" tools, Metarium's AI conducts multi-turn conversational investigations — asking clarifying questions, refining hypotheses, and progressively narrowing root causes.

### 6. Column-Level Lineage
Track data flow at the individual column level — not just table-to-table. Know exactly where each column's data comes from and what downstream reports depend on it.

### 7. Real-Time WebSocket Communication
Live data via SignalR WebSocket connections. No polling, no refresh — see changes as they happen.

### 8. Role-Based Dashboards
Every role sees a tailored experience: DBAs see performance and health, Data Engineers see pipelines and lineage, Security Officers see compliance and access control, Managers see fleet overview and risk.

### 9. Self-Documenting with AI
The platform generates its own documentation. AI writes object descriptions, creates process documentation, enriches business canvases, and explains query behavior — all automatically.

### 10. Enterprise-Grade Architecture
Built on .NET 8+ with clean architecture. Multi-node worker scalability with leader election, partitioned scheduling, deterministic execution with idempotency, and comprehensive metrics/observability.

---

## Stats & Numbers for Marketing

| Metric | Value |
|--------|-------|
| Automated Collection Handlers | 130+ |
| AI Prompt Templates | 60+ |
| Investigation Tools | 30+ |
| Supported Engines | SQL Server + PostgreSQL |
| Role-Based Dashboards | 6 roles |
| Real-Time Communication | WebSocket (SignalR) |
| LLM Provider Support | OpenAI, Anthropic, Local (Phi-3) |
| Data Collection Dimensions | Performance, Schema, Security, Storage, Replication, ETL |
| Query Optimization Modes | AI-Assisted + Manual |
| Incident Investigation Modes | Classic + Iterative (Conversational) |

---

## Animation & Interaction Suggestions

### Global
- **Scroll-triggered reveal** — Each section fades/slides in as it enters viewport
- **Staggered children** — Feature cards within a section animate in sequence (50ms delay each)
- **Parallax backgrounds** — Subtle depth effect on section backgrounds
- **Smooth scrolling** — Native CSS `scroll-behavior: smooth` with navigation anchors
- **Reduced motion respect** — Honor `prefers-reduced-motion` for accessibility

### Hero Section
- **Headline typewriter effect** — Letters typing in one by one
- **Floating particles** — Database node constellation with connecting lines
- **CTA button pulse** — Gentle glow animation on primary button
- **Scroll indicator** — Animated chevron bouncing at bottom

### Feature Pillar Cards
- **3D tilt on hover** — Subtle perspective transform following cursor
- **Icon animation** — Icons animate (spin, pulse, bounce) when card enters viewport
- **Gradient border reveal** — Border gradient sweeps around card on hover

### AI Intelligence Section
- **Chat mockup** — Animated typing indicator → streaming text response
- **Code syntax highlighting** — SQL query appearing character by character
- **Neural network background** — Animated SVG nodes with flowing connections

### Stats Section
- **Counter animation** — Numbers counting up from 0 when section scrolls into view
- **Progress rings** — Circular progress bars filling up

### Comparison / Differentiators
- **Before/After slider** — Drag slider showing "Without Metarium" vs "With Metarium"
- **Horizontal scroll carousel** — Swipeable on mobile, auto-advance on desktop

---

## Technology Recommendation for Marketing Page

- **Framework:** React + TypeScript (consistent with existing codebase)
- **Styling:** TailwindCSS 4 (consistent with existing codebase)
- **Animations:** Framer Motion (best React animation library for scroll-triggered effects)
- **Scroll Detection:** Intersection Observer API (via Framer Motion's `whileInView`)
- **Icons:** Lucide React (consistent with existing codebase)
- **Code Highlighting:** Shiki or Prism (for SQL code display)
- **Charts (if needed):** Recharts (consistent with existing codebase)
- **Deployment:** Static page, can be built with Vite

---

*End of Feature Showcase Specification*

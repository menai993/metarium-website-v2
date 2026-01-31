# Metarium - Enterprise Database Intelligence Platform

A modern, professional landing page for Metarium, an enterprise database intelligence platform built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean B2B SaaS style with blue and white color scheme
- **Comprehensive Sections**:
  - Hero section with clear value proposition
  - 8 key features (SQL Server monitoring, metadata catalog, query analysis, AI optimization, metrics, scheduling, cloud support, security)
  - Download section (Windows, Linux, Docker)
  - Pricing with 3 tiers (Starter, Professional, Enterprise)
  - Registration/sign-up form
  - Professional footer
- **Fully Responsive**: Mobile-first design that works on all devices
- **Optimized for Vercel**: Ready for instant deployment

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Deployment**: Vercel-ready configuration

## Getting Started

### Development

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Create a production build:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Deployment to Vercel

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

Alternatively, use the Vercel CLI:
```bash
npm install -g vercel
vercel
```

The `vercel.json` configuration file is already included for optimal deployment settings.

## Project Structure

```
metarium-website/
├── app/
│   ├── globals.css       # Global styles with Tailwind imports
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Main landing page
├── public/               # Static assets (auto-created)
├── .eslintrc.json        # ESLint configuration
├── .gitignore           # Git ignore rules
├── eslint.config.mjs    # ESLint flat config
├── next.config.js       # Next.js configuration
├── package.json         # Dependencies and scripts
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vercel.json          # Vercel deployment configuration
```

## Features Highlights

### SQL Server Monitoring
Real-time performance monitoring with intelligent alerts

### Metadata & Data Catalog
Comprehensive data governance and lineage tracking

### Query & Execution Plan Analysis
Deep performance analysis with visual execution plans

### AI-Assisted Optimization
Machine learning-powered optimization recommendations

### Server/Database Metrics
Customizable dashboards with KPIs and trend analysis

### Node-Based Scheduling
Visual workflow designer for database operations

### On-Prem & Cloud Support
Support for Azure SQL, AWS RDS, and hybrid environments

### Security-First Design
Enterprise-grade security with RBAC and encryption

## License Pricing

- **Starter**: $499/month - Up to 5 SQL Server instances
- **Professional**: $1,499/month - Up to 25 instances with full features
- **Enterprise**: Custom pricing - Unlimited instances with premium support

All plans include a 30-day free trial.

## Contributing

This is a product landing page. For issues or suggestions, please contact the development team.

## Support

For questions or support, please visit our website or contact sales.

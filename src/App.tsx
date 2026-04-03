import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import Footer from './components/Footer'
import { featurePillars } from './data/features'

// Lazy load below-fold sections
const FounderStory = lazy(() => import('./components/sections/FounderStory'))
const PlatformOverview = lazy(() => import('./components/sections/PlatformOverview'))
const FeaturePillars = lazy(() => import('./components/sections/FeaturePillars'))
const FeatureDetail = lazy(() => import('./components/sections/FeatureDetail'))
const AIShowcase = lazy(() => import('./components/sections/AIShowcase'))
const Architecture = lazy(() => import('./components/sections/Architecture'))
const Roadmap = lazy(() => import('./components/sections/Roadmap'))
const Differentiators = lazy(() => import('./components/sections/Differentiators'))
const Stats = lazy(() => import('./components/sections/Stats'))
const LookingFor = lazy(() => import('./components/sections/LookingFor'))
const FAQ = lazy(() => import('./components/sections/FAQ'))
const CTA = lazy(() => import('./components/sections/CTA'))

function SectionFallback() {
  return <div className="min-h-[200px]" />
}

export default function App() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <Navbar />
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <FounderStory />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <PlatformOverview />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <FeaturePillars />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        {featurePillars.map((pillar, i) => (
          <FeatureDetail key={pillar.id} pillar={pillar} index={i} />
        ))}
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <AIShowcase />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Architecture />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Roadmap />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Differentiators />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Stats />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <LookingFor />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <FAQ />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <CTA />
      </Suspense>
      <Footer />
    </div>
  )
}

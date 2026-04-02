import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useActiveSection } from '../hooks/useActiveSection'

const navItems = [
  { label: 'Overview', href: 'overview' },
  { label: 'Features', href: 'features' },
  { label: 'AI', href: 'ai-showcase' },
  { label: 'Why Metarium', href: 'differentiators' },
  { label: 'Contact', href: 'cta' },
]

const sectionIds = [
  'hero',
  'overview',
  'features',
  'discover',
  'monitor',
  'analyze',
  'ai-intelligence',
  'govern',
  'platform-ops',
  'ai-showcase',
  'differentiators',
  'stats',
  'cta',
]

function mapSectionToNav(sectionId: string): string {
  if (sectionId === 'hero') return 'overview'
  if (['discover', 'monitor', 'analyze', 'ai-intelligence', 'govern', 'platform-ops'].includes(sectionId))
    return 'features'
  if (sectionId === 'stats') return 'differentiators'
  return sectionId
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useActiveSection(sectionIds)
  const activeNav = mapSectionToNav(activeSection)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (href: string) => {
    setIsOpen(false)
    const el = document.getElementById(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/80 backdrop-blur-xl border-b border-surface-border/50 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              handleClick('hero')
            }}
            className="flex items-center gap-2 group"
          >
            <img src="/metarium_full_logo.png" alt="Metarium" className="h-7 brightness-0 invert" />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors relative ${
                  activeNav === item.href
                    ? 'text-white'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                {item.label}
                {activeNav === item.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-white/10 rounded-md"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => handleClick('cta')}
              className="px-5 py-2 rounded-md bg-accent hover:bg-[#1D4ED8] text-white text-sm font-medium transition-colors"
            >
              Request Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-[#94A3B8] hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" strokeWidth={1.5} /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-surface/95 backdrop-blur-xl border-b border-surface-border/50 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleClick(item.href)}
                  className={`block w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    activeNav === item.href
                      ? 'text-white bg-white/10'
                      : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => handleClick('cta')}
                  className="w-full px-5 py-3 rounded-md bg-accent hover:bg-[#1D4ED8] text-white text-sm font-medium"
                >
                  Request Demo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { differentiators } from '../../data/features'
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Differentiators() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir === 'left' ? -340 : 340, behavior: 'smooth' })
    setTimeout(checkScroll, 400)
  }

  return (
    <section id="differentiators" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-navy-light/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Why Metarium?</span>
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            Not another monitoring dashboard. Here's what's different.
          </p>
        </motion.div>

        {/* Desktop grid */}
        <motion.div
          className="hidden lg:grid grid-cols-2 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {differentiators.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              className="glass-card p-6 hover:bg-[#253348] transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent/20 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-2">
                    {item.description}
                  </p>
                  <p className="text-sm text-cyan-accent font-medium">
                    {item.highlight}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile/Tablet carousel */}
        <div className="lg:hidden relative">
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {differentiators.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-card p-6 snap-start shrink-0 w-[300px] sm:w-[340px]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-accent" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-sm text-[#94A3B8] leading-relaxed mb-2">
                  {item.description}
                </p>
                <p className="text-sm text-cyan-accent font-medium">
                  {item.highlight}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Carousel controls */}
          <div className="flex justify-center gap-3 mt-4">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="w-10 h-10 rounded-md border border-surface-border flex items-center justify-center text-white disabled:opacity-30 hover:bg-surface-card transition-colors"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="w-10 h-10 rounded-md border border-surface-border flex items-center justify-center text-white disabled:opacity-30 hover:bg-surface-card transition-colors"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

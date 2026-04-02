import { motion } from 'framer-motion'
import { Monitor } from 'lucide-react'

interface Props {
  id: string
  src: string
  alt: string
  className?: string
  perspective?: boolean
}

export default function ScreenshotFrame({
  id,
  src,
  alt,
  className = '',
  perspective = false,
}: Props) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, scale: 0.95, y: perspective ? 60 : 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`relative group ${className}`}
      style={
        perspective
          ? { perspective: '1200px' }
          : undefined
      }
    >
      {/* Glow underneath */}
      <div className="absolute -inset-4 bg-electric/[0.07] rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div
        className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm shadow-2xl shadow-black/30 overflow-hidden"
        style={
          perspective
            ? { transform: 'rotateX(2deg) rotateY(-1deg)', transformStyle: 'preserve-3d' }
            : undefined
        }
      >
        {/* Browser chrome bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.04] border-b border-white/[0.06]">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-white/10" />
            <div className="w-3 h-3 rounded-full bg-white/10" />
            <div className="w-3 h-3 rounded-full bg-white/10" />
          </div>
          <div className="flex-1 mx-4">
            <div className="h-5 rounded-md bg-white/[0.04] max-w-xs mx-auto" />
          </div>
        </div>

        {/* Screenshot content area */}
        <div className="relative aspect-[3/2] bg-navy-lighter/50">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover object-top"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none'
              const parent = (e.target as HTMLImageElement).parentElement
              if (parent) {
                const placeholder = parent.querySelector('[data-placeholder]')
                if (placeholder) (placeholder as HTMLElement).style.display = 'flex'
              }
            }}
          />
          {/* Placeholder shown when image fails to load */}
          <div
            data-placeholder
            className="absolute inset-0 flex-col items-center justify-center gap-3 text-slate-600"
            style={{ display: 'flex' }}
          >
            <Monitor className="w-10 h-10" />
            <span className="text-sm font-medium">Screenshot coming soon</span>
            <span className="text-xs text-slate-700">{src}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

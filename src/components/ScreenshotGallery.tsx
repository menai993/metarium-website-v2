import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Monitor } from 'lucide-react'

interface GalleryImage {
  src: string
  alt: string
  label: string
}

interface Props {
  id: string
  images: GalleryImage[]
  className?: string
}

export default function ScreenshotGallery({ id, images, className = '' }: Props) {
  const [active, setActive] = useState(0)

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`relative group ${className}`}
    >
      {/* Glow underneath */}
      <div className="absolute -inset-4 bg-electric/[0.05] rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm shadow-2xl shadow-black/30 overflow-hidden">
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

        {/* Main preview area */}
        <div className="relative aspect-[3/2] bg-navy-lighter/50 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <img
                src={images[active].src}
                alt={images[active].alt}
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
              <div
                data-placeholder
                className="absolute inset-0 flex-col items-center justify-center gap-3 text-slate-600"
                style={{ display: 'flex' }}
              >
                <Monitor className="w-10 h-10" />
                <span className="text-sm font-medium">Screenshot coming soon</span>
                <span className="text-xs text-slate-700">{images[active].src}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Thumbnail strip */}
        <div className="flex gap-2 p-3 bg-white/[0.02] border-t border-white/[0.06] overflow-x-auto">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                active === i
                  ? 'border-electric shadow-lg shadow-electric/20'
                  : 'border-white/10 hover:border-white/20 opacity-60 hover:opacity-100'
              }`}
            >
              <div className="relative w-24 h-16 bg-navy-lighter/80">
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none'
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-[10px] text-slate-500 font-medium px-1 text-center">
                  {img.label}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

import { useState, useEffect, useMemo } from 'react'

export function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState(sectionIds[0] || '')

  const stableIds = useMemo(() => sectionIds, [sectionIds.join(',')])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    stableIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { rootMargin: '-30% 0px -70% 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [stableIds])

  return active
}

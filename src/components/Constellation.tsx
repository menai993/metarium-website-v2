import { useRef, useEffect } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  brightness: number
}

const NODE_COUNT = 60
const CONNECTION_DISTANCE = 160
const NODE_SPEED = 0.3
const NODE_MIN_RADIUS = 1.5
const NODE_MAX_RADIUS = 3.5
const LINE_OPACITY = 0.25
const NODE_COLOR = { r: 59, g: 130, b: 246 } // electric blue
const CYAN_COLOR = { r: 6, g: 182, b: 212 } // cyan accent

export default function Constellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const stateRef = useRef<{
    nodes: Node[]
    w: number
    h: number
    anim: number
    visible: boolean
  }>({ nodes: [], w: 0, h: 0, anim: 0, visible: true })

  useEffect(() => {
    const cvs = canvasRef.current
    if (!cvs) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = cvs.getContext('2d')
    if (!ctx) return

    const s = stateRef.current

    function initNodes(w: number, h: number) {
      s.nodes = []
      for (let i = 0; i < NODE_COUNT; i++) {
        s.nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * NODE_SPEED * 2,
          vy: (Math.random() - 0.5) * NODE_SPEED * 2,
          radius: NODE_MIN_RADIUS + Math.random() * (NODE_MAX_RADIUS - NODE_MIN_RADIUS),
          brightness: 0.4 + Math.random() * 0.6,
        })
      }
    }

    function handleResize() {
      if (!cvs) return
      const parent = cvs.parentElement
      if (!parent) return
      const w = parent.clientWidth
      const h = parent.clientHeight
      if (w === 0 || h === 0) return

      const dpr = window.devicePixelRatio || 1
      cvs.width = w * dpr
      cvs.height = h * dpr
      cvs.style.width = w + 'px'
      cvs.style.height = h + 'px'
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)

      const needsInit = s.nodes.length === 0
      s.w = w
      s.h = h

      if (needsInit) {
        initNodes(w, h)
      } else {
        for (const node of s.nodes) {
          node.x = Math.min(node.x, w)
          node.y = Math.min(node.y, h)
        }
      }
    }

    function draw() {
      const { nodes, w, h } = s
      if (w === 0 || h === 0) return
      const c2 = ctx!
      c2.clearRect(0, 0, w, h)

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECTION_DISTANCE) {
            const opacity = (1 - dist / CONNECTION_DISTANCE) * LINE_OPACITY
            const blend = (i + j) % 5 === 0
            const c = blend ? CYAN_COLOR : NODE_COLOR
            c2.strokeStyle = `rgba(${c.r},${c.g},${c.b},${opacity})`
            c2.lineWidth = 0.5
            c2.beginPath()
            c2.moveTo(nodes[i].x, nodes[i].y)
            c2.lineTo(nodes[j].x, nodes[j].y)
            c2.stroke()
          }
        }
      }

      for (const node of nodes) {
        const isCyan = Math.round(node.brightness * 10) % 4 === 0
        const c = isCyan ? CYAN_COLOR : NODE_COLOR

        c2.beginPath()
        c2.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2)
        const glow = c2.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius * 4
        )
        glow.addColorStop(0, `rgba(${c.r},${c.g},${c.b},${0.18 * node.brightness})`)
        glow.addColorStop(1, `rgba(${c.r},${c.g},${c.b},0)`)
        c2.fillStyle = glow
        c2.fill()

        c2.beginPath()
        c2.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        c2.fillStyle = `rgba(${c.r},${c.g},${c.b},${0.85 * node.brightness})`
        c2.fill()
      }
    }

    function update() {
      const { nodes, w, h } = s
      for (const node of nodes) {
        node.x += node.vx
        node.y += node.vy
        if (node.x < 0 || node.x > w) {
          node.vx *= -1
          node.x = Math.max(0, Math.min(w, node.x))
        }
        if (node.y < 0 || node.y > h) {
          node.vy *= -1
          node.y = Math.max(0, Math.min(h, node.y))
        }
      }
    }

    // Initial size
    handleResize()

    // Observe parent for size changes
    const ro = new ResizeObserver(handleResize)
    if (cvs.parentElement) ro.observe(cvs.parentElement)

    // Visibility
    const io = new IntersectionObserver(
      ([e]) => { s.visible = e.isIntersecting },
      { threshold: 0 }
    )
    io.observe(cvs)

    if (prefersReduced) {
      draw()
      return () => { ro.disconnect(); io.disconnect() }
    }

    // Animation loop
    function loop() {
      if (s.visible && s.w > 0) {
        update()
        draw()
      }
      s.anim = requestAnimationFrame(loop)
    }
    s.anim = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(s.anim)
      ro.disconnect()
      io.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      className="pointer-events-none"
      aria-hidden="true"
    />
  )
}

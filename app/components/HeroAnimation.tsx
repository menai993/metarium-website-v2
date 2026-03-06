'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ─── Column layout matching the Metarium logo ───
   The logo has vertical panels arranged symmetrically:
   3 left panels (dark navy), a center turquoise element, 3 right panels.
   We model each panel with its own skew/rotation so the assembled shape
   mirrors the "M" book-spine motif in the logo image.
─────────────────────────────────────────────────── */

const BRAND = {
  navy: '#1f2f57',
  navyLight: '#2a3d6e',
  turquoise: '#00bcd4',
  turquoiseGlow: 'rgba(0, 188, 212, 0.35)',
  bg: '#f0f4fc',
};

interface ColumnDef {
  id: string;
  side: 'left' | 'center' | 'right';
  height: string;       // tailwind h- or custom
  skewY: number;        // final assembled skew
  shade: string;        // fill colour
  offsetX: number;      // px offset from center when assembled
}

const COLUMNS: ColumnDef[] = [
  { id: 'l3', side: 'left',   height: '120px', skewY: 8,   shade: BRAND.navy,      offsetX: -72 },
  { id: 'l2', side: 'left',   height: '160px', skewY: -10, shade: BRAND.navyLight,  offsetX: -48 },
  { id: 'l1', side: 'left',   height: '180px', skewY: 8,   shade: BRAND.navy,       offsetX: -24 },
  { id: 'c',  side: 'center', height: '80px',  skewY: -6,  shade: BRAND.turquoise,  offsetX: 0   },
  { id: 'r1', side: 'right',  height: '180px', skewY: -8,  shade: BRAND.navy,       offsetX: 24  },
  { id: 'r2', side: 'right',  height: '160px', skewY: 10,  shade: BRAND.navyLight,  offsetX: 48  },
  { id: 'r3', side: 'right',  height: '120px', skewY: -8,  shade: BRAND.navy,       offsetX: 72  },
];

const FEATURES = [
  { label: 'Data Monitoring',    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
  { label: 'Data Quality Rules', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { label: 'AI Classification',  icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
  { label: 'Data Governance',    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
  { label: 'Data Observability', icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' },
];

export default function HeroAnimation() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const columnsRef = useRef<(HTMLDivElement | null)[]>([]);
  const centerRef  = useRef<HTMLDivElement>(null);
  const cardsRef   = useRef<(HTMLDivElement | null)[]>([]);
  const finalRef   = useRef<HTMLDivElement>(null);
  const logoRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      /* ── Master timeline pinned to the wrapper ── */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: 'top top',
          end: '+=4000',       // total scroll distance for the entire animation
          pin: true,
          scrub: 1,            // smooth scrub
          anticipatePin: 1,
        },
      });

      /* ── Step 1: Columns Appear ──
         Left panels slide in from the left, right panels from the right.
         Center element stays hidden for now. */
      const leftCols = columnsRef.current.filter((_, i) => COLUMNS[i].side === 'left');
      const rightCols = columnsRef.current.filter((_, i) => COLUMNS[i].side === 'right');
      const centerCol = centerRef.current;

      // Initial state – columns are far off-screen
      gsap.set(leftCols, { x: -600, opacity: 0, skewY: 0 });
      gsap.set(rightCols, { x: 600, opacity: 0, skewY: 0 });
      gsap.set(centerCol, { opacity: 0, scale: 0.3 });
      gsap.set(cardsRef.current, { opacity: 0, y: 60, scale: 0.9 });
      gsap.set(finalRef.current, { opacity: 0, y: 40 });
      gsap.set(logoRef.current, { opacity: 0, scale: 0.8 });

      // Stagger slide-in
      tl.to(leftCols, {
        x: 0,
        opacity: 1,
        stagger: 0.15,
        ease: 'power2.out',
        duration: 1,
      }, 0);

      tl.to(rightCols, {
        x: 0,
        opacity: 1,
        stagger: 0.15,
        ease: 'power2.out',
        duration: 1,
      }, 0);

      /* ── Step 2: Columns Align – skew into logo shape ── */
      COLUMNS.forEach((col, i) => {
        const el = col.side === 'center' ? centerCol : columnsRef.current[i];
        if (!el || col.side === 'center') return;
        tl.to(el, {
          skewY: col.skewY,
          x: col.offsetX,
          ease: 'power2.inOut',
          duration: 1,
        }, 1);
      });

      /* ── Step 3: Center Intelligence Activation ── */
      tl.to(centerCol, {
        opacity: 1,
        scale: 1,
        ease: 'power3.out',
        duration: 0.8,
      }, 1.6);

      // Subtle pulse / glow
      tl.to(centerCol, {
        boxShadow: `0 0 40px 12px ${BRAND.turquoiseGlow}`,
        scale: 1.08,
        ease: 'power1.inOut',
        duration: 0.6,
        yoyo: true,
        repeat: 1,
      }, 2.2);

      /* ── Step 4: Platform Expansion – columns → feature cards ──
         Columns fade out, feature cards fade in from below. */
      tl.to([...leftCols, centerCol, ...rightCols], {
        opacity: 0,
        y: -30,
        scale: 0.85,
        ease: 'power2.in',
        duration: 0.8,
        stagger: 0.05,
      }, 3.4);

      tl.to(cardsRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.12,
        ease: 'power2.out',
        duration: 1,
      }, 4);

      /* ── Step 5: Final Section – zoom-out, show headline + CTAs ── */
      tl.to(cardsRef.current, {
        scale: 0.92,
        y: -20,
        opacity: 0.6,
        ease: 'power2.in',
        duration: 0.6,
      }, 5.5);

      tl.to(logoRef.current, {
        opacity: 1,
        scale: 1,
        ease: 'power2.out',
        duration: 0.8,
      }, 5.8);

      tl.to(finalRef.current, {
        opacity: 1,
        y: 0,
        ease: 'power2.out',
        duration: 0.8,
      }, 6);
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="hero-animation relative w-full min-h-screen overflow-hidden"
      style={{ background: `linear-gradient(175deg, ${BRAND.bg} 0%, #ffffff 100%)` }}
    >
      {/* ── Parallax background grid ── */}
      <div className="hero-bg-grid absolute inset-0 pointer-events-none" aria-hidden="true" />

      {/* ── Animated Columns (logo panels) ── */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-end gap-[6px]">
          {COLUMNS.map((col, i) => {
            if (col.side === 'center') {
              return (
                <div
                  key={col.id}
                  ref={centerRef}
                  className="rounded-sm"
                  style={{
                    width: 28,
                    height: col.height,
                    background: col.shade,
                    transformOrigin: 'bottom center',
                  }}
                />
              );
            }
            return (
              <div
                key={col.id}
                ref={(el) => { columnsRef.current[i] = el; }}
                className="rounded-sm"
                style={{
                  width: 28,
                  height: col.height,
                  background: col.shade,
                  transformOrigin: 'bottom center',
                }}
              />
            );
          })}
        </div>
      </div>

      {/* ── Feature Cards (appear in Step 4) ── */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl w-full">
          {FEATURES.map((feat, i) => (
            <div
              key={feat.label}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="feature-card bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-lg flex items-center justify-center mb-4"
                   style={{ background: BRAND.bg }}>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={BRAND.navy} strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={feat.icon} />
                </svg>
              </div>
              <h3 className="text-sm font-bold" style={{ color: BRAND.navy }}>{feat.label}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* ── Final Section (Step 5) ── */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        {/* Assembled logo mark */}
        <div ref={logoRef} className="mb-8 flex items-end gap-[4px]" aria-label="Metarium logo">
          {COLUMNS.map((col) => (
            <div
              key={`logo-${col.id}`}
              className="rounded-sm"
              style={{
                width: 16,
                height: `calc(${col.height} * 0.45)`,
                background: col.shade,
                transform: `skewY(${col.skewY}deg)`,
                transformOrigin: 'bottom center',
              }}
            />
          ))}
        </div>

        <div ref={finalRef} className="text-center pointer-events-auto px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight"
              style={{ color: BRAND.navy }}>
            Metarium — AI-Driven Data Quality
            <br className="hidden sm:block" />
            <span className="block sm:inline"> &amp; Monitoring Platform</span>
          </h1>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href="#demo"
              className="px-8 py-4 rounded-lg text-lg font-semibold text-white shadow-lg transition hover:opacity-90"
              style={{ background: BRAND.navy }}
            >
              Request Demo
            </a>
            <a
              href="#product"
              className="px-8 py-4 rounded-lg text-lg font-semibold border-2 transition hover:bg-gray-50"
              style={{ borderColor: BRAND.navy, color: BRAND.navy }}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

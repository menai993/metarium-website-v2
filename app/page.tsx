'use client';

import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Image from 'next/image';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function RegistrationForm() {
    const [state, handleSubmit] = useForm('xgolvvao');

    if (state.succeeded) {
      return (
        <div className="bg-green-50 p-8 rounded-xl border border-green-200">
          <h3 className="text-2xl font-bold text-green-900 mb-3">Thanks for reaching out!</h3>
          <p className="text-green-800">We&apos;ll be in touch soon to discuss partnership opportunities and answer any questions you have.</p>
        </div>
      );
    }

    return (
      <form onSubmit={handleSubmit} className="bg-[#f0f4fc] p-8 rounded-xl">
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1f2f57] focus:border-transparent"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Work Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1f2f57] focus:border-transparent"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1f2f57] focus:border-transparent"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1f2f57] focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1f2f57] focus:border-transparent"
              placeholder="Tell us about your interest in Metarium..."
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              className="mt-1 mr-2"
              required
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree to the Terms of Service and Privacy Policy
            </label>
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-[#1f2f57] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#172139] transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state.submitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    );
  }

  const navLinks = [
    { label: 'Product', href: '#product' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'AI', href: '#ai' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Docs', href: '#docs' },
    { label: 'Company', href: '#company' },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#hero" className="flex-shrink-0">
              <Image src="/metarium_full_logo.png" alt="Metarium" width={160} height={56} priority />
            </a>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((l) => (
                <a key={l.label} href={l.href} className="text-sm font-medium text-gray-700 hover:text-[#1f2f57] transition">
                  {l.label}
                </a>
              ))}
              <a
                href="#demo"
                className="bg-[#1f2f57] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#172139] transition"
              >
                Request Demo
              </a>
            </div>

            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4 space-y-2">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-medium text-gray-700 hover:text-[#1f2f57]">
                {l.label}
              </a>
            ))}
            <a href="#demo" onClick={() => setMobileMenuOpen(false)} className="block w-full text-center bg-[#1f2f57] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#172139] transition mt-2">
              Request Demo
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="py-20 bg-gradient-to-b from-[#f0f4fc] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1f2f57] leading-tight">
                The AI Control Center for Your Data Infrastructure
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
                Monitor, analyze, govern, and improve your databases with AI-powered intelligence across your entire data estate.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#demo" className="bg-[#1f2f57] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#172139] transition shadow-lg">
                  Request Demo
                </a>
                <a href="#" className="border-2 border-[#1f2f57] text-[#1f2f57] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#f0f4fc] transition">
                  Watch Overview
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs text-gray-400">Metarium Dashboard</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Performance Score', value: '94%', color: 'bg-green-50 text-green-700 border-green-200' },
                  { label: 'Risk Score', value: 'Low', color: 'bg-blue-50 text-blue-700 border-blue-200' },
                  { label: 'Active Alerts', value: '3', color: 'bg-yellow-50 text-yellow-700 border-yellow-200' },
                  { label: 'AI Insights', value: '12', color: 'bg-purple-50 text-purple-700 border-purple-200' },
                ].map((m) => (
                  <div key={m.label} className={`rounded-xl p-4 border ${m.color}`}>
                    <p className="text-xs font-medium opacity-75">{m.label}</p>
                    <p className="text-2xl font-bold mt-1">{m.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 h-24 bg-[#f0f4fc] rounded-lg flex items-end px-4 pb-2 space-x-1" aria-hidden="true">
                {[40, 65, 45, 80, 60, 90, 70, 85, 75, 94].map((h, i) => (
                  <div key={i} className="flex-1 bg-[#1f2f57] rounded-t opacity-70" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Trusted by data teams managing critical infrastructure</p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-14 rounded-lg bg-gray-100 flex items-center justify-center text-xs text-gray-400 font-medium">
                Partner Logo
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-gray-500">Join our early access program</p>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problems" className="py-20 bg-[#f0f4fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1f2f57]">Modern Data Infrastructure Is Hard to Control</h2>
          <div className="mt-12 grid sm:grid-cols-2 gap-8">
            {[
              { title: 'Fragmented Visibility', desc: 'Metrics in one tool, catalog in another, performance somewhere else.', icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' },
              { title: 'Hidden Data Risks', desc: 'Unused objects, schema drift, silent data quality issues.', icon: 'M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
              { title: 'Slow Incident Investigation', desc: 'Hours to diagnose with no AI assistance.', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
              { title: 'Growing Complexity', desc: 'Hundreds of databases, thousands of objects, unknown dependencies.', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
            ].map((p) => (
              <div key={p.title} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition">
                <svg className="h-8 w-8 text-[#1f2f57] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={p.icon} /></svg>
                <h3 className="text-xl font-bold text-[#1f2f57]">{p.title}</h3>
                <p className="mt-2 text-gray-600">{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-lg font-medium text-[#1f2f57]">Metarium unifies everything into a single intelligence platform.</p>
        </div>
      </section>

      {/* Product Overview - Five Pillars */}
      <section id="product" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1f2f57]">One Platform. Five Pillars of Intelligence.</h2>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Discover Your Data Estate',
                icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
                features: ['Server inventory', 'Database catalog', 'Object catalog', 'Schema browser', 'Change history', 'Tagging', 'Backup visibility'],
                message: 'Understand every database object, dependency, and change across your infrastructure.',
              },
              {
                title: 'Monitor Live Database Health',
                icon: 'M13 10V3L4 14h7v7l9-11h-7z',
                features: ['Live sessions', 'Deadlocks', 'Server metrics', 'Storage monitoring', 'Backups', 'Replication'],
                message: 'Real-time visibility into database performance and system health.',
              },
              {
                title: 'Analyze Performance and Risk',
                icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
                features: ['Heavy queries', 'Wait statistics', 'Plan cache', 'Anomaly detection', 'Dead objects', 'Index health', 'Impact analysis'],
                message: 'Find performance bottlenecks and hidden risks before they become incidents.',
              },
              {
                title: 'Ensure Data Quality',
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                features: ['Rule engine', 'Violations', 'Freshness', 'Profiling', 'Schema comparison', 'Table criticality'],
                message: 'Guarantee reliable and trustworthy data pipelines.',
              },
              {
                title: 'Govern and Secure Your Data',
                icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
                features: ['Access controls', 'SQL security', 'Permissions', 'Classification', 'Compliance'],
                message: 'Maintain security and compliance across your entire data environment.',
              },
            ].map((pillar) => (
              <div key={pillar.title} className="bg-[#f0f4fc] rounded-xl p-8 border border-gray-200 hover:shadow-lg transition flex flex-col">
                <svg className="h-8 w-8 text-[#1f2f57] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={pillar.icon} /></svg>
                <h3 className="text-xl font-bold text-[#1f2f57] mb-4">{pillar.title}</h3>
                <ul className="space-y-1 mb-6 flex-1">
                  {pillar.features.map((f) => (
                    <li key={f} className="flex items-center text-sm text-gray-700">
                      <svg className="h-4 w-4 text-[#1f2f57] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-600 italic border-t border-gray-200 pt-4">{pillar.message}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Intelligence Section */}
      <section id="ai" className="py-20 bg-[#1f2f57]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">AI That Understands Your Data Infrastructure</h2>
            <p className="mt-4 text-lg text-blue-200">Built-in AI intelligence that goes beyond simple monitoring</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              {[
                'AI incident investigation',
                'AI query optimization',
                'AI object explanations',
                'AI data classification',
                'AI rule generation',
                'AI chat assistant',
                'AI dependency analysis',
              ].map((f) => (
                <div key={f} className="flex items-center space-x-3">
                  <svg className="h-6 w-6 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-white text-lg">{f}</span>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-[#172139] px-6 py-4 flex items-center space-x-2">
                <svg className="h-5 w-5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                <span className="text-white font-semibold text-sm">Ask Metarium</span>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-end">
                  <div className="bg-[#f0f4fc] rounded-xl rounded-tr-none px-4 py-3 max-w-xs">
                    <p className="text-sm text-gray-800">Why did CPU spike on server X yesterday?</p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gray-50 rounded-xl rounded-tl-none px-4 py-3 max-w-sm border border-gray-200">
                    <p className="text-xs font-semibold text-[#1f2f57] mb-2">Metarium AI found 4 findings:</p>
                    <ul className="space-y-2">
                      {[
                        'Heavy query detected on db_analytics',
                        'Wait statistics show CXPACKET waits increased 340%',
                        'Plan regression identified on query #4521',
                        'Anomaly correlation: 87% confidence',
                      ].map((line) => (
                        <li key={line} className="flex items-start text-xs text-gray-700">
                          <svg className="h-3.5 w-3.5 text-[#1f2f57] mr-1.5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Incident Investigation */}
      <section id="investigate" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1f2f57]">Investigate Database Incidents in Minutes, Not Hours</h2>
          <div className="mt-14 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {[
              { label: 'Anomaly Detected', icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' },
              { label: 'Click Investigate', icon: 'M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122' },
              { label: 'AI Analyzes Metrics', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
              { label: 'Root Cause Found', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
            ].map((step, i) => (
              <div key={step.label} className="flex items-center">
                <div className="flex flex-col items-center text-center w-40">
                  <div className="w-16 h-16 rounded-full bg-[#f0f4fc] flex items-center justify-center border-2 border-[#1f2f57]">
                    <svg className="h-7 w-7 text-[#1f2f57]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={step.icon} /></svg>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-[#1f2f57]">{step.label}</p>
                </div>
                {i < 3 && (
                  <svg className="hidden md:block h-6 w-6 text-[#1f2f57] mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 max-w-lg mx-auto bg-[#f0f4fc] rounded-xl p-6 border border-gray-200 text-center">
            <p className="text-lg font-bold text-[#1f2f57]">Root cause: Query regression after index drop</p>
            <div className="mt-4 flex justify-center gap-8 text-sm text-gray-700">
              <span><strong>Confidence:</strong> 87%</span>
              <span><strong>Impact:</strong> 3 databases affected</span>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Integrations */}
      <section id="integrations" className="py-20 bg-[#f0f4fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1f2f57]">Connects to Your Data Stack</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'SQL Server', desc: 'Full monitoring and analysis', icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4' },
              { name: 'PostgreSQL', desc: 'Full monitoring and analysis', icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4' },
              { name: 'Cloud Databases', desc: 'Coming Soon', icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z' },
              { name: 'Alerts & Notifications', desc: 'Email, Slack, Teams', icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' },
              { name: 'REST APIs', desc: 'Full API access', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
              { name: 'Data Export', desc: 'CSV, JSON, PDF', icon: 'M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
            ].map((intg) => (
              <div key={intg.name} className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:shadow-md transition">
                <svg className="h-10 w-10 mx-auto text-[#1f2f57]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={intg.icon} /></svg>
                <h3 className="mt-4 font-bold text-[#1f2f57]">{intg.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{intg.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="solutions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1f2f57]">Built for Modern Data Teams</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { role: 'DBAs', points: ['Performance optimization', 'Server health monitoring'], icon: 'M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
              { role: 'Data Engineers', points: ['Pipeline reliability', 'Data quality rules'], icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
              { role: 'Analytics Teams', points: ['Data catalog', 'Usage insights'], icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
              { role: 'Platform Teams', points: ['Governance', 'Compliance'], icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
            ].map((uc) => (
              <div key={uc.role} className="bg-[#f0f4fc] rounded-xl p-6 border border-gray-200 text-center hover:shadow-md transition">
                <svg className="h-10 w-10 mx-auto text-[#1f2f57]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={uc.icon} /></svg>
                <h3 className="mt-4 text-lg font-bold text-[#1f2f57]">{uc.role}</h3>
                <ul className="mt-3 space-y-1">
                  {uc.points.map((p) => (
                    <li key={p} className="text-sm text-gray-600">{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Architecture */}
      <section id="architecture" className="py-20 bg-[#f0f4fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1f2f57]">Enterprise-Grade Architecture</h2>
          <div className="mt-14 flex flex-col md:flex-row items-center justify-center gap-4">
            {[
              { label: 'Your Databases', color: 'bg-blue-100 border-blue-300 text-blue-800' },
              { label: 'Metarium Worker', color: 'bg-indigo-100 border-indigo-300 text-indigo-800' },
              { label: 'Data Collection Layer', color: 'bg-purple-100 border-purple-300 text-purple-800' },
              { label: 'AI Engine', color: 'bg-[#1f2f57] border-[#172139] text-white' },
              { label: 'Dashboard UI + APIs', color: 'bg-green-100 border-green-300 text-green-800' },
            ].map((node, i) => (
              <div key={node.label} className="flex items-center">
                <div className={`rounded-xl px-6 py-4 border-2 font-semibold text-sm text-center ${node.color}`}>
                  {node.label}
                </div>
                {i < 4 && (
                  <svg className="hidden md:block h-6 w-6 text-[#1f2f57] mx-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section id="security" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1f2f57]">Enterprise Security You Can Trust</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Role-Based Access', desc: 'Granular permissions for every team member.', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
              { title: 'Audit Logs', desc: 'Complete trail of every action and access event.', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
              { title: 'Encryption', desc: 'Data encrypted at rest and in transit.', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
              { title: 'Data Classification', desc: 'Automatic PII and sensitive data detection.', icon: 'M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z' },
            ].map((s) => (
              <div key={s.title} className="bg-[#f0f4fc] rounded-xl p-6 border border-gray-200 text-center hover:shadow-md transition">
                <svg className="h-10 w-10 mx-auto text-[#1f2f57]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} /></svg>
                <h3 className="mt-4 font-bold text-[#1f2f57]">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-[#1f2f57]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Reduce Database Incidents by 70%</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: '10x Faster', desc: 'Root cause analysis' },
              { stat: '70% Fewer', desc: 'Database incidents' },
              { stat: '3x Better', desc: 'Data reliability' },
              { stat: '50% Less', desc: 'Operational overhead' },
            ].map((r) => (
              <div key={r.stat} className="bg-white/10 rounded-xl p-8 backdrop-blur">
                <p className="text-4xl font-extrabold text-white">{r.stat}</p>
                <p className="mt-2 text-blue-200">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo / Registration */}
      <section id="demo" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1f2f57]">See Metarium in Action</h2>
            <p className="mt-4 text-lg text-gray-600">Experience the AI Control Center for your data infrastructure</p>
          </div>
          <div className="max-w-xl mx-auto">
            <RegistrationForm />
            <p className="mt-6 text-center text-sm text-gray-500">
              Already have an account?{' '}
              <a href="#" className="text-[#1f2f57] font-semibold hover:underline">Sign in</a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1f2f57] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-1">
              <Image src="/metarium_full_logo.png" alt="Metarium" width={140} height={40} className="brightness-0 invert" />
              <p className="mt-4 text-sm text-blue-200">The AI Control Center for your data infrastructure.</p>
            </div>

            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-blue-300">Product</h4>
              <ul className="mt-4 space-y-2 text-sm text-blue-100">
                {['Overview', 'Monitoring', 'Performance', 'Data Quality', 'AI Intelligence'].map((l) => (
                  <li key={l}><a href="#" className="hover:text-white transition">{l}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-blue-300">Solutions</h4>
              <ul className="mt-4 space-y-2 text-sm text-blue-100">
                {['DBAs', 'Data Engineers', 'Analytics', 'Platform Teams'].map((l) => (
                  <li key={l}><a href="#" className="hover:text-white transition">{l}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-blue-300">Company</h4>
              <ul className="mt-4 space-y-2 text-sm text-blue-100">
                {['About', 'Blog', 'Careers', 'Contact'].map((l) => (
                  <li key={l}><a href="#" className="hover:text-white transition">{l}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-blue-300">Legal</h4>
              <ul className="mt-4 space-y-2 text-sm text-blue-100">
                {['Privacy', 'Terms', 'Security', 'Compliance'].map((l) => (
                  <li key={l}><a href="#" className="hover:text-white transition">{l}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm text-blue-200">
            &copy; 2026 Metarium. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

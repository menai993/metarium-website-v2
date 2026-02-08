'use client';

import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Home() {

  function RegistrationForm() {
    const [state, handleSubmit] = useForm('xgolvvao');
    
    if (state.succeeded) {
      return (
        <div className="bg-green-50 p-8 rounded-xl border border-green-200">
          <h3 className="text-2xl font-bold text-green-900 mb-3">Thanks for reaching out!</h3>
          <p className="text-green-800">We'll be in touch soon to discuss partnership opportunities and answer any questions you have.</p>
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

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/metarium_full_logo.png" alt="Metarium Logo" className="h-14" />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#platform" className="text-gray-700 hover:text-[#1f2f57] transition">Platform</a>
              <a href="#features" className="text-gray-700 hover:text-[#1f2f57] transition">Features</a>
              <a href="#partnerships" className="text-gray-700 hover:text-[#1f2f57] transition">Partnerships</a>
              <a href="#register" className="text-gray-700 hover:text-[#1f2f57] transition">Get Started</a>
            </div>
            <div>
              <a href="#register" className="bg-[#1f2f57] text-white px-6 py-2 rounded-lg hover:bg-[#172139] transition">
                Try Free
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#f0f4fc] to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              The Intelligent Database
              <span className="text-[#1f2f57]"> Operations Platform</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#1f2f57] font-semibold mb-4">
              Stop reacting to database problems. Start predicting them.
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Metarium is an enterprise-grade, AI-powered SQL Server intelligence platform that transforms raw database telemetry into actionable insights — automatically. It discovers, catalogs, monitors, and analyzes your entire SQL Server infrastructure, giving your team a single pane of glass for metadata management, performance intelligence, and compliance governance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#register" className="bg-[#1f2f57] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#172139] transition shadow-lg">
                Start Free Trial
              </a>
              <a href="#download" className="bg-white text-[#1f2f57] px-8 py-4 rounded-lg text-lg font-semibold border-2 border-[#1f2f57] hover:bg-[#f0f4fc] transition">
                Download Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Platform Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to monitor, analyze, predict, and optimize your database infrastructure
            </p>
          </div>

          <div id="platform" className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Monitoring & Observability */}
            <div className="bg-[#f0f4fc] p-8 rounded-xl hover:shadow-xl transition">
              <div className="w-12 h-12 bg-[#1f2f57] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Monitoring &amp; Observability</h3>
              <ul className="text-gray-600 space-y-1 text-sm list-disc list-inside">
                <li>Server Metrics</li>
                <li>Instance Metrics</li>
                <li>Database Health Scoring</li>
                <li>SQL Agent Monitoring</li>
              </ul>
            </div>

            {/* Metadata Intelligence */}
            <div className="bg-[#f0f4fc] p-8 rounded-xl hover:shadow-xl transition">
              <div className="w-12 h-12 bg-[#1f2f57] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Metadata Intelligence</h3>
              <ul className="text-gray-600 space-y-1 text-sm list-disc list-inside">
                <li>30 Metadata Collectors</li>
                <li>Change History</li>
                <li>Object Catalog</li>
                <li>Definition Snapshots</li>
              </ul>
            </div>

            {/* Query Performance Intelligence */}
            <div className="bg-[#f0f4fc] p-8 rounded-xl hover:shadow-xl transition">
              <div className="w-12 h-12 bg-[#1f2f57] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Query Performance Intelligence</h3>
              <ul className="text-gray-600 space-y-1 text-sm list-disc list-inside">
                <li>Heavy Query Detection</li>
                <li>Regression Analysis</li>
                <li>Execution Plan Tracking</li>
                <li>Missing Index Recommendations</li>
              </ul>
            </div>

            {/* Database Hygiene */}
            <div className="bg-[#f0f4fc] p-8 rounded-xl hover:shadow-xl transition">
              <div className="w-12 h-12 bg-[#1f2f57] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Database Hygiene</h3>
              <ul className="text-gray-600 space-y-1 text-sm list-disc list-inside">
                <li>Dead Object Detection</li>
                <li>Execution Frequency Tracking</li>
                <li>Object Popularity Scoring</li>
              </ul>
            </div>

            {/* AI-Powered Analysis */}
            <div className="bg-[#f0f4fc] p-8 rounded-xl hover:shadow-xl transition">
              <div className="w-12 h-12 bg-[#1f2f57] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Powered Analysis</h3>
              <ul className="text-gray-600 space-y-1 text-sm list-disc list-inside">
                <li>Multi-Provider LLM Support</li>
                <li>6-Stage Analysis Pipeline</li>
                <li>Interactive AI Chat</li>
                <li>AI-Generated Explanations</li>
                <li>LLM Optimization Advisor</li>
              </ul>
            </div>

            {/* AI Safety & Governance */}
            <div className="bg-[#f0f4fc] p-8 rounded-xl hover:shadow-xl transition">
              <div className="w-12 h-12 bg-[#1f2f57] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Safety &amp; Governance</h3>
              <ul className="text-gray-600 space-y-1 text-sm list-disc list-inside">
                <li>5-Layer Safety System</li>
                <li>Data Masking</li>
                <li>Tenant Isolation</li>
                <li>Explainable AI</li>
              </ul>
            </div>

            {/* Dependency & Impact Analysis */}
            <div className="bg-[#f0f4fc] p-8 rounded-xl hover:shadow-xl transition">
              <div className="w-12 h-12 bg-[#1f2f57] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dependency &amp; Impact Analysis</h3>
              <ul className="text-gray-600 space-y-1 text-sm list-disc list-inside">
                <li>Visual Dependency Graph</li>
                <li>Cross-Database Dependencies</li>
                <li>Change Impact Preview</li>
              </ul>
            </div>

            {/* Enterprise Administration */}
            <div className="bg-[#f0f4fc] p-8 rounded-xl hover:shadow-xl transition">
              <div className="w-12 h-12 bg-[#1f2f57] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise Administration</h3>
              <ul className="text-gray-600 space-y-1 text-sm list-disc list-inside">
                <li>RBAC</li>
                <li>Multi-Node HA</li>
                <li>Object Ownership</li>
                <li>Tagging &amp; Classification</li>
                <li>Notification Subscriptions</li>
                <li>License Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The Problems We Solve
            </h2>
            <p className="text-xl text-gray-600">
              Whether you manage 1 database or 1,000, Metarium replaces guesswork with data-driven decisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
              <h3 className="text-lg font-bold text-gray-900 mb-3">{'"'}We Don{"'"}t Know What Changed — Or When{'"'}</h3>
              <p className="text-gray-600 text-sm">
                Schema changes slip through unnoticed. Metarium tracks every change automatically with 30 specialized metadata collectors, full before-and-after diffs, timestamps, and audit trails.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
              <h3 className="text-lg font-bold text-gray-900 mb-3">{'"'}We Only Discover Slowdowns After Users Complain{'"'}</h3>
              <p className="text-gray-600 text-sm">
                Traditional monitoring tells you something is slow. Metarium tells you why — and warns you before it becomes a crisis with our 6-stage heavy query analysis pipeline.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
              <h3 className="text-lg font-bold text-gray-900 mb-3">{'"'}We Have Indexes and Tables Nobody Uses{'"'}</h3>
              <p className="text-gray-600 text-sm">
                Metarium{"'"}s Dead Object Detection engine identifies unused tables, indexes, and columns with confidence-scored classifications.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
              <h3 className="text-lg font-bold text-gray-900 mb-3">{'"'}We Deployed a Change and It Broke Something{'"'}</h3>
              <p className="text-gray-600 text-sm">
                Metarium{"'"}s Impact Analyzer maps every object dependency — including cross-database dependencies — and calculates the risk of any proposed change.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
              <h3 className="text-lg font-bold text-gray-900 mb-3">{'"'}We Can{"'"}t Prove Where Sensitive Data Lives{'"'}</h3>
              <p className="text-gray-600 text-sm">
                Metarium automatically detects and classifies sensitive data (SSN, credit cards, emails, phone numbers, account numbers). All sensitive data is masked in AI interactions with full audit logging.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
              <h3 className="text-lg font-bold text-gray-900 mb-3">{'"'}Our DBAs Spend Hours Correlating Metrics{'"'}</h3>
              <p className="text-gray-600 text-sm">
                Metarium automates the entire investigation pipeline with AI-powered analysis, freeing your DBAs to focus on strategic work.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition md:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-bold text-gray-900 mb-3">{'"'}We Have Zero Visibility Across Databases{'"'}</h3>
              <p className="text-gray-600 text-sm">
                Metarium{"'"}s Dependency Graph and Cross-Database Dependency Tracker map every relationship visually, giving you full cross-database visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Predictive Intelligence Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Predictive Intelligence
            </h2>
            <p className="text-xl text-gray-600">
              What Metarium predicts — before your users even notice a problem
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#f0f4fc] p-8 rounded-xl text-center hover:shadow-xl transition">
              <div className="w-12 h-12 bg-[#1f2f57] rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Performance</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>Query Regression</li>
                <li>Server Anomaly</li>
                <li>Connection Spike</li>
                <li>Deadlock Risk</li>
              </ul>
            </div>

            <div className="bg-[#f0f4fc] p-8 rounded-xl text-center hover:shadow-xl transition">
              <div className="w-12 h-12 bg-[#1f2f57] rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Health</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>Stale Statistics</li>
                <li>Index Fragmentation</li>
                <li>Table Growth</li>
              </ul>
            </div>

            <div className="bg-[#f0f4fc] p-8 rounded-xl text-center hover:shadow-xl transition">
              <div className="w-12 h-12 bg-[#1f2f57] rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Optimization</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>Missing Indexes</li>
                <li>Dead Object Candidates</li>
                <li>Parameter Sniffing</li>
              </ul>
            </div>

            <div className="bg-[#f0f4fc] p-8 rounded-xl text-center hover:shadow-xl transition">
              <div className="w-12 h-12 bg-[#1f2f57] rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Risk</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>Change Impact</li>
                <li>Compliance Exposure</li>
                <li>Configuration Drift</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access & Partnerships Section */}
      <section id="partnerships" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Early Access & Partnerships</h2>
            <p className="text-lg text-gray-600 mb-6">
              Metarium is currently in active development and evolving rapidly based on real-world needs and feedback.
            </p>
          </div>

          <div className="bg-[#f0f4fc] p-8 rounded-xl border border-[#1f2f57]/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">We are opening early conversations with partners, teams, and organizations who want to:</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#1f2f57] mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-lg text-gray-700">Influence the product direction</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#1f2f57] mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-lg text-gray-700">Collaborate on use cases</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#1f2f57] mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-lg text-gray-700">Gain early access to upcoming capabilities</span>
              </li>
            </ul>
            <p className="text-lg text-gray-700 mb-8">
              If you're interested in shaping Metarium together and exploring a long-term partnership, we'd love to talk.
            </p>
            <div className="text-center">
              <a href="#register" className="inline-block bg-[#1f2f57] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#172139] transition">
                Get in touch to explore partnership opportunities
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us today to discuss your needs and get a custom quote tailored to your organization.
            </p>
            <a href="#register" className="inline-block bg-[#1f2f57] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#172139] transition shadow-lg">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Metarium Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Metarium
            </h2>
            <p className="text-xl text-gray-600">
              Traditional Monitoring vs Metarium
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto border-collapse">
              <thead>
                <tr>
                  <th className="py-4 px-6 bg-gray-100 text-left text-gray-900 font-bold rounded-tl-xl">Capability</th>
                  <th className="py-4 px-6 bg-gray-100 text-center text-gray-500 font-bold">Traditional Monitoring</th>
                  <th className="py-4 px-6 bg-[#1f2f57] text-center text-white font-bold rounded-tr-xl">Metarium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 px-6 text-gray-700">Approach</td>
                  <td className="py-4 px-6 text-center text-gray-500">Reports metrics</td>
                  <td className="py-4 px-6 text-center text-[#1f2f57] font-semibold">Delivers intelligence</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-700">Timing</td>
                  <td className="py-4 px-6 text-center text-gray-500">Reacts after the fact</td>
                  <td className="py-4 px-6 text-center text-[#1f2f57] font-semibold">Predicts before impact</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-700">Root Cause</td>
                  <td className="py-4 px-6 text-center text-gray-500">Requires manual correlation</td>
                  <td className="py-4 px-6 text-center text-[#1f2f57] font-semibold">Automated root cause analysis</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-700">Scope</td>
                  <td className="py-4 px-6 text-center text-gray-500">Single-database view</td>
                  <td className="py-4 px-6 text-center text-[#1f2f57] font-semibold">Cross-database dependency mapping</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-700">AI</td>
                  <td className="py-4 px-6 text-center text-gray-500">No AI</td>
                  <td className="py-4 px-6 text-center text-[#1f2f57] font-semibold">Multi-provider LLM integration</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-700">Change Tracking</td>
                  <td className="py-4 px-6 text-center text-gray-500">Basic change logs</td>
                  <td className="py-4 px-6 text-center text-[#1f2f57] font-semibold">30 metadata collectors with full diff history</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-700">Compliance</td>
                  <td className="py-4 px-6 text-center text-gray-500">No compliance</td>
                  <td className="py-4 px-6 text-center text-[#1f2f57] font-semibold">Automatic PII detection and masking</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deployment Options Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Deployment Options
            </h2>
            <p className="text-xl text-gray-600">
              Deploy Metarium wherever your infrastructure lives
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition">
              <div className="w-12 h-12 bg-[#1f2f57] rounded-lg flex items-center justify-center mb-3 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900">On-Premises</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition">
              <div className="w-12 h-12 bg-[#1f2f57] rounded-lg flex items-center justify-center mb-3 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900">Cloud</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition">
              <div className="w-12 h-12 bg-[#1f2f57] rounded-lg flex items-center justify-center mb-3 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900">Hybrid</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition">
              <div className="w-12 h-12 bg-[#1f2f57] rounded-lg flex items-center justify-center mb-3 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900">Containerized</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition col-span-2 md:col-span-1">
              <div className="w-12 h-12 bg-[#1f2f57] rounded-lg flex items-center justify-center mb-3 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900">HA Cluster</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Started Today</h2>
            <p className="text-xl text-gray-600 mb-4">
              Start your 30-day free trial and experience the power of Metarium
            </p>
            <div className="text-gray-500 max-w-2xl mx-auto text-left">
              <p className="mb-3">Within minutes, Metarium begins its 5-step onboarding:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li><strong>Discovering</strong> — Cataloging every object across your databases</li>
                <li><strong>Monitoring</strong> — Capturing performance metrics and query statistics</li>
                <li><strong>Analyzing</strong> — Detecting anomalies, regressions, and optimization opportunities</li>
                <li><strong>Predicting</strong> — Forecasting issues before they impact your users</li>
                <li><strong>Recommending</strong> — AI-powered suggestions with explainable reasoning</li>
              </ol>
            </div>
          </div>

          <RegistrationForm />

          <div className="mt-8 text-center text-gray-600">
            <p>Already have an account? <a href="#" className="text-[#1f2f57] hover:underline">Sign in</a></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Metarium</h3>
              <p className="text-gray-400">
                Metarium — Intelligent Database Operations. Monitor. Analyze. Predict. Optimize.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#download" className="hover:text-white transition">Download</a></li>
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
                <li><a href="#" className="hover:text-white transition">Compliance</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Metarium. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

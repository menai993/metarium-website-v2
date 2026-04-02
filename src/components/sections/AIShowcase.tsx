import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect, useCallback } from 'react'
import { Sparkles, User, ArrowUpRight, Database } from 'lucide-react'
import ScreenshotFrame from '../ScreenshotFrame'

const userMessage = 'Why is our reporting database slow during morning hours?'

const aiResponseLines = [
  'Based on my analysis of your reporting server metrics from the past 7 days, I\'ve identified three contributing factors:',
  '',
  '**1. Heavy ETL Jobs** \u2014 Your nightly SSIS packages are completing at 8:47 AM on average, overlapping with user query activity by ~45 minutes.',
  '',
  '**2. Missing Indexes** \u2014 The `dbo.SalesReport` table has 3 missing indexes that would reduce query cost by an estimated 73%.',
  '',
  '**3. Blocking Chains** \u2014 Session 247 (report generation) is consistently blocking 12+ sessions during peak hours.',
  '',
  '**Recommended Actions:**',
  '\u2022 Reschedule ETL completion target to 7:00 AM',
  '\u2022 Apply the suggested covering index on `SalesReport`',
  '\u2022 Optimize the report generation query',
]

const followUps = [
  'Analyze the report generation query',
  'Show me the missing index details',
  "Compare last week's performance",
]

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1.5 px-4 py-3">
      <div className="w-2 h-2 rounded-full bg-accent typing-dot" />
      <div className="w-2 h-2 rounded-full bg-accent typing-dot" />
      <div className="w-2 h-2 rounded-full bg-accent typing-dot" />
    </div>
  )
}

function formatLine(line: string) {
  // Bold text
  const parts = line.split(/(\*\*[^*]+\*\*|`[^`]+`)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <span key={i} className="font-semibold text-white">
          {part.slice(2, -2)}
        </span>
      )
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={i}
          className="px-1.5 py-0.5 rounded bg-accent/10 text-cyan-light text-xs font-mono"
        >
          {part.slice(1, -1)}
        </code>
      )
    }
    return <span key={i}>{part}</span>
  })
}

export default function AIShowcase() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [phase, setPhase] = useState<'idle' | 'typing' | 'streaming' | 'done'>('idle')
  const [streamedLines, setStreamedLines] = useState<string[]>([])
  const [showFollowUps, setShowFollowUps] = useState(false)

  const startAnimation = useCallback(() => {
    setPhase('typing')

    // Show typing indicator for 1.5s, then start streaming
    setTimeout(() => {
      setPhase('streaming')
      let lineIndex = 0

      const interval = setInterval(() => {
        if (lineIndex < aiResponseLines.length) {
          setStreamedLines((prev) => [...prev, aiResponseLines[lineIndex]])
          lineIndex++
        } else {
          clearInterval(interval)
          setPhase('done')
          setTimeout(() => setShowFollowUps(true), 400)
        }
      }, 120)
    }, 1500)
  }, [])

  useEffect(() => {
    if (isInView && phase === 'idle') {
      const timer = setTimeout(startAnimation, 600)
      return () => clearTimeout(timer)
    }
  }, [isInView, phase, startAnimation])

  return (
    <section
      id="ai-showcase"
      ref={ref}
      className="relative py-32 overflow-hidden"
    >
      {/* Dark premium background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-[#060a16] to-navy" />

      {/* Neural network glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/[0.03] rounded-full blur-[150px]" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-accent/[0.04] rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-accent/20 bg-accent/5 text-sm text-accent mb-6">
            <Sparkles className="w-4 h-4" strokeWidth={1.5} />
            AI Intelligence
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Your Database Team's AI Co-Pilot</span>
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            From natural language queries to autonomous incident investigation &mdash;
            AI that understands your databases as well as you do.
          </p>
        </motion.div>

        {/* Chat mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="rounded-md border border-surface-border bg-surface-card/80 backdrop-blur-xl overflow-hidden shadow-2xl shadow-accent/5">
            {/* Chat header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-surface-border/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-gradient-to-br from-accent to-cyan-accent flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Ask Metarium</div>
                  <div className="text-xs text-[#64748B]">AI Database Assistant</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#64748B]">
                <Database className="w-3.5 h-3.5" strokeWidth={1.5} />
                <span>Context: Reporting Server</span>
              </div>
            </div>

            {/* Chat messages */}
            <div className="p-6 space-y-6 min-h-[400px]">
              {/* User message */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="flex gap-3 justify-end"
              >
                <div className="max-w-md">
                  <div className="bg-accent/20 border border-accent/30 rounded-md rounded-br-sm px-4 py-3 text-sm text-white">
                    {userMessage}
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-surface-border flex items-center justify-center shrink-0">
                  <User className="w-4 h-4 text-[#94A3B8]" strokeWidth={1.5} />
                </div>
              </motion.div>

              {/* AI response */}
              {phase !== 'idle' && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-cyan-accent flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="max-w-lg">
                    {phase === 'typing' ? (
                      <div className="glass-card rounded-md rounded-bl-sm">
                        <TypingIndicator />
                      </div>
                    ) : (
                      <div className="glass-card rounded-md rounded-bl-sm px-4 py-3 text-sm text-[#94A3B8] leading-relaxed">
                        {streamedLines.map((line, i) => (
                          <div key={i} className={line === '' ? 'h-2' : 'mb-1'}>
                            {line && formatLine(line)}
                          </div>
                        ))}
                        {phase === 'streaming' && (
                          <motion.span
                            className="inline-block w-2 h-4 bg-accent ml-0.5"
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                          />
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Follow-up suggestions */}
              {showFollowUps && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-wrap gap-2 ml-11"
                >
                  {followUps.map((text) => (
                    <button
                      key={text}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-accent/20 text-xs text-accent hover:bg-accent/10 transition-colors"
                    >
                      <ArrowUpRight className="w-3 h-3" />
                      {text}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Input bar */}
            <div className="px-6 py-4 border-t border-surface-border/50">
              <div className="flex items-center gap-3 px-4 py-3 rounded-md bg-white/5 border border-surface-border">
                <input
                  type="text"
                  readOnly
                  placeholder="Ask anything about your databases..."
                  className="flex-1 bg-transparent text-sm text-[#94A3B8] outline-none placeholder:text-[#64748B] font-mono"
                  tabIndex={-1}
                />
                <div className="w-8 h-8 rounded-md bg-accent/20 flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-accent" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </div>

          {/* Source attribution mockup */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="flex justify-center mt-4 text-xs text-[#64748B]"
          >
            Sources: error_logs, wait_stats, performance_metrics, ssis_history &bull; GPT-4o &bull; 1,247 tokens
          </motion.div>
        </motion.div>

        {/* Real AI interface screenshot */}
        <div className="mt-20 max-w-5xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-xl font-semibold text-[#94A3B8] mb-8"
          >
            The real Ask Metarium interface
          </motion.h3>
          <ScreenshotFrame
            id="screenshot-ai-showcase"
            src="/screenshots/ai-showcase.png"
            alt="Ask Metarium AI chat interface showing a real conversational investigation with source citations"
          />
        </div>
      </div>
    </section>
  )
}

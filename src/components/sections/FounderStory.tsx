import { motion } from 'framer-motion'
import { Linkedin, Github, Mail } from 'lucide-react'

export default function FounderStory() {
  return (
    <section id="founder" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Built by a Solo Engineer</span>
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            One person. One vision. A platform born from real production pain.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass-card p-8 sm:p-12"
        >
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Avatar placeholder */}
            <div className="shrink-0 mx-auto md:mx-0">
              <div className="w-28 h-28 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center">
                <span className="text-4xl font-bold gradient-text">BM</span>
              </div>
            </div>

            {/* Story */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-1">
                Benjamin
              </h3>
              <p className="text-accent text-sm font-medium mb-6">
                Founder & Solo Developer
              </p>

              <div className="space-y-4 text-[#94A3B8] leading-relaxed">
                <p>
                  I spent years managing SQL Server and PostgreSQL fleets, juggling SSMS, pgAdmin,
                  custom monitoring scripts, spreadsheet inventories, and tribal knowledge scattered
                  across wikis that nobody updated.
                </p>
                <p>
                  Metarium started because I needed one tool that could discover everything,
                  monitor it intelligently, and actually explain what's going wrong — not just
                  flash red when CPU hits 90%. I built the AI investigation engine because I was
                  tired of manually correlating wait stats, blocking chains, and query plans at 2 AM.
                </p>
                <p>
                  Every feature in Metarium exists because I hit that problem in production.
                  130+ data handlers, AI-powered investigation, business context mapping —
                  it's all here because the alternative was duct tape.
                </p>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-4 mt-8">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-surface-border text-sm text-[#94A3B8] hover:text-white hover:border-accent/40 transition-colors"
                >
                  <Linkedin className="w-4 h-4" strokeWidth={1.5} />
                  LinkedIn
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-surface-border text-sm text-[#94A3B8] hover:text-white hover:border-accent/40 transition-colors"
                >
                  <Github className="w-4 h-4" strokeWidth={1.5} />
                  GitHub
                </a>
                <a
                  href="mailto:contact@metarium.io"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-surface-border text-sm text-[#94A3B8] hover:text-white hover:border-accent/40 transition-colors"
                >
                  <Mail className="w-4 h-4" strokeWidth={1.5} />
                  Email
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

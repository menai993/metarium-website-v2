import { Linkedin, Github, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-surface-border bg-surface-card/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src="/metarium_full_logo.png" alt="Metarium" className="h-6 brightness-0 invert" />
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-[#64748B] hover:text-white hover:bg-white/5 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" strokeWidth={1.5} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-[#64748B] hover:text-white hover:bg-white/5 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" strokeWidth={1.5} />
            </a>
            <a
              href="mailto:contact@metarium.io"
              className="p-2 rounded-md text-[#64748B] hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" strokeWidth={1.5} />
            </a>
          </div>

          <p className="text-sm text-[#64748B]">
            &copy; {new Date().getFullYear()} Metarium. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

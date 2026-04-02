export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-navy-light/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src="/metarium_full_logo.png" alt="Metarium" className="h-6 brightness-0 invert" />
          </div>

          <p className="text-sm text-slate-500 text-center">
            The AI-Powered Database Intelligence Platform for SQL Server &amp; PostgreSQL.
          </p>

          <p className="text-sm text-slate-600">
            &copy; {new Date().getFullYear()} Metarium. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

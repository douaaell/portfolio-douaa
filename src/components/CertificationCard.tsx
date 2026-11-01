import { Link } from 'react-router-dom'
import { Award, FileText, Loader2, Sparkles } from 'lucide-react'
import { useI18n } from '../i18n'
import type { Certification } from '../data/types'

export default function CertificationCard({ c }: { c: Certification }) {
  const { u } = useI18n()

  const renderBadge = () => {
    if (c.status === 'in_progress') {
      return (
        <span className="flex items-center gap-1 rounded-full border border-amber-500/40 bg-amber-500/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-amber-600 dark:text-amber-400">
          <Loader2 size={11} className="animate-spin" />
          {u.inProgress}
        </span>
      )
    }
    if (c.status === 'planned') {
      return (
        <span className="flex items-center gap-1 rounded-full border border-sky-500/40 bg-sky-500/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-sky-600 dark:text-sky-400">
          <Sparkles size={11} />
          {u.planned}
        </span>
      )
    }
    return (
      <span className="flex items-center gap-1 rounded-full border border-line bg-bg px-2.5 py-0.5 font-mono text-[11px] text-accent">
        <FileText size={11} /> PDF
      </span>
    )
  }

  return (
    <Link
      to={`/certifications/${c.id}`}
      className="card group flex flex-col justify-between p-5 transition duration-300 hover:-translate-y-1 hover:border-accent"
    >
      <div>
        <div className="flex items-center justify-between text-xs text-muted">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage/50 text-accent transition group-hover:scale-110">
            <Award size={20} />
          </div>
          {renderBadge()}
        </div>
        <h3 className="mt-4 font-display text-lg font-bold leading-snug group-hover:text-accent transition">
          {c.name}
        </h3>
        <p className="mt-2 text-xs text-muted">{c.org}</p>
      </div>
      <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-accent">
        {u.viewCert} →
      </span>
    </Link>
  )
}

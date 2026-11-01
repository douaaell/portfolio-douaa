import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { useI18n } from '../i18n'
import type { Project } from '../data/types'
export function Shot({ label, src }: { label: string; src?: string }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-bg" aria-hidden>
      <div className="flex gap-1.5 border-b border-line px-3 py-2">{[0, 1, 2].map((i) => <span key={i} className="h-2 w-2 rounded-full bg-line" />)}</div>
      {src && !failed ? (
        <img src={src} alt="" className="h-32 w-full object-cover object-top sm:h-40" onError={() => setFailed(true)} />
      ) : (
        <div className="grid h-32 place-items-center bg-sage/40 text-center text-xs text-muted sm:h-40">{label}</div>
      )}
    </div>
  )
}
export default function ProjectCard({ p, large = false }: { p: Project; large?: boolean }) {
  const { u, t } = useI18n()
  return (
    <Link to={`/projects/${p.id}`} className={`card group flex flex-col p-5 ${large ? 'md:col-span-2' : ''}`}>
      <Shot label={u.shot} src={p.screenshots?.[0]} />
      <div className="mt-5 flex items-center justify-between text-xs text-muted"><span className="uppercase tracking-wide text-accent">{u[`cat_${p.cat}` as 'cat_ia']}</span><span>{p.period}</span></div>
      <h3 className="mt-2 font-display text-xl font-bold">{p.name}</h3>
      <p className="mt-2 text-sm text-muted">{t(p.desc)}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">{p.tech.map((x) => <span key={x} className="tag">{x}</span>)}</div>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent">{u.viewCase}<ArrowUpRight size={16} className="transition group-hover:translate-x-0.5" /></span>
    </Link>
  )
}

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useI18n, useTitle } from '../i18n'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import type { Category } from '../data/types'
export default function Projects() {
  const { u } = useI18n(); useTitle(u.projects)
  const [f, setF] = useState<Category | 'all'>('all')
  const cats: (Category | 'all')[] = ['all', 'ia', 'web', 'mobile', 'desktop']
  const list = projects.filter((p) => f === 'all' || p.cat === f)
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted hover:text-ink"><ArrowLeft size={14} />{u.home}</Link>
      <h1 className="mt-6 font-display text-5xl font-bold sm:text-6xl">{u.projects}</h1>
      <p className="mt-4 max-w-xl text-muted">{u.projIntro}</p>
      <div className="mt-8 flex flex-wrap gap-2" role="group">{cats.map((c) => <button key={c} onClick={() => setF(c)} aria-pressed={f === c}
        className={`rounded-full border px-4 py-2 text-sm ${f === c ? 'border-accent bg-accent text-white dark:text-[#0f1a14]' : 'border-line bg-card hover:border-accent'}`}>{c === 'all' ? u.all : u[`cat_${c}` as 'cat_ia']}</button>)}</div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{list.map((p) => <ProjectCard key={p.id} p={p} />)}</div>
    </div>
  )
}

import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Download, Github, Menu, X } from 'lucide-react'
import { useI18n } from '../i18n'
import { site } from '../data/site'
import ThemeToggle from './ThemeToggle'
export default function Navbar() {
  const { u, lang, setLang } = useI18n(); const [open, setOpen] = useState(false)
  const links = [['/#about', u.about], ['/projects', u.projects], ['/#skills', u.skills], ['/experience', u.experience], ['/certifications', u.certs], ['/contact', u.contact]]
  const cls = 'text-sm text-muted hover:text-ink transition'
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Main">
        <Link to="/" className="font-display text-xl font-bold" onClick={() => setOpen(false)}>{site.initials}<span className="text-accent">.</span></Link>
        <div className="hidden items-center gap-6 lg:flex">
          {links.map(([to, l]) => <NavLink key={to} to={to} className={cls}>{l}</NavLink>)}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')} aria-label="Language" className="h-10 rounded-full border border-line px-3 text-xs font-semibold hover:border-accent">{lang === 'fr' ? 'FR | en' : 'fr | EN'}</button>
          <ThemeToggle />
          {site.github && (
            <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hidden sm:grid h-10 w-10 place-items-center rounded-full border border-line text-muted hover:border-accent hover:text-ink transition">
              <Github size={16} />
            </a>
          )}
          <a href={lang === 'fr' ? '/cv/CV_FR_ATS.pdf' : '/cv/CV_EN_ATS.pdf'} download className="btn btn-primary hidden !py-2 sm:inline-flex"><Download size={14} />{u.cv}</a>
          <button className="grid h-10 w-10 place-items-center lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Menu">{open ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {open && <div className="border-t border-line bg-bg px-5 pb-5 lg:hidden">
        {links.map(([to, l]) => <Link key={to} to={to} onClick={() => setOpen(false)} className="block border-b border-line py-3">{l}</Link>)}
        <a href={lang === 'fr' ? '/cv/CV_FR_ATS.pdf' : '/cv/CV_EN_ATS.pdf'} download className="btn btn-primary mt-4 w-full"><Download size={14} />{u.cv}</a>
      </div>}
    </header>
  )
}

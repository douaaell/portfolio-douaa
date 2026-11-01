import { Link } from 'react-router-dom'
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import { useI18n, useTitle } from '../i18n'
import { site } from '../data/site'
import { projects } from '../data/projects'
import { certifications } from '../data/certifications'
import { skills, softSkills, languages } from '../data/skills'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import CertificationCard from '../components/CertificationCard'
import ExperienceTimeline from '../components/ExperienceTimeline'
export default function Home() {
  const { u, t, lang } = useI18n(); useTitle('Portfolio')
  const feat = projects.filter((p) => p.featured)
  return (
    <div className="mx-auto max-w-6xl px-5">
      <section className="py-16 sm:py-28">
        <span className="inline-block rounded-full bg-sage px-4 py-1.5 font-mono text-xs text-accent">{u.open}</span>
        <h1 className="mt-8 font-display text-5xl font-bold leading-[1.05] sm:text-7xl lg:text-8xl">{site.name.split(' ').slice(0, 1)}<br />{site.name.split(' ').slice(1).join(' ')}</h1>
        <p className="mt-6 text-xl text-accent sm:text-2xl">{t(site.title)}</p>
        <p className="mt-4 max-w-xl text-muted">{u.heroLine}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/projects" className="btn btn-primary">{u.explore}<ArrowRight size={16} /></Link>
          <a href={lang === 'fr' ? '/cv/CV_FR_ATS.pdf' : '/cv/CV_EN_ATS.pdf'} download className="btn btn-ghost"><Download size={16} />{u.cv}</a>
        </div>
      </section>
      <section id="about" className="py-14">
        <SectionHeading n="01" title={u.aboutT} />
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <p className="text-lg leading-relaxed">{t(site.about)}</p>
          <div><h3 className="mb-3 font-mono text-xs uppercase text-muted">{u.edu}</h3>
            <ul className="space-y-4">{site.edu.map((e, i) => <li key={i} className="border-l-2 border-accent pl-4"><p className="text-sm font-medium">{t(e.label)}</p><p className="text-xs text-muted">{[e.school, e.period].filter(Boolean).join(' · ')}</p></li>)}</ul></div>
        </div>
      </section>
      <section id="skills" className="py-14">
        <SectionHeading n="02" title={u.skillsT} />
        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((g) => <div key={g.title.en} className="border-t border-line pt-4"><h3 className="mb-3 font-mono text-xs uppercase text-accent">{t(g.title)}</h3>
            <div className="flex flex-wrap gap-1.5">{g.items.map((i) => <span key={i.en} className="tag">{t(i)}</span>)}</div></div>)}
          <div className="border-t border-line pt-4"><h3 className="mb-3 font-mono text-xs uppercase text-accent">{u.soft}</h3><div className="flex flex-wrap gap-1.5">{softSkills.map((i) => <span key={i.en} className="tag">{t(i)}</span>)}</div></div>
          <div className="border-t border-line pt-4"><h3 className="mb-3 font-mono text-xs uppercase text-accent">{u.langs}</h3><div className="flex flex-wrap gap-1.5">{languages.map((i) => <span key={i.en} className="tag">{t(i)}</span>)}</div></div>
        </div>
      </section>
      <section className="py-14">
        <SectionHeading n="03" title={u.featured} />
        <div className="grid gap-5 md:grid-cols-3">{feat.map((p, i) => <ProjectCard key={p.id} p={p} large={i === 0} />)}</div>
        <Link to="/projects" className="btn btn-ghost mt-8">{u.allProjects}<ArrowRight size={16} /></Link>
      </section>
      <section className="py-14">
        <SectionHeading n="04" title={u.expT} />
        <ExperienceTimeline />
        <Link to="/experience" className="btn btn-ghost mt-10">{u.viewExp}<ArrowRight size={16} /></Link>
      </section>
      <section className="py-14">
        <SectionHeading n="05" title={u.certT} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{certifications.slice(0, 4).map((c) => <CertificationCard key={c.id} c={c} />)}</div>
        <Link to="/certifications" className="btn btn-ghost mt-8">{u.allCerts}<ArrowRight size={16} /></Link>
      </section>
      <section className="py-14">
        <SectionHeading n="06" title={u.contactT} />
        <p className="max-w-xl text-lg">{u.contactP}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a className="btn btn-primary" href={site.gmailUrl} target="_blank" rel="noreferrer"><Mail size={16} />{site.email}</a>
          <a className="btn btn-ghost" href={site.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} />LinkedIn</a>
          {site.github && <a className="btn btn-ghost" href={site.github} target="_blank" rel="noreferrer"><Github size={16} />GitHub</a>}
        </div>
      </section>
    </div>
  )
}

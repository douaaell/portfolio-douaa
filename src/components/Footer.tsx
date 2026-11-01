import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail } from 'lucide-react'
import { useI18n } from '../i18n'
import { site } from '../data/site'
export default function Footer() {
  const { u } = useI18n()
  return (
    <footer className="mt-24 bg-[#171717] text-[#F7F6F2]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 md:flex-row md:items-center md:justify-between">
        <div><p className="font-display text-2xl">{site.name}</p><p className="mt-1 text-sm text-[#A3A39C]">{u.foot}</p></div>
        <div className="flex flex-wrap gap-5 text-sm">
          <Link to="/projects">{u.projects}</Link><Link to="/experience">{u.experience}</Link><Link to="/certifications">{u.certs}</Link><Link to="/contact">{u.contact}</Link>
        </div>
        <div className="flex gap-4">
          <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
          {site.github && <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20} /></a>}
          <a href={site.gmailUrl} target="_blank" rel="noreferrer" aria-label="Gmail"><Mail size={20} /></a>
        </div>
      </div>
    </footer>
  )
}

import { useState, type FormEvent } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { useI18n, useTitle } from '../i18n'
import { site } from '../data/site'
export default function Contact() {
  const { u } = useI18n(); useTitle(u.contact)
  const [f, setF] = useState({ name: '', email: '', msg: '' })
  const submit = (e: FormEvent) => {
    e.preventDefault()
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(site.email)}&su=${encodeURIComponent('PFE 2027 — ' + f.name)}&body=${encodeURIComponent(f.msg + '\n\nDe : ' + f.name + ' (' + f.email + ')')}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }
  const inp = 'w-full rounded-xl border border-line bg-card p-3 text-sm'
  return (
    <div className="mx-auto max-w-4xl px-5 py-14">
      <h1 className="font-display text-5xl font-bold sm:text-6xl">{u.contactT}</h1>
      <p className="mt-4 max-w-xl text-lg text-muted">{u.contactP}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a className="btn btn-primary" href={site.gmailUrl} target="_blank" rel="noreferrer"><Mail size={16} />{site.email}</a>
        <a className="btn btn-ghost" href={site.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} />LinkedIn</a>
        {site.github && <a className="btn btn-ghost" href={site.github} target="_blank" rel="noreferrer"><Github size={16} />GitHub</a>}
      </div>
      <form onSubmit={submit} className="card mt-12 space-y-4 p-6 hover:translate-y-0">
        <p className="font-mono text-xs text-muted">{u.form}</p>
        <label className="block text-sm">{u.name}<input required className={inp} value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} /></label>
        <label className="block text-sm">{u.email}<input required type="email" className={inp} value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} /></label>
        <label className="block text-sm">{u.msg}<textarea required rows={5} className={inp} value={f.msg} onChange={(e) => setF({ ...f, msg: e.target.value })} /></label>
        <button className="btn btn-primary">{u.send}</button>
      </form>
    </div>
  )
}

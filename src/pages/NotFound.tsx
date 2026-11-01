import { Link } from 'react-router-dom'
import { useI18n, useTitle } from '../i18n'
export default function NotFound({ back = '/projects' }: { back?: string }) {
  const { u } = useI18n(); useTitle('404')
  return <div className="mx-auto max-w-6xl px-5 py-28"><p className="font-mono text-accent">404</p><h1 className="mt-2 font-display text-5xl font-bold">{u.nf}</h1><p className="mt-3 text-muted">{u.nfp}</p><Link to={back} className="btn btn-primary mt-8">{u.back}</Link></div>
}

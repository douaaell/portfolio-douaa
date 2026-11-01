import { useI18n, useTitle } from '../i18n'
import { certifications } from '../data/certifications'
import CertificationCard from '../components/CertificationCard'
export default function Certifications() {
  const { u } = useI18n(); useTitle(u.certs)
  return <div className="mx-auto max-w-6xl px-5 py-14"><h1 className="font-display text-5xl font-bold sm:text-6xl">{u.certs}</h1><p className="mt-4 text-muted">{u.introCert}</p>
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{certifications.map((c) => <CertificationCard key={c.id} c={c} />)}</div></div>
}

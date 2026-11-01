import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Download, ExternalLink, Award, Loader2, Sparkles, Target } from 'lucide-react'
import { useI18n, useTitle } from '../i18n'
import { certifications } from '../data/certifications'
import NotFound from './NotFound'

export default function CertificationDetails() {
  const { certificationId } = useParams()
  const { u, t } = useI18n()
  const c = certifications.find((x) => x.id === certificationId)
  useTitle(c?.name ?? '404')

  const file = c?.file ? encodeURI(c.file) : `/certificat/${certificationId}.pdf`
  const [ok, setOk] = useState(Boolean(c?.file))

  useEffect(() => {
    if (c?.file) {
      setOk(true)
      return
    }
    fetch(file, { method: 'HEAD' })
      .then((r) => setOk(r.ok))
      .catch(() => setOk(false))
  }, [file, c?.file])

  if (!c) return <NotFound back="/certifications" />

  const filename = c.file ? c.file.split('/').pop() : `${c.name}.pdf`

  return (
    <div className="mx-auto max-w-4xl px-5 py-14">
      <Link to="/certifications" className="inline-flex items-center gap-1 text-sm text-muted hover:text-ink">
        <ArrowLeft size={14} />{u.certs}
      </Link>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-sage/60 text-accent">
          <Award size={34} />
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            {c.status === 'in_progress' && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 font-mono text-xs font-medium text-amber-600 dark:text-amber-400">
                <Loader2 size={12} className="animate-spin" />
                {u.inProgress}
              </span>
            )}
            {c.status === 'planned' && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 font-mono text-xs font-medium text-sky-600 dark:text-sky-400">
                <Sparkles size={12} />
                {u.planned}
              </span>
            )}
          </div>
          <h1 className="mt-3 font-display text-3xl font-bold sm:text-5xl">{c.name}</h1>
          <p className="mt-2 text-lg text-accent font-medium">{c.org}</p>
        </div>
      </div>

      {/* Description & Details for learning paths / in progress certifications */}
      {c.desc && (
        <div className="mt-8 card p-6 space-y-4">
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            {t(c.desc)}
          </p>

          {c.skills && c.skills.length > 0 && (
            <div className="pt-2">
              <h3 className="mb-2 font-mono text-xs uppercase text-accent font-semibold">
                {u.targetSkills}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {c.skills.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {c.objective && (
            <div className="rounded-xl border border-line bg-bg/50 p-4">
              <h3 className="flex items-center gap-1.5 font-mono text-xs uppercase text-accent font-semibold mb-1">
                <Target size={14} />
                {u.objective}
              </h3>
              <p className="text-sm text-muted">{t(c.objective)}</p>
            </div>
          )}

          {c.link && (
            <div className="pt-2">
              <a
                className="btn btn-primary"
                href={c.link}
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink size={16} />
                {u.officialPath}
              </a>
            </div>
          )}
        </div>
      )}

      {/* PDF Viewer for completed certifications */}
      {ok ? (
        <>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn btn-primary" href={file} target="_blank" rel="noreferrer">
              <ExternalLink size={16} />{u.openCert}
            </a>
            <a className="btn btn-ghost" href={file} download={filename}>
              <Download size={16} />{u.dlCert}
            </a>
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-card shadow-sm">
            <div className="flex items-center justify-between border-b border-line px-4 py-2.5 bg-bg/60">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
              </div>
              <span className="font-mono text-xs text-muted">{filename}</span>
            </div>
            <iframe
              src={file}
              title={c.name}
              className="h-[75vh] w-full bg-white"
            />
          </div>
        </>
      ) : !c.desc ? (
        <p className="mt-8 rounded-xl border border-dashed border-line p-8 text-center text-sm text-muted">
          {u.certMissing} {certificationId}.pdf
        </p>
      ) : null}
    </div>
  )
}

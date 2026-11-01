import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ChevronLeft, ChevronRight, Github, ExternalLink, Maximize2, X } from 'lucide-react'
import { useI18n, useTitle } from '../i18n'
import { projects } from '../data/projects'
import { Shot } from '../components/ProjectCard'
import NotFound from './NotFound'

export default function ProjectDetails() {
  const { projectId } = useParams()
  const { u, t } = useI18n()
  const p = projects.find((x) => x.id === projectId)
  useTitle(p?.name ?? '404')

  const [activeIdx, setActiveIdx] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)

  if (!p) return <NotFound />

  const ph = <p className="rounded-xl border border-dashed border-line p-4 font-mono text-xs text-muted">{u.ph}</p>
  const screenshots = p.screenshots && p.screenshots.length > 0 ? p.screenshots : []
  const currentImg = screenshots[activeIdx] || screenshots[0]

  const nextImg = () => {
    if (screenshots.length > 0) {
      setActiveIdx((prev) => (prev + 1) % screenshots.length)
    }
  }

  const prevImg = () => {
    if (screenshots.length > 0) {
      setActiveIdx((prev) => (prev - 1 + screenshots.length) % screenshots.length)
    }
  }

  return (
    <article className="mx-auto max-w-4xl px-5 py-14">
      <Link to="/projects" className="inline-flex items-center gap-1 text-sm text-muted hover:text-ink">
        <ArrowLeft size={14} />{u.projects}
      </Link>
      <p className="mt-8 font-mono text-xs uppercase text-accent">
        {u[`cat_${p.cat}` as 'cat_ia']} · {p.period}
      </p>
      <h1 className="mt-2 font-display text-4xl font-bold sm:text-6xl">{p.name}</h1>
      <p className="mt-4 text-lg text-muted">{t(p.desc)}</p>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {p.tech.map((x) => <span key={x} className="tag">{x}</span>)}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        {p.github && (
          <a className="btn btn-ghost" href={p.github} target="_blank" rel="noreferrer">
            <Github size={16} />{u.gh}
          </a>
        )}
        {p.demo && (
          <a className="btn btn-ghost" href={p.demo} target="_blank" rel="noreferrer">
            <ExternalLink size={16} />{u.demo}
          </a>
        )}
      </div>

      {/* Screenshots Gallery */}
      <section className="mt-10">
        {screenshots.length > 0 ? (
          <div className="space-y-4">
            {/* Main Window */}
            <div className="group relative overflow-hidden rounded-2xl border border-line bg-card shadow-sm">
              <div className="flex items-center justify-between border-b border-line px-4 py-2.5 bg-bg/60">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-line" />
                    <span className="h-2.5 w-2.5 rounded-full bg-line" />
                    <span className="h-2.5 w-2.5 rounded-full bg-line" />
                  </div>
                  <span className="ml-2 font-mono text-xs text-muted">
                    {activeIdx + 1} / {screenshots.length}
                  </span>
                </div>
                <button
                  onClick={() => setModalOpen(true)}
                  className="flex items-center gap-1 rounded-md px-2 py-1 text-xs text-muted hover:bg-sage/40 hover:text-accent transition"
                  title={u.zoom}
                >
                  <Maximize2 size={13} />
                  <span>{u.zoom}</span>
                </button>
              </div>

              {/* Display Area */}
              <div className="relative flex min-h-[260px] sm:min-h-[420px] items-center justify-center bg-bg/40 p-2 sm:p-4">
                <img
                  src={currentImg}
                  alt={`${p.name} screenshot ${activeIdx + 1}`}
                  onClick={() => setModalOpen(true)}
                  className="max-h-[500px] w-full rounded-lg object-contain cursor-zoom-in transition duration-200"
                />

                {screenshots.length > 1 && (
                  <>
                    <button
                      onClick={(e) => { e.stopPropagation(); prevImg() }}
                      aria-label="Previous image"
                      className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-line bg-card/90 p-2 text-ink shadow backdrop-blur transition hover:bg-card hover:scale-105"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); nextImg() }}
                      aria-label="Next image"
                      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-line bg-card/90 p-2 text-ink shadow backdrop-blur transition hover:bg-card hover:scale-105"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Thumbnails Row */}
            {screenshots.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 scrollbar-thin">
                {screenshots.map((s, idx) => (
                  <button
                    key={s}
                    onClick={() => setActiveIdx(idx)}
                    className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-lg border-2 transition ${
                      activeIdx === idx
                        ? 'border-accent ring-2 ring-accent/30 shadow'
                        : 'border-line opacity-60 hover:opacity-100 hover:border-muted'
                    }`}
                  >
                    <img src={s} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          <Shot label={u.shot} />
        )}
      </section>

      {/* Lightbox Modal */}
      {modalOpen && screenshots.length > 0 && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[92vh] max-w-[94vw] flex-col items-center"
          >
            <div className="absolute -top-12 right-0 flex items-center gap-4 text-white">
              <span className="font-mono text-sm opacity-80">
                {activeIdx + 1} / {screenshots.length}
              </span>
              <button
                onClick={() => setModalOpen(false)}
                className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            <img
              src={currentImg}
              alt=""
              className="max-h-[85vh] max-w-[92vw] rounded-xl object-contain shadow-2xl"
            />

            {screenshots.length > 1 && (
              <>
                <button
                  onClick={prevImg}
                  aria-label="Previous"
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white backdrop-blur hover:bg-black/90 transition"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImg}
                  aria-label="Next"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white backdrop-blur hover:bg-black/90 transition"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </div>
        </div>
      )}

      <section className="mt-12">
        <h2 className="mb-3 font-display text-2xl font-bold">{u.features}</h2>
        {p.features.length ? (
          <ul className="list-disc space-y-2 pl-5 text-muted">
            {p.features.map((f, i) => <li key={i}>{t(f)}</li>)}
          </ul>
        ) : ph}
      </section>

      <section className="mt-12">
        <h2 className="mb-4 font-display text-2xl font-bold">{u.arch}</h2>
        {p.arch ? (
          <div className="flex flex-wrap items-center gap-2" role="img" aria-label={p.arch.join(' → ')}>
            {p.arch.map((a, i) => (
              <span key={a} className="flex items-center gap-2">
                <span className="rounded-xl border border-accent bg-sage/50 px-4 py-3 text-sm font-medium">{a}</span>
                {i < p.arch!.length - 1 && <ChevronRight size={18} className="text-accent" />}
              </span>
            ))}
          </div>
        ) : ph}
      </section>
    </article>
  )
}

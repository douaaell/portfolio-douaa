import { useI18n } from '../i18n'
import { experiences } from '../data/experiences'
export default function ExperienceTimeline({ detailed = false }: { detailed?: boolean }) {
  const { u, t } = useI18n()
  return (
    <ol className="relative ml-2 border-l border-line">
      {experiences.map((e) => (
        <li key={e.id} className="relative pb-12 pl-8 last:pb-0">
          <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent" />
          <p className="font-mono text-xs text-muted">{e.period} · {e.place}</p>
          <h3 className="mt-1 font-display text-2xl font-bold">{t(e.role)} — <span className="text-accent">{e.company}</span></h3>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted">
            {(detailed ? e.tasks : e.tasks.slice(0, 2)).map((x, i) => <li key={i}>{t(x)}</li>)}
          </ul>
          {detailed && <p className="mt-4 rounded-xl bg-sage/50 p-4 text-sm"><strong>{u.projectEnd} : </strong>{t(e.final)}</p>}
          <div className="mt-4 flex flex-wrap gap-1.5">{e.tech.map((x) => <span key={x} className="tag">{x}</span>)}</div>
        </li>
      ))}
    </ol>
  )
}

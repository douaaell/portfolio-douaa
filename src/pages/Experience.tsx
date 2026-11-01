import { useI18n, useTitle } from '../i18n'
import ExperienceTimeline from '../components/ExperienceTimeline'
export default function Experience() {
  const { u } = useI18n(); useTitle(u.experience)
  return <div className="mx-auto max-w-4xl px-5 py-14"><h1 className="mb-12 font-display text-5xl font-bold sm:text-6xl">{u.expT}</h1><ExperienceTimeline detailed /></div>
}

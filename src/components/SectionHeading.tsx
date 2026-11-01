export default function SectionHeading({ n, title }: { n: string; title: string }) {
  return (
    <div className="mb-10 flex items-end gap-4 border-b border-line pb-4">
      <span className="font-mono text-sm text-accent">{n}</span>
      <h2 className="font-display text-3xl font-bold sm:text-4xl">{title}</h2>
    </div>
  )
}

export function TestimonialCard({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <article className="surface-card p-6">
      <div className="mb-6 flex gap-1 text-accent-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
      <p className="text-base leading-8 text-ink-700">“{quote}”</p>
      <div className="mt-6">
        <p className="font-semibold text-ink-900">{name}</p>
        <p className="text-sm text-ink-500">{role}</p>
      </div>
    </article>
  );
}

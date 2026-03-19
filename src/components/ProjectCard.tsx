import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ProjectCard({ project, locale, cta }: { project: any; locale: 'en' | 'ar'; cta: string }) {
  // Gracefully handle both localized object maps (old static) and direct strings (new API)
  const title = typeof project.title === 'string' ? project.title : project.title?.[locale];
  const excerpt = project.short_description || (project.excerpt && project.excerpt[locale]);
  const location = typeof project.location === 'string' ? project.location : project.location?.[locale];
  const coverImage = project.cover_image || project.cover;
  return (
    <article className="h-full">
      <Link
        to={`/projects/${project.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-black/10 bg-surface-strong outline-none transition duration-500 hover:-translate-y-1 hover:shadow-card focus-visible:ring-2 focus-visible:ring-brand-900/35 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base dark:border-white/10"
      >
        <div className="overflow-hidden bg-black/5">
          <img
            src={coverImage}
            alt={title}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
          />
        </div>

        <div className="flex flex-1 flex-col px-5 py-6">
          <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-ink-500">
            <span>{location}</span>
            <span aria-hidden="true">&bull;</span>
            <span>{project.year}</span>
          </div>

          <h3 className="mt-4 text-[1.6rem] font-semibold uppercase leading-tight text-ink-900">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-ink-500">{excerpt}</p>

          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-ink-900 transition group-hover:gap-3">
            {cta}
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </article>
  );
}

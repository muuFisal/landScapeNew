import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '@/data/projects';

export function ProjectCard({ project, locale, cta }: { project: Project; locale: 'en' | 'ar'; cta: string }) {
  return (
    <article className="group h-full overflow-hidden bg-surface-strong transition duration-300 hover:-translate-y-1">
      <div className="overflow-hidden bg-black/5">
        <img
          src={project.cover}
          alt={project.title[locale]}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex h-full flex-col px-1 py-5">
        <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-ink-500">
          <span>{project.location[locale]}</span>
          <span>•</span>
          <span>{project.year}</span>
        </div>
        <h3 className="mt-4 text-[1.65rem] font-extrabold uppercase leading-tight text-ink-900">{project.title[locale]}</h3>
        <p className="mt-3 text-sm leading-7 text-ink-500">{project.excerpt[locale]}</p>
        <Link to={`/projects/${project.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-ink-900 transition hover:gap-3">
          {cta}
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

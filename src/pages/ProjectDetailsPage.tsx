import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { ProjectHeroSlider } from '@/components/projects/ProjectHeroSlider';
import { ButtonLink } from '@/components/ui/Button';
import { Seo } from '@/components/ui/Seo';
import { projects } from '@/data/projects';

export function ProjectDetailsPage() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const locale = i18n.language === 'ar' ? 'ar' : 'en';
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="section-space pt-24 lg:pt-32">
        <div className="container-shell text-center">
          <h1 className="font-display text-5xl font-semibold">{t('notFound.title')}</h1>
          <p className="mt-4 text-ink-500">{t('notFound.description')}</p>
          <div className="mt-8 flex justify-center">
            <ButtonLink to="/projects">{t('common.backToProjects')}</ButtonLink>
          </div>
        </div>
      </section>
    );
  }

  const heroImages = Array.from(new Set([project.cover, ...project.gallery]));

  return (
    <>
      <Seo title={`${project.title[locale]} | MDO Landscape`} description={project.excerpt[locale]} path={`/projects/${project.slug}`} />

      <ProjectHeroSlider
        images={heroImages}
        title={project.title[locale]}
        description={project.summary[locale]}
        meta={[project.location[locale], project.year]}
      />

      <section className="section-space pt-10 lg:pt-12">
        <div className="container-shell">
          <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-ink-500">
            <Link to="/projects" className="text-brand-700 dark:text-brand-500">
              {t('common.backToProjects')}
            </Link>
            <span aria-hidden="true">&bull;</span>
            <span>{project.location[locale]}</span>
            <span aria-hidden="true">&bull;</span>
            <span>{project.year}</span>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="surface-card p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700 dark:text-brand-500">{t('projectDetails.projectFacts')}</p>
              <div className="mt-5 grid gap-4 text-sm text-ink-500">
                <div>
                  <span className="font-semibold text-ink-900">{t('projectDetails.location')}:</span> {project.location[locale]}
                </div>
                <div>
                  <span className="font-semibold text-ink-900">{t('projectDetails.area')}:</span> {project.area}
                </div>
                <div>
                  <span className="font-semibold text-ink-900">{t('projectDetails.year')}:</span> {project.year}
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags[locale].map((tag) => (
                    <span key={tag} className="rounded-full bg-surface-muted px-3 py-1 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="surface-card p-6">
                <h2 className="font-display text-3xl font-semibold text-ink-900">{t('projectDetails.challenge')}</h2>
                <p className="mt-3 text-sm leading-7 text-ink-500">{project.challenge[locale]}</p>
              </div>
              <div className="surface-card p-6">
                <h2 className="font-display text-3xl font-semibold text-ink-900">{t('projectDetails.solution')}</h2>
                <p className="mt-3 text-sm leading-7 text-ink-500">{project.solution[locale]}</p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {project.gallery.map((image) => (
              <div key={image} className="overflow-hidden rounded-lg">
                <img src={image} alt={project.title[locale]} className="h-72 w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

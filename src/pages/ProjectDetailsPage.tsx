import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { ProjectHeroSlider } from '@/components/projects/ProjectHeroSlider';
import { ButtonLink } from '@/components/ui/Button';
import { Seo } from '@/components/ui/Seo';
import { useProjectDetails, useRelatedProjects } from '@/hooks/useProjects';
import { ProjectCard } from '@/components/ProjectCard';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export function ProjectDetailsPage() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const locale = i18n.language === 'ar' ? 'ar' : 'en';
  
  const { project, loading } = useProjectDetails(slug);
  const { related, loading: relatedLoading } = useRelatedProjects(slug);

  if (loading) {
    return (
      <section className="section-space pt-24 lg:pt-32 flex min-h-[60vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-ink-300" />
      </section>
    );
  }

  if (!project) {
    return (
      <section className="section-space pt-24 lg:pt-32">
        <div className="container-shell text-center">
          <h1 className="font-display text-4xl font-semibold">{t('notFound.title')}</h1>
          <p className="mt-4 text-ink-500">{t('notFound.description')}</p>
          <div className="mt-8 flex justify-center">
            <ButtonLink to="/projects">{t('common.backToProjects')}</ButtonLink>
          </div>
        </div>
      </section>
    );
  }

  const heroImages = project.gallery && project.gallery.length > 0
    ? project.gallery.map(g => g.image)
    : [];

  return (
    <>
      <Seo title={`${project.title} | MDO Landscape`} description={project.short_description} path={`/projects/${project.slug}`} />

      <ProjectHeroSlider
        images={heroImages.length > 0 ? heroImages : []}
        title={project.title}
        description={project.short_description}
        meta={[project.location, project.year]}
      />

      <section className="section-space pt-10 lg:pt-12">
        <div className="container-shell">
          <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-ink-500">
            <Link to="/projects" className="text-brand-700 dark:text-brand-500 hover:text-brand-900 transition">
              {t('common.backToProjects')}
            </Link>
            <span aria-hidden="true">&bull;</span>
            <span>{project.location}</span>
            <span aria-hidden="true">&bull;</span>
            <span>{project.year}</span>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="surface-card p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700 dark:text-brand-500">{t('projectDetails.projectFacts')}</p>
              <div className="mt-5 grid gap-4 text-sm text-ink-500">
                <div>
                  <span className="font-semibold text-ink-900">{t('projectDetails.location')}:</span> {project.location}
                </div>
                <div>
                  <span className="font-semibold text-ink-900">{t('projectDetails.area')}:</span> {project.area}
                </div>
                <div>
                  <span className="font-semibold text-ink-900">{t('projectDetails.year')}:</span> {project.year}
                </div>
                {project.facts?.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.facts.map((tag) => (
                      <span key={tag} className="rounded-full bg-surface-muted px-3 py-1 text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="grid gap-6">
              {project.challenge && (
                <div className="surface-card p-6">
                  <h2 className="font-display text-3xl font-semibold text-ink-900">{project.challenge.title || t('projectDetails.challenge')}</h2>
                  <p className="mt-3 text-sm leading-7 text-ink-500">{project.challenge.description}</p>
                </div>
              )}
              {project.solution && (
                <div className="surface-card p-6">
                  <h2 className="font-display text-3xl font-semibold text-ink-900">{project.solution.title || t('projectDetails.solution')}</h2>
                  <p className="mt-3 text-sm leading-7 text-ink-500">{project.solution.description}</p>
                </div>
              )}
            </div>
          </div>

          {project.gallery && project.gallery.length > 0 && (
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {project.gallery.map((galleryItem) => (
                <div key={galleryItem.id} className="overflow-hidden rounded-lg">
                  <img src={galleryItem.image} alt={project.title} className="h-72 w-full object-cover" />
                </div>
              ))}
            </div>
          )}
          
          {relatedLoading ? (
             <div className="mt-20 flex w-full items-center justify-center">
               <Loader2 className="h-8 w-8 animate-spin text-ink-300" />
             </div>
          ) : related.length > 0 && (
            <AnimatedSection animation="up" className="mt-24 lg:mt-32">
              <h2 className="font-display text-3xl font-semibold text-ink-900 mb-8">{t('projectDetails.relatedProjects', 'Related Projects')}</h2>
              <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                {related.slice(0, 3).map((relatedProject) => (
                  <ProjectCard key={relatedProject.slug} project={relatedProject as any} locale={locale} cta={t('common.viewProject')} />
                ))}
              </div>
            </AnimatedSection>
          )}

        </div>
      </section>
    </>
  );
}

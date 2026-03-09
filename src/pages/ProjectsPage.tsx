import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { ProjectCard } from '@/components/ProjectCard';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Seo } from '@/components/ui/Seo';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { filterProjectsByService } from '@/data/projects';
import { services, type ProjectServiceFilter, getProjectsPath, isServiceSlug } from '@/data/services';
import { cn } from '@/utils/cn';

export function ProjectsPage() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language === 'ar' ? 'ar' : 'en';
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get('service');
  const activeFilter: ProjectServiceFilter = isServiceSlug(searchValue) ? searchValue : 'all';

  useEffect(() => {
    if (searchValue && !isServiceSlug(searchValue)) {
      setSearchParams({}, { replace: true });
    }
  }, [searchValue, setSearchParams]);

  const filterOptions = [
    { key: 'all' as const, label: t('projects.filters.all') },
    ...services.map((service) => ({
      key: service.slug,
      label: t(`servicesData.${service.slug}.title`),
    })),
  ];

  const filteredProjects = filterProjectsByService(activeFilter);

  const activeFilterLabel =
    activeFilter === 'all' ? t('projects.filters.all') : t(`servicesData.${activeFilter}.title`);

  const handleFilterChange = (filter: ProjectServiceFilter) => {
    setSearchParams(filter === 'all' ? {} : { service: filter }, { replace: true });
  };

  return (
    <>
      <Seo title={t('seo.projects.title')} description={t('seo.projects.description')} path={getProjectsPath(activeFilter === 'all' ? undefined : activeFilter)} />

      <AnimatedSection className="section-space pt-24 lg:pt-32" animation="down">
        <div className="container-shell">
          <SectionHeading eyebrow={t('projects.eyebrow')} title={t('projects.title')} description={t('projects.description')} />

          <div className="mb-8 flex flex-wrap gap-3" aria-label={t('projects.filtersLabel')}>
            {filterOptions.map((filter) => (
              <button
                key={filter.key}
                type="button"
                aria-pressed={activeFilter === filter.key}
                onClick={() => handleFilterChange(filter.key)}
                className={cn(
                  'rounded-full border px-4 py-2.5 text-sm font-medium outline-none transition focus-visible:ring-2 focus-visible:ring-brand-900/35 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base',
                  activeFilter === filter.key
                    ? 'border-brand-700 bg-brand-700 text-white shadow-soft'
                    : 'border-black/5 bg-surface-strong text-ink-500 hover:text-ink-900 dark:border-white/10',
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 rounded-[1.5rem] border border-black/5 bg-surface-muted/65 px-5 py-4 dark:border-white/10">
            <p className="text-sm leading-7 text-ink-600" role="status">
              {activeFilter === 'all'
                ? t('projects.allSummary', { count: filteredProjects.length })
                : t('projects.activeSummary', { count: filteredProjects.length, service: activeFilterLabel })}
            </p>

            {activeFilter !== 'all' && (
              <button
                type="button"
                onClick={() => handleFilterChange('all')}
                className="rounded-full border border-black/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink-700 outline-none transition hover:border-brand-900/25 hover:text-ink-900 focus-visible:ring-2 focus-visible:ring-brand-900/35 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base dark:border-white/10"
              >
                {t('projects.resetFilter')}
              </button>
            )}
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} locale={locale} cta={t('common.viewProject')} />
              ))}
            </div>
          ) : (
            <div className="rounded-[var(--radius-lg)] border border-black/5 bg-surface-muted/70 px-6 py-10 text-center dark:border-white/10">
              <h3 className="text-2xl font-semibold text-ink-900">{t('projects.emptyTitle')}</h3>
              <p className="mt-3 text-sm leading-7 text-ink-500">{t('projects.emptyDescription', { service: activeFilterLabel })}</p>
            </div>
          )}
        </div>
      </AnimatedSection>
    </>
  );
}

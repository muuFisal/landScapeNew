import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { ProjectCard } from '@/components/ProjectCard';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Seo } from '@/components/ui/Seo';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { getProjectsPath } from '@/data/services';
import { cn } from '@/utils/cn';
import { useWorkPage, useProjectsList } from '@/hooks/useProjects';
import { useServices } from '@/hooks/useServices';

export function ProjectsPage() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language === 'ar' ? 'ar' : 'en';
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get('service');
  const activeFilter = searchValue || 'all';

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  const { data: pageData } = useWorkPage();
  const { services } = useServices();
  
  const { projects: filteredProjects, pagination, loading } = useProjectsList({
    page: currentPage,
    per_page: 12,
    service: activeFilter
  });

  const filterOptions = [
    { key: 'all', label: t('projects.filters.all') },
    ...services
      .filter((s) => s.show_in_projects_filter)
      .map((service) => ({
        key: service.slug,
        label: service.title,
      })),
  ];

  const activeFilterLabel =
    activeFilter === 'all' 
      ? t('projects.filters.all') 
      : services.find((s) => s.slug === activeFilter)?.title || activeFilter;

  const handleFilterChange = (filter: string) => {
    setSearchParams(filter === 'all' ? {} : { service: filter }, { replace: true });
  };

  return (
    <>
      <Seo title={t('seo.projects.title')} description={t('seo.projects.description')} path={getProjectsPath(activeFilter === 'all' ? undefined : activeFilter as any)} />

      <AnimatedSection className="section-space pt-24 lg:pt-32" animation="down">
        <div className="container-shell">
          <SectionHeading 
             eyebrow={pageData?.eyebrow || t('projects.eyebrow')} 
             title={pageData?.title || t('projects.title')} 
             description={pageData?.description || t('projects.description')} 
          />

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

          {loading ? (
             <div className="flex h-64 w-full items-center justify-center">
               <Loader2 className="h-8 w-8 animate-spin text-ink-300" />
             </div>
          ) : filteredProjects.length > 0 ? (
            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project as any} locale={locale} cta={t('common.viewProject')} />
              ))}
            </div>
          ) : (
            <div className="rounded-[var(--radius-lg)] border border-black/5 bg-surface-muted/70 px-6 py-10 text-center dark:border-white/10">
              <h3 className="text-2xl font-semibold text-ink-900">{t('projects.emptyTitle', 'No projects found')}</h3>
              <p className="mt-3 text-sm leading-7 text-ink-500">{t('projects.emptyDescription', 'There are no projects for this filter.')}</p>
            </div>
          )}

          {pagination && pagination.last_page > 1 && (
            <div className="mt-16 flex items-center justify-center gap-2">
              <button 
                 onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                 disabled={currentPage === 1 || loading}
                 className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-ink-600 transition hover:bg-black/5 disabled:opacity-50"
                 aria-label="Previous page"
              >
                 <ChevronLeft className="h-4 w-4 rtl:rotate-180" />
              </button>
              
              <div className="flex items-center gap-1 mx-2">
                 {[...Array(pagination.last_page)].map((_, i) => (
                    <button 
                       key={i} 
                       onClick={() => setCurrentPage(i + 1)}
                       aria-label={`Page ${i + 1}`}
                       className={`h-2.5 rounded-full transition-all ${currentPage === i + 1 ? 'w-8 bg-ink-900' : 'w-2.5 bg-ink-300 hover:bg-ink-500'}`}
                    />
                 ))}
              </div>

              <button 
                 onClick={() => setCurrentPage(p => Math.min(pagination.last_page, p + 1))}
                 disabled={currentPage === pagination.last_page || loading}
                 className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-ink-600 transition hover:bg-black/5 disabled:opacity-50"
                 aria-label="Next page"
              >
                 <ChevronRight className="h-4 w-4 rtl:rotate-180" />
              </button>
            </div>
          )}
        </div>
      </AnimatedSection>
    </>
  );
}

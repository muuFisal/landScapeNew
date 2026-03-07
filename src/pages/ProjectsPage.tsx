import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ProjectCard } from '@/components/ProjectCard';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Seo } from '@/components/ui/Seo';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { projects, type ProjectCategory } from '@/data/projects';
import { cn } from '@/utils/cn';

export function ProjectsPage() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language === 'ar' ? 'ar' : 'en';
  const [activeFilter, setActiveFilter] = useState<'all' | ProjectCategory>('all');
  const filters = t('projects.filters', { returnObjects: true }) as Array<{ key: 'all' | ProjectCategory; label: string }>;

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <Seo title={t('seo.projects.title')} description={t('seo.projects.description')} path="/projects" />
      <AnimatedSection className="section-space pt-24 lg:pt-32" animation="down">
        <div className="container-shell">
          <SectionHeading eyebrow={t('projects.eyebrow')} title={t('projects.title')} description={t('projects.description')} />
          <div className="mb-10 flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={cn(
                  'rounded-full border px-4 py-2 text-sm font-medium transition',
                  activeFilter === filter.key
                    ? 'border-brand-700 bg-brand-700 text-white'
                    : 'border-black/5 bg-surface-strong text-ink-500 hover:text-ink-900 dark:border-white/10',
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} locale={locale} cta={t('common.viewProject')} />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

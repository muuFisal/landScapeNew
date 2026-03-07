import { useTranslation } from 'react-i18next';
import { ProjectCard } from '@/components/ProjectCard';
import { ButtonLink } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { Project } from '@/data/projects';

export function FeaturedProjectsSection({ projects, locale }: { projects: Project[]; locale: 'en' | 'ar' }) {
  const { t } = useTranslation();

  return (
    <AnimatedSection className="section-space" animation="left">
      <div className="container-shell">
        <SectionHeading eyebrow={t('home.projects.eyebrow')} title={t('home.projects.title')} description={t('home.projects.description')} />
        <div className="-mx-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 lg:mx-0 lg:overflow-visible lg:px-0">
          <div className="flex min-w-full gap-4 snap-x-mandatory sm:gap-5 lg:grid lg:grid-cols-3 lg:gap-6">
            {projects.map((project) => (
              <div key={project.slug} className="snap-start-item min-w-[84%] flex-none sm:min-w-[48%] lg:min-w-0 lg:flex-auto">
                <ProjectCard project={project} locale={locale} cta={t('common.viewProject')} />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex justify-center lg:justify-start">
          <ButtonLink to="/projects">{t('common.seeAllProjects')}</ButtonLink>
        </div>
      </div>
    </AnimatedSection>
  );
}

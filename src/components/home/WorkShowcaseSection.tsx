import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import type { Project } from '@/data/projects';

export function WorkShowcaseSection({ projects, locale }: { projects: Project[]; locale: 'en' | 'ar' }) {
  const { t } = useTranslation();

  return (
    <section id="work-grid" className="border-b border-black/10 bg-surface-base py-14 dark:border-white/10 sm:py-16 lg:py-20">
      <div className="container-shell">
        <div className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.36em] text-ink-500">
            {t('home.work.eyebrow')}
          </p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-ink-900 sm:text-5xl lg:text-6xl">
            {t('home.work.title')}
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-ink-500 sm:text-base sm:leading-8">
            {t('home.work.description')}
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-12 lg:gap-6">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="group lg:col-span-7"
          >
            <a href={`/projects/${projects[0].slug}`} className="block overflow-hidden rounded-lg bg-black text-white">
              <div className="overflow-hidden">
                <img src={projects[0].cover} alt={projects[0].title[locale]} className="h-[26rem] w-full object-cover grayscale transition duration-700 group-hover:scale-[1.04]" />
              </div>
              <div className="space-y-4 p-6 sm:p-8">
                <p className="text-[11px] uppercase tracking-[0.32em] text-white/48">{projects[0].location[locale]}</p>
                <h3 className="font-display text-3xl font-semibold sm:text-4xl">{projects[0].title[locale]}</h3>
                <p className="max-w-xl text-sm leading-7 text-white/70 sm:text-base">{projects[0].excerpt[locale]}</p>
              </div>
            </a>
          </motion.article>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {projects.slice(1, 3).map((project, index) => (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className="group"
              >
                <a href={`/projects/${project.slug}`} className="block overflow-hidden rounded-lg border border-black/10 bg-surface-strong dark:border-white/10">
                  <div className="overflow-hidden">
                    <img src={project.cover} alt={project.title[locale]} className="h-72 w-full object-cover grayscale transition duration-700 group-hover:scale-[1.04]" />
                  </div>
                  <div className="space-y-3 p-5 sm:p-6">
                    <p className="text-[11px] uppercase tracking-[0.32em] text-ink-400 dark:text-white/40">{project.location[locale]}</p>
                    <h3 className="font-display text-2xl font-semibold text-ink-900">{project.title[locale]}</h3>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

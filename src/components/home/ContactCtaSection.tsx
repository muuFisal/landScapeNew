import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ButtonLink } from '@/components/ui/Button';

export function ContactCtaSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-surface-base py-14 sm:py-16 lg:py-20">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-[40px] bg-ink-900 px-6 py-12 text-surface-base sm:px-10 sm:py-16 lg:px-16 lg:py-20 shadow-soft transition-colors duration-500"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-surface-base/50">{t('home.help.eyebrow')}</p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-[4rem]">
            {t('home.help.title')}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-surface-base/70 sm:text-lg sm:leading-loose">
            {t('home.help.description')}
          </p>
          <div className="mt-10">
            <ButtonLink to="/contact" className="bg-surface-base text-ink-900 hover:scale-105 active:scale-95 transition-all">
              {t('home.help.button')}
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

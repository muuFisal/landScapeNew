import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function WhyChooseSection() {
  const { t } = useTranslation();
  const reasons = t('home.whyChoose.items', { returnObjects: true }) as Array<{ title: string; body: string }>;

  return (
    <section className="border-b border-black/10 bg-black py-14 text-white dark:border-white/10 sm:py-16 lg:py-20">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.76fr_1.24fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-[11px] uppercase tracking-[0.36em] text-white/42">{t('home.whyChoose.eyebrow')}</p>
          <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-[3rem]">
            {t('home.whyChoose.title')}
          </h2>
          <p className="max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
            {t('home.whyChoose.description')}
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {reasons.map((reason, index) => (
            <motion.article
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: index * 0.06 }}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
            >
              <p className="text-[11px] uppercase tracking-[0.3em] text-white/34">0{index + 1}</p>
              <h3 className="mt-4 font-display text-2xl font-semibold sm:text-[1.9rem]">{reason.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/68">{reason.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

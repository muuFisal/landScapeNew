import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const images = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=80',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1800&q=80',
];

export function ServicesSection() {
  const { t } = useTranslation();
  const items = t('home.services.items', { returnObjects: true }) as Array<{ title: string; body: string }>;

  return (
    <section id="services" className="border-b border-black/10 bg-surface-muted/40 py-14 dark:border-white/10 sm:py-16 lg:py-20">
      <div className="container-shell grid items-start gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-[11px] uppercase tracking-[0.36em] text-ink-500">
            {t('home.services.eyebrow')}
          </p>
          <h2 className="font-display text-4xl font-semibold leading-tight text-ink-900 sm:text-5xl lg:text-[3.5rem]">
            {t('home.services.title')}
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-ink-500 sm:text-base sm:leading-8">
            {t('home.services.description')}
          </p>

          <div className="space-y-5 pt-4">
            {items.map((item, index) => (
              <div key={item.title} className="border-t border-black/10 pt-5 dark:border-white/10">
                <p className="text-[11px] uppercase tracking-[0.3em] text-ink-400 dark:text-white/36">0{index + 1}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-ink-900 sm:text-[2rem]">{item.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-ink-500">{item.body}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="grid gap-5 sm:grid-cols-2"
        >
          {images.map((image, index) => (
            <div key={image} className="overflow-hidden rounded-[30px] bg-black">
              <img
                src={image}
                alt={index === 0 ? 'Landscape geometry' : 'Garden materiality'}
                className={`w-full object-cover grayscale ${index === 0 ? 'h-[28rem] sm:h-[34rem]' : 'h-[20rem] sm:mt-16 sm:h-[26rem]'}`}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

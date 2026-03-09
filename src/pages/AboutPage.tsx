import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Seo } from '@/components/ui/Seo';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { cn } from '@/utils/cn';

type AboutValue = {
  title: string;
  body: string;
};

type AboutDirectionCard = {
  key: 'mission' | 'vision';
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  animation: 'left' | 'right';
  imagePositionClassName: string;
};

function DirectionStoryCard({
  card,
  isArabic,
}: {
  card: AboutDirectionCard;
  isArabic: boolean;
}) {
  return (
    <article className="group relative isolate min-h-[30rem] overflow-hidden rounded-[2rem] border border-black/10 bg-black shadow-card dark:border-white/10 sm:min-h-[34rem]">
      <img
        src={card.image}
        alt={card.alt}
        className={cn(
          'absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-[1.03]',
          card.imagePositionClassName
        )}
      />

      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.02)_0%,rgba(5,5,5,0.08)_28%,rgba(5,5,5,0.28)_54%,rgba(5,5,5,0.88)_100%)]" />
      <div
        className={cn(
          'absolute inset-0',
          isArabic
            ? 'bg-[radial-gradient(circle_at_82%_78%,rgba(0,0,0,0.44),transparent_34%)]'
            : 'bg-[radial-gradient(circle_at_18%_78%,rgba(0,0,0,0.44),transparent_34%)]'
        )}
      />
      <div className="absolute inset-x-0 bottom-0 h-[48%] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.16)_18%,rgba(0,0,0,0.52)_58%,rgba(0,0,0,0.9)_100%)]" />

      <div className={cn('relative flex h-full items-end p-5 sm:p-7 lg:p-8', isArabic ? 'justify-end' : 'justify-start')}>
        <div
          className={cn(
            'w-full max-w-[30rem] text-white [text-shadow:0_10px_40px_rgba(0,0,0,0.38)]',
            isArabic ? 'text-right' : 'text-left'
          )}
        >
          <div className={cn('flex items-center gap-3', isArabic && 'flex-row-reverse')}>
            <span
              className={cn(
                'text-[10px] font-semibold text-white',
                isArabic ? 'tracking-[0.1em]' : 'uppercase tracking-[0.28em]'
              )}
            >
              {card.eyebrow}
            </span>
            <span className="h-px flex-1 bg-white/24" />
          </div>

          <h2
            className={cn(
              'mt-5 font-display font-semibold leading-[1.06] text-white sm:mt-6',
              isArabic
                ? 'max-w-[14ch] text-[2rem] sm:text-[2.3rem] lg:text-[2.7rem]'
                : 'max-w-[15ch] text-[1.95rem] sm:text-[2.25rem] lg:text-[2.7rem]'
            )}
          >
            {card.title}
          </h2>

          <p
            className={cn(
              'mt-4 text-sm leading-7 text-white/88 sm:text-[0.98rem] sm:leading-7 lg:text-base lg:leading-8',
              isArabic ? 'max-w-[35ch]' : 'max-w-[33ch]'
            )}
          >
            {card.description}
          </p>
        </div>
      </div>
    </article>
  );
}

export function AboutPage() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const values = t('about.values', { returnObjects: true }) as AboutValue[];
  const directionCards: AboutDirectionCard[] = [
    {
      key: 'mission',
      eyebrow: t('about.missionEyebrow'),
      title: t('about.missionTitle'),
      description: t('about.missionDescription'),
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=80',
      alt: t('about.media.missionAlt'),
      animation: 'left',
      imagePositionClassName: 'object-[center_58%]',
    },
    {
      key: 'vision',
      eyebrow: t('about.visionEyebrow'),
      title: t('about.visionTitle'),
      description: t('about.visionDescription'),
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
      alt: t('about.media.visionAlt'),
      animation: 'right',
      imagePositionClassName: 'object-[center_54%]',
    },
  ];

  return (
    <>
      <Seo title={t('seo.about.title')} description={t('seo.about.description')} path="/about" />

      <AnimatedSection className="section-space pt-24 lg:pt-32" animation="left">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16">
          <div>
            <SectionHeading eyebrow={t('about.eyebrow')} title={t('about.title')} description={t('about.description')} />
            <p className="max-w-2xl text-base leading-8 text-ink-500">{t('about.story')}</p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-surface-strong shadow-card dark:border-white/10">
            <img
              src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=80"
              alt={t('about.media.introAlt')}
              className="aspect-[5/6] w-full object-cover object-[center_58%] sm:aspect-[4/3] lg:aspect-[5/6]"
            />
          </div>
        </div>
      </AnimatedSection>

      <section className="section-space bg-surface-muted/30">
        <div className="container-shell grid gap-6 lg:grid-cols-2 lg:gap-8">
          {directionCards.map((card) => (
            <AnimatedSection key={card.key} animation={card.animation}>
              <DirectionStoryCard card={card} isArabic={isArabic} />
            </AnimatedSection>
          ))}
        </div>
      </section>

      <AnimatedSection className="section-space bg-surface-muted/70" animation="right">
        <div className="container-shell">
          <SectionHeading eyebrow={t('about.valuesEyebrow')} title={t('about.valuesTitle')} description={t('about.valuesDescription')} />
          <div className="grid gap-6 lg:grid-cols-3">
            {values.map((item) => (
              <article key={item.title} className="surface-card p-6">
                <h3 className="text-3xl font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-ink-500">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

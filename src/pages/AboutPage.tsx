import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Seo } from '@/components/ui/Seo';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { cn } from '@/utils/cn';
import { useAbout } from '@/hooks/useAbout';

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

          <div
            className={cn(
              'mt-4 text-sm leading-7 text-white/88 sm:text-[0.98rem] sm:leading-7 lg:text-base lg:leading-8 space-y-4 [&>p]:mb-2',
              isArabic ? 'max-w-[35ch]' : 'max-w-[33ch]'
            )}
            dangerouslySetInnerHTML={{ __html: card.description }}
          />
        </div>
      </div>
    </article>
  );
}

export function AboutPage() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const { data, loading } = useAbout();

  const valuesFallback = t('about.values', { returnObjects: true }) as AboutValue[];
  const values = data?.what_shapes_the_work?.items?.map(item => ({
    title: isArabic ? item.title.ar : item.title.en,
    body: isArabic ? item.description.ar : item.description.en,
  })) || valuesFallback;

  const directionCards: AboutDirectionCard[] = [
    {
      key: 'mission',
      eyebrow: data?.mission?.badge || t('about.missionEyebrow'),
      title: data?.mission?.title || t('about.missionTitle'),
      description: data?.mission?.description || t('about.missionDescription'),
      image: data?.mission?.image || 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=80',
      alt: data?.mission?.title || t('about.media.missionAlt'),
      animation: 'left',
      imagePositionClassName: 'object-[center_58%]',
    },
    {
      key: 'vision',
      eyebrow: data?.vision?.badge || t('about.visionEyebrow'),
      title: data?.vision?.title || t('about.visionTitle'),
      description: data?.vision?.description || t('about.visionDescription'),
      image: data?.vision?.image || 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
      alt: data?.vision?.title || t('about.media.visionAlt'),
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
            <SectionHeading
              eyebrow={data?.about?.badge || t('about.eyebrow')}
              title={data?.about?.title || t('about.title')}
              description={loading ? t('about.description') : ''} // Clearing SectionHeading desc if using API for rich body
            />
            {data?.about?.description ? (
              <div
                className="max-w-2xl text-base leading-8 text-ink-500 mt-2 space-y-4 [&>p]:mb-4"
                dangerouslySetInnerHTML={{ __html: data.about.description }}
              />
            ) : (
              <p className="max-w-2xl text-base leading-8 text-ink-500">{t('about.story')}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-surface-strong shadow-card dark:border-white/10">
              <img
                src={data?.about?.image || "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=80"}
                alt={data?.about?.title || t('about.media.introAlt')}
                className="aspect-[4/6] sm:aspect-[3/4] lg:aspect-[4/8] w-full object-cover object-[center_58%]"
              />
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-surface-strong shadow-card dark:border-white/10">
              <img
                src={data?.about?.second_image || "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80"}
                alt={data?.about?.title || t('about.media.introAlt')}
                className="aspect-[4/6] sm:aspect-[3/4] lg:aspect-[4/8] w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* <section className="section-space bg-surface-muted/30">
        <div className="container-shell grid gap-6 lg:grid-cols-2 lg:gap-8">
          {directionCards.map((card) => (
            <AnimatedSection key={card.key} animation={card.animation}>
              <DirectionStoryCard card={card} isArabic={isArabic} />
            </AnimatedSection>
          ))}
        </div>
      </section> */}

      <AnimatedSection className="section-space bg-surface-muted/70" animation="right">
        <div className="container-shell">
          <div className="flex flex-col items-center text-center">
            <SectionHeading
              // eyebrow={data?.what_shapes_the_work?.badge || t('about.valuesEyebrow')}
              title={data?.what_shapes_the_work?.title || t('about.valuesTitle')}
              description={t('about.valuesDescription')}
            />
            {data?.what_shapes_the_work?.description && (
              <div
                className="mb-12 w-full max-w-3xl text-sm leading-7 text-ink-600 sm:text-base space-y-4"
                dangerouslySetInnerHTML={{ __html: data.what_shapes_the_work.description }}
              />
            )}
          </div>
          <div className="flex flex-wrap items-stretch justify-center gap-6 lg:gap-10 w-full mt-4">
            {values.map((item) => (
              <article key={item.title} className="surface-card flex-1 min-w-[280px] sm:min-w-[320px] max-w-[600px] p-8 sm:p-12 flex flex-col justify-center items-center text-center rounded-[2rem]">
                <h3 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-semibold text-ink-900 mb-4">{item.title}</h3>
                <p className="mt-2 text-base sm:text-lg leading-relaxed text-ink-500 max-w-sm">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

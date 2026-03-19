import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/utils/cn';

type ProjectHeroSliderProps = {
  images: string[];
  title: string;
  description: string;
  meta?: string[];
  autoplayMs?: number;
};

export function ProjectHeroSlider({
  images,
  title,
  description,
  meta = [],
  autoplayMs = 5000,
}: ProjectHeroSliderProps) {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const imageSignature = images.join('||');

  useEffect(() => {
    setActiveIndex(0);
  }, [imageSignature]);

  useEffect(() => {
    if (images.length <= 1 || isPaused) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, autoplayMs);

    return () => window.clearInterval(intervalId);
  }, [autoplayMs, images.length, isPaused]);

  const showPrevious = () => {
    setActiveIndex((currentIndex) => (currentIndex - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % images.length);
  };

  if (images.length === 0) return null;

  return (
    <section
      className="relative isolate overflow-hidden bg-black text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={`${image}-${index}`}
            aria-hidden={activeIndex !== index}
            className={cn(
              'absolute inset-0 transition-opacity duration-700 ease-out',
              activeIndex === index ? 'opacity-100' : 'opacity-0',
            )}
          >
            <img
              src={image}
              alt={title}
              className={cn(
                'h-full w-full object-cover transition-transform duration-[1600ms] ease-out',
                activeIndex === index ? 'scale-100' : 'scale-105',
              )}
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/58 to-black/18" />
        <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-black/30 to-transparent" />
      </div>

      <div className="container-shell relative flex min-h-[72vh] items-end pb-24 pt-32 sm:min-h-[78vh] sm:pb-28 sm:pt-36 lg:min-h-[86vh] lg:pb-32 lg:pt-40">
        <div className="max-w-3xl">
          {meta.length > 0 && (
            <div className="mb-6 flex flex-wrap gap-3">
              {meta.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/16 bg-white/8 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-white/78 backdrop-blur-sm sm:text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          )}

          <h1 className="max-w-4xl font-display text-4xl font-semibold uppercase leading-[0.92] text-balance text-white sm:text-5xl lg:text-[4.5rem]">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">{description}</p>
        </div>
      </div>

      {images.length > 1 && (
        <div className="absolute inset-x-0 bottom-6 z-10 sm:bottom-8">
          <div className="container-shell flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={showPrevious}
                aria-label={t('projectDetails.previousImage')}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/16 bg-black/18 text-white backdrop-blur-md transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label={t('projectDetails.nextImage')}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/16 bg-black/18 text-white backdrop-blur-md transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              {images.map((image, index) => (
                <button
                  key={`${image}-indicator-${index}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={t('projectDetails.goToSlide', { number: index + 1 })}
                  aria-pressed={activeIndex === index}
                  className={cn(
                    'h-1.5 rounded-full bg-white/35 transition-all duration-500 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black',
                    activeIndex === index ? 'w-12 bg-white' : 'w-6 hover:bg-white/65',
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

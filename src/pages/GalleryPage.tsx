import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Seo } from '@/components/ui/Seo';
import { galleryItems } from '@/data/gallery';

export function GalleryPage() {
  const { i18n } = useTranslation();
  const locale = i18n.language === 'ar' ? 'ar' : 'en';

  return (
    <>
      <Seo
        title={locale === 'ar' ? 'الجالري | MDO Landscape' : 'Gallery | MDO Landscape'}
        description={
          locale === 'ar'
            ? 'استعرض مجموعة من صور المشاريع والحدائق والمسابح مع عنوان بسيط أسفل كل صورة.'
            : 'Browse a clean visual gallery of landscape, pool, and outdoor living images with simple titles under each image.'
        }
        path="/gallery"
      />

      <section className="relative isolate flex min-h-[60vh] items-center overflow-hidden bg-black text-white">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=80"
          alt="Gallery hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container-shell relative py-32 pt-40 sm:py-36 sm:pt-48 lg:py-40 lg:pt-56">
          <AnimatedSection animation="scale">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/60">MDO Landscape</p>
              <h1 className="mt-5 text-4xl font-extrabold uppercase leading-[0.9] sm:text-6xl lg:text-[7.5rem]">
                {locale === 'ar' ? 'الجالري' : 'Gallery'}
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
                {locale === 'ar'
                  ? 'مجموعة صور واضحة وبسيطة تعرض أعمال الشركة، مع عنوان أسفل كل صورة فقط.'
                  : 'A clean visual gallery showcasing the studio work, with only the image and title for a refined presentation.'}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-space bg-surface-muted">
        <div className="container-shell grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <AnimatedSection key={`${item.title.en}-${index}`} animation={index % 3 === 0 ? 'left' : index % 3 === 1 ? 'up' : 'right'}>
              <figure className="group overflow-hidden rounded-[12px] bg-white shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
                <div className="overflow-hidden">
                  <img src={item.image} alt={item.title[locale]} className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.05]" />
                </div>
                <figcaption className="px-5 py-5 text-lg font-semibold uppercase tracking-[0.08em] text-ink-900">
                  {item.title[locale]}
                </figcaption>
              </figure>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}

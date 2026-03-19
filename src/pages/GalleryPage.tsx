import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Seo } from '@/components/ui/Seo';
import { useGalleryPage, useGalleryItems } from '@/hooks/useGallery';

export function GalleryPage() {
  const { i18n } = useTranslation();
  const locale = i18n.language === 'ar' ? 'ar' : 'en';
  
  const [currentPage, setCurrentPage] = useState(1);
  const { data: heroData } = useGalleryPage();
  const { items, pagination, loading: itemsLoading } = useGalleryItems(currentPage, 12);

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
          src={heroData?.image || "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=80"}
          alt={heroData?.title || "Gallery hero"}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container-shell relative py-32 pt-40 sm:py-36 sm:pt-48 lg:py-40 lg:pt-56">
          <AnimatedSection animation="scale">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/60">MDO Landscape</p>
              <h1 className="mt-5 text-3xl font-semibold uppercase leading-[0.9] sm:text-5xl lg:text-[6.5rem]">
                {heroData?.title || (locale === 'ar' ? 'الجالري' : 'Gallery')}
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
                {heroData?.description || (locale === 'ar'
                  ? 'مجموعة صور واضحة وبسيطة تعرض أعمال الشركة، مع عنوان أسفل كل صورة فقط.'
                  : 'A clean visual gallery showcasing the studio work, with only the image and title for a refined presentation.')}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-space bg-surface-muted min-h-[50vh]">
        <div className="container-shell">
          {itemsLoading ? (
            <div className="flex h-64 w-full items-center justify-center">
              <Loader2 className="h-8 w-8 animate-spin text-ink-300" />
            </div>
          ) : items.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item, index) => (
                <AnimatedSection key={`${item.id}-${index}`} animation={index % 3 === 0 ? 'left' : index % 3 === 1 ? 'up' : 'right'}>
                  <figure className="group overflow-hidden rounded-sm bg-surface-base shadow-soft">
                    <div className="overflow-hidden">
                      <img src={item.image} alt={item.title} className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.05]" />
                    </div>
                    <figcaption className="px-5 py-5 text-lg font-semibold uppercase tracking-[0.08em] text-ink-900">
                      {item.title}
                    </figcaption>
                  </figure>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="flex h-64 w-full flex-col items-center justify-center text-center">
               <p className="text-lg text-ink-500">{locale === 'ar' ? 'لا توجد عناصر لعرضها.' : 'No items to display.'}</p>
            </div>
          )}

          {pagination && pagination.last_page > 1 && (
            <div className="mt-16 flex items-center justify-center gap-2">
              <button 
                 onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                 disabled={currentPage === 1 || itemsLoading}
                 className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-ink-600 transition hover:bg-black/5 disabled:opacity-50"
                 aria-label="Previous page"
              >
                 <ChevronLeft className="h-4 w-4 rtl:rotate-180" />
              </button>
              
              <div className="flex items-center gap-1 mx-2">
                 {[...Array(pagination.last_page)].map((_, i) => (
                    <button 
                       key={i} 
                       onClick={() => setCurrentPage(i + 1)}
                       aria-label={`Page ${i + 1}`}
                       className={`h-2.5 rounded-full transition-all ${currentPage === i + 1 ? 'w-8 bg-ink-900' : 'w-2.5 bg-ink-300 hover:bg-ink-500'}`}
                    />
                 ))}
              </div>

              <button 
                 onClick={() => setCurrentPage(p => Math.min(pagination.last_page, p + 1))}
                 disabled={currentPage === pagination.last_page || itemsLoading}
                 className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-ink-600 transition hover:bg-black/5 disabled:opacity-50"
                 aria-label="Next page"
              >
                 <ChevronRight className="h-4 w-4 rtl:rotate-180" />
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

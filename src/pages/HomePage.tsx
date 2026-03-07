import { ArrowRight, MoveRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Seo } from '@/components/ui/Seo';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ContactCtaSection } from '@/components/home/ContactCtaSection';
import { HomeServicesSection } from '@/components/home/HomeServicesSection';
import { projects } from '@/data/projects';

const homeContent = {
  en: {
    heroTitle: 'MOST DESIRED OUTDOOR',
    heroSubtitle: 'Landscape | Pool | Design | Build |',
    aboutTitle: 'About MDO Landscape',
    aboutBody:
      'MDO Landscape creates elegant outdoor spaces where landscape, architecture, and lifestyle meet in one refined experience. From concept to execution, the studio focuses on clean geometry, layered planting, premium materials, and calm visual storytelling that feels luxurious across every scale.',
    aboutCta: 'Explore the studio',
    projectsTitle: 'Selected Projects',
    projectsBody: 'A curated home-page showcase built with the same visual rhythm: two projects per row, large photography, and strong project titles underneath.',
    whyTitle: 'WHY CHOOSE MDO?',
    whyIntro: "We don't just deliver landscapes; we curate experiences. Here's what sets us apart from other pool and landscape companies:",
    whyItems: [
      {
        title: 'DIRECT, PERSONALIZED COMMUNICATION',
        body: 'Work directly with our founders and studio team for a hands-on, highly personalized process from concept to completion.',
      },
      {
        title: 'EXCLUSIVE, LIMITED-PROJECT APPROACH',
        body: 'We take on a limited number of projects at a time to dedicate maximum focus and attention to each client vision.',
      },
      {
        title: 'UNMATCHED ATTENTION TO DETAIL',
        body: 'Every element of your outdoor space is carefully crafted, from material selection and planting layers to final detailing.',
      },
      {
        title: 'NO COMPROMISE ON QUALITY',
        body: 'The final result is built to feel premium, timeless, and complete in every angle, texture, and arrival moment.',
      },
    ],
    finalTitle: 'Let’s start your outdoor story',
    finalBody: 'If you have been inspired by what you have seen, let us arrange a consultation and shape a landscape experience that feels elegant from the first look.',
    finalButton: 'Request a service',
    projectButton: 'View project',
  },
  ar: {
    heroTitle: 'المساحة الخارجية الأكثر طلبًا',
    heroSubtitle: 'لاندسكيب | حمام سباحة | تصميم | تنفيذ |',
    aboutTitle: 'عن الشركة',
    aboutBody:
      'تقدم MDO Landscape مساحات خارجية أنيقة يلتقي فيها اللاندسكيب مع العمارة وأسلوب الحياة داخل تجربة واحدة متكاملة. من الفكرة وحتى التنفيذ يركز الاستوديو على الهندسة النظيفة والزراعة متعددة الطبقات والخامات الراقية وصناعة مشهد بصري هادئ يشعر العميل بالفخامة في كل تفصيلة.',
    aboutCta: 'اكتشف الشركة',
    projectsTitle: 'مشاريع مختارة',
    projectsBody: 'عرض مختار داخل الصفحة الرئيسية بنفس الإيقاع البصري المطلوب: صف يحتوي على مشروعين، صور كبيرة وواضحة، وعنوان قوي أسفل كل مشروع.',
    whyTitle: 'لماذا تختار MDO؟',
    whyIntro: 'نحن لا نقدم مجرد لاندسكيب، بل نصنع تجربة متكاملة. هذه أبرز الأسباب التي تجعلنا مختلفين عن غيرنا:',
    whyItems: [
      {
        title: 'تواصل مباشر وشخصي',
        body: 'تتعامل مباشرة مع المؤسسين وفريق الاستوديو للحصول على رحلة واضحة وشخصية من أول فكرة حتى التسليم النهائي.',
      },
      {
        title: 'عدد مشاريع محدود باهتمام أكبر',
        body: 'نعمل على عدد محدود من المشاريع في نفس الوقت حتى يحصل كل مشروع على أعلى قدر من التركيز والمتابعة.',
      },
      {
        title: 'اهتمام استثنائي بالتفاصيل',
        body: 'كل عنصر في المساحة الخارجية يتم تشكيله بعناية، من اختيار الخامات والزراعة وحتى أدق تفاصيل التشطيب.',
      },
      {
        title: 'بدون أي تنازل عن الجودة',
        body: 'النتيجة النهائية تُبنى لتكون فاخرة وخالدة ومتكاملة بصريًا في كل زاوية ونسبة وخامة.',
      },
    ],
    finalTitle: 'ابدأ رحلتك معنا',
    finalBody: 'إذا ألهمك ما رأيته في الأعمال السابقة، دعنا نرتب استشارة مناسبة ونبني تجربة خارجية أنيقة من أول لحظة.',
    finalButton: 'اطلب الخدمة',
    projectButton: 'عرض المشروع',
  },
} as const;

export function HomePage() {
  const { i18n, t } = useTranslation();
  const locale = i18n.language === 'ar' ? 'ar' : 'en';
  const content = homeContent[locale];

  return (
    <>
      <Seo title={t('seo.home.title')} description={t('seo.home.description')} path="/" />

      <section className="relative isolate min-h-screen overflow-hidden bg-black text-white">
        <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=80" alt="Luxury landscape hero" className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-overlay absolute inset-0 bg-black/40" />
        <div className="container-shell relative flex min-h-screen items-end justify-center pb-24 text-center sm:pb-28 lg:pb-32">
          <AnimatedSection animation="scale" className="w-full">
            <h1 className="mx-auto max-w-5xl text-center text-5xl font-semibold uppercase leading-[0.95] text-white sm:text-7xl lg:text-[7.5rem]">
              {content.heroTitle}
            </h1>
            <p className="mt-8 text-center text-lg font-medium tracking-[0.2em] text-white/90 sm:text-2xl">{content.heroSubtitle}</p>
          </AnimatedSection>
        </div>
      </section>

      <AnimatedSection animation="left" className="section-space bg-surface-muted">
        <section id="about" className="container-shell grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-ink-500">MDO Landscape</p>
            <h2 className="text-4xl font-semibold uppercase leading-tight text-ink-900 sm:text-5xl">{content.aboutTitle}</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-ink-700">{content.aboutBody}</p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-ink-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-ink-900 transition hover:bg-ink-900 hover:text-white"
            >
              {content.aboutCta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <motion.div
            initial={{ opacity: 0, x: locale === 'ar' ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80" alt="About MDO Landscape" className="aspect-[4/3] w-full object-cover" />
          </motion.div>
        </section>
      </AnimatedSection>

      <HomeServicesSection />

      <section className="section-space bg-surface-muted/60" id="projects">
        <div className="container-shell">
          <AnimatedSection animation="up">
            <div className="mb-12 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-ink-500">Portfolio</p>
              <h2 className="mt-4 text-4xl font-semibold uppercase leading-tight text-ink-900 sm:text-5xl">{content.projectsTitle}</h2>
              <p className="mt-5 text-base leading-8 text-ink-700">{content.projectsBody}</p>
            </div>
          </AnimatedSection>

          <div className="grid gap-x-10 gap-y-14 lg:grid-cols-2">
            {projects.map((project, index) => (
              <AnimatedSection key={project.slug} animation={index % 2 === 0 ? 'left' : 'right'}>
                <article className="group">
                  <Link to={`/projects/${project.slug}`} className="block overflow-hidden bg-black/5">
                    <img
                      src={project.cover}
                      alt={project.title[locale]}
                      className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                  </Link>
                  <div className="mt-5 flex items-center justify-between gap-4">
                    <h3 className="text-[1.6rem] font-semibold uppercase leading-tight text-ink-900 sm:text-[2rem]">
                      {project.title[locale]}
                    </h3>
                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-ink-700 transition hover:text-ink-900"
                    >
                      {content.projectButton}
                      <MoveRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-surface-muted">
        <div className="container-shell grid items-start gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:gap-16">
          <AnimatedSection animation="left">
            <div>
              <h2 className="text-4xl font-semibold uppercase leading-tight text-ink-900 sm:text-5xl">{content.whyTitle}</h2>
              <p className="mt-10 max-w-2xl text-base leading-8 text-ink-700">{content.whyIntro}</p>
              <div className="mt-10 space-y-10">
                {content.whyItems.map((item) => (
                  <div key={item.title}>
                    <h3 className="text-[1.6rem] font-semibold uppercase leading-tight text-ink-900">{item.title}</h3>
                    <p className="mt-5 max-w-2xl text-base leading-8 text-ink-700">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="right">
            <img src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80" alt="Why choose us" className="aspect-[4/3] w-full object-cover" />
          </AnimatedSection>
        </div>
      </section>

      <ContactCtaSection />

      <section className="relative isolate overflow-hidden bg-black text-white">
        <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=80" alt="Luxury landscape footer background" className="absolute inset-0 h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="container-shell relative py-24 sm:py-28 lg:py-32">
          <AnimatedSection animation="center">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/60">MDO Landscape</p>
              <h2 className="mt-5 text-4xl font-semibold uppercase leading-tight text-white sm:text-5xl lg:text-6xl">{content.finalTitle}</h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/82">{content.finalBody}</p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full border border-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-black"
              >
                {content.finalButton}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

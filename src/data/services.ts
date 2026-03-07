export type ServiceItem = {
  slug: string;
  image: string;
  title: { en: string; ar: string };
  short: { en: string; ar: string };
  description: { en: string; ar: string };
};

export const services: ServiceItem[] = [
  {
    slug: 'design',
    image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80',
    title: { en: 'Design', ar: 'التصميم' },
    short: {
      en: 'Concept-driven landscape planning with elegant proportions and a clear visual identity.',
      ar: 'تخطيط لاندسكيب قائم على الفكرة مع نسب أنيقة وهوية بصرية واضحة.',
    },
    description: {
      en: 'We shape outdoor environments from the first concept sketch through zoning, circulation, planting direction, pool composition, and material selection. Every proposal is designed to feel balanced, premium, and tailored to the property and the client lifestyle.',
      ar: 'نقوم بتشكيل المساحات الخارجية من أول فكرة وحتى توزيع الوظائف والحركة والزراعة وتكوين حمام السباحة واختيار الخامات. كل مقترح يتم تصميمه ليشعر بالتوازن والفخامة ويلائم طبيعة العقار وأسلوب حياة العميل.',
    },
  },
  {
    slug: 'build',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    title: { en: 'Build', ar: 'التنفيذ' },
    short: {
      en: 'Precise execution for hardscape, softscape, pools, pergolas, and outdoor living details.',
      ar: 'تنفيذ دقيق للأرضيات والزراعة والمسابح والبرجولات وتفاصيل المعيشة الخارجية.',
    },
    description: {
      en: 'Our build service turns approved concepts into polished realities with disciplined site coordination, quality control, and premium finishing. We manage the visual integrity of the project so the final space feels cohesive from the entrance to the smallest detail.',
      ar: 'تحول خدمة التنفيذ التصاميم المعتمدة إلى واقع متكامل من خلال تنسيق موقع منضبط ومراقبة جودة وتشطيبات عالية المستوى. ندير الهوية البصرية للمشروع بالكامل حتى تظهر النتيجة النهائية متناسقة من المدخل وحتى أصغر تفصيلة.',
    },
  },
  {
    slug: 'renovate',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    title: { en: 'Renovate', ar: 'التطوير والتجديد' },
    short: {
      en: 'Refreshing old outdoor spaces with stronger identity, better function, and a more luxurious feel.',
      ar: 'تجديد المساحات الخارجية القديمة بهوية أقوى ووظيفة أفضل وإحساس أكثر فخامة.',
    },
    description: {
      en: 'We upgrade underperforming gardens, pool decks, and outdoor lounges through a targeted renovation strategy. The goal is to preserve what works, improve what does not, and create a cleaner, more valuable, and more contemporary exterior experience.',
      ar: 'نعمل على تطوير الحدائق ومناطق المسابح والجلسات الخارجية التي تحتاج إلى رفع المستوى من خلال استراتيجية تجديد دقيقة. الهدف هو الحفاظ على العناصر الناجحة وتحسين ما يحتاج التطوير وصناعة تجربة خارجية أنظف وأكثر قيمة وعصرية.',
    },
  },
  {
    slug: 'award-winning',
    image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80',
    title: { en: 'Award-Winning Results', ar: 'نتائج بمستوى مميز' },
    short: {
      en: 'A premium standard of outdoor presentation focused on beauty, detail, and long-term visual value.',
      ar: 'مستوى تنفيذي راقٍ يركز على الجمال والدقة والقيمة البصرية طويلة المدى.',
    },
    description: {
      en: 'This service focus reflects our commitment to delivering standout results, not just complete works. We aim for outdoor spaces that feel memorable, refined, and presentation-ready with a final result clients are proud to show and live in every day.',
      ar: 'هذا المحور يعكس التزامنا بتقديم نتائج استثنائية وليس مجرد أعمال مكتملة. نسعى لمساحات خارجية لا تُنسى وراقية وجاهزة للعرض، بنتيجة نهائية يفتخر بها العميل ويعيشها يوميًا بأفضل صورة.',
    },
  },
];

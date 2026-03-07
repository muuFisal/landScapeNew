export type ProjectCategory = 'residential' | 'commercial' | 'poolside' | 'courtyard';

export type Project = {
  slug: string;
  category: ProjectCategory;
  cover: string;
  gallery: string[];
  area: string;
  year: string;
  location: { en: string; ar: string };
  title: { en: string; ar: string };
  excerpt: { en: string; ar: string };
  summary: { en: string; ar: string };
  challenge: { en: string; ar: string };
  solution: { en: string; ar: string };
  tags: { en: string[]; ar: string[] };
};

export const projects: Project[] = [
  {
    slug: 'layers-of-tranquility-meadows',
    category: 'residential',
    area: '1,950 m²',
    year: '2025',
    location: { en: 'Meadows', ar: 'ميدوز' },
    title: { en: 'Layers of Tranquility - Meadows', ar: 'طبقات من الهدوء - ميدوز' },
    excerpt: {
      en: 'A calm front arrival with layered planting, soft architecture, and a refined residential landscape identity.',
      ar: 'واجهة وصول هادئة بطبقات زراعية متوازنة وعمارة ناعمة وهوية سكنية راقية للمشهد الخارجي.',
    },
    summary: {
      en: 'This residence was shaped around a quiet first impression. The landscape frames the entrance with balanced greenery, crisp hardscape edges, and a welcoming sequence that feels elegant from the street to the door.',
      ar: 'تم تشكيل هذا المنزل حول انطباع أول هادئ. يحيط اللاندسكيب بمدخل البيت بخضرة متوازنة وحواف أرضيات نظيفة وتسلسل ترحيبي أنيق من الشارع حتى الباب.',
    },
    challenge: {
      en: 'The client wanted the facade to feel softer and more luxurious without hiding the architecture or overloading the frontage.',
      ar: 'أراد العميل أن تبدو الواجهة أكثر نعومة وفخامة دون إخفاء العمارة أو المبالغة في عناصر الواجهة الأمامية.',
    },
    solution: {
      en: 'We introduced layered tropical planting, restrained paving geometry, and a controlled palette that lets architecture and greenery enhance one another.',
      ar: 'أضفنا زراعة استوائية متعددة الطبقات مع هندسة أرضيات هادئة ولوحة خامات منضبطة تسمح للعمارة والخضرة بإبراز بعضهما البعض.',
    },
    tags: {
      en: ['Residential', 'Entrance Landscape', 'Layered Planting'],
      ar: ['سكني', 'تنسيق مدخل', 'زراعة متعددة الطبقات'],
    },
    cover: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    slug: 'lime-tree-valley',
    category: 'courtyard',
    area: '2,250 m²',
    year: '2025',
    location: { en: 'Dubai Valley', ar: 'دبي فالي' },
    title: { en: 'Lime Tree Valley', ar: 'لايم تري فالي' },
    excerpt: {
      en: 'A shaded outdoor living zone centered around a mature tree, elegant seating, and warm hospitality.',
      ar: 'مساحة معيشة خارجية مظللة تتمحور حول شجرة ناضجة وجلسات أنيقة وتجربة ضيافة دافئة.',
    },
    summary: {
      en: 'The outdoor lounge was designed to feel open, relaxed, and architectural. A mature tree anchors the composition while the pergola and built-in furniture shape a calm family gathering space.',
      ar: 'تم تصميم جلسة الخارج لتشعر بالانفتاح والراحة والطابع المعماري. ترتكز التكوينات حول شجرة ناضجة بينما تشكل البرجولا والأثاث مساحة عائلية هادئة.',
    },
    challenge: {
      en: 'The space needed stronger shade, clearer zoning, and a more premium atmosphere for both day and evening use.',
      ar: 'كانت المساحة تحتاج إلى ظل أقوى وتقسيم أوضح وهوية أكثر فخامة للاستخدام النهاري والمسائي.',
    },
    solution: {
      en: 'We built a shaded social zone with generous seating, calm material tones, and landscape framing that keeps the mature tree as the visual focal point.',
      ar: 'أنشأنا منطقة اجتماعية مظللة بجلسات مريحة وخامات هادئة وتأطير زراعي يحافظ على الشجرة كنقطة ارتكاز بصرية رئيسية.',
    },
    tags: {
      en: ['Outdoor Living', 'Pergola', 'Courtyard'],
      ar: ['معيشة خارجية', 'برجولا', 'فناء'],
    },
    cover: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1558904541-efa8c1965f1e?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    slug: 'palm-pergola-court',
    category: 'poolside',
    area: '1,600 m²',
    year: '2024',
    location: { en: 'Palm Jumeirah', ar: 'نخلة جميرا' },
    title: { en: 'Palm Pergola Court', ar: 'بالم بيرجولا كورت' },
    excerpt: {
      en: 'A structured pergola composition with tropical layers, crisp lines, and resort-inspired outdoor comfort.',
      ar: 'تكوين منظم ببرجولا وطبقات استوائية وخطوط واضحة وراحة خارجية بروح المنتجعات.',
    },
    summary: {
      en: 'This project balances shade, circulation, and planting richness to create a polished outdoor experience with strong architectural rhythm.',
      ar: 'يوازن هذا المشروع بين الظل والحركة وثراء الزراعة لصناعة تجربة خارجية مصقولة بإيقاع معماري قوي.',
    },
    challenge: {
      en: 'The client wanted the space to feel more composed and luxurious while staying practical for everyday family use.',
      ar: 'أراد العميل أن تبدو المساحة أكثر ترتيبًا وفخامة مع الحفاظ على عمليتها للاستخدام اليومي للعائلة.',
    },
    solution: {
      en: 'A pergola-led structure, tropical planting, and refined hardscape give the garden a clear identity and comfortable day-to-night usability.',
      ar: 'منحنا الحديقة هوية واضحة عبر هيكل برجولا وزراعة استوائية وأرضيات مصقولة تضمن استخدامًا مريحًا من النهار إلى الليل.',
    },
    tags: {
      en: ['Pergola', 'Tropical Landscape', 'Luxury Garden'],
      ar: ['برجولا', 'لاندسكيب استوائي', 'حديقة فاخرة'],
    },
    cover: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1613490491583-3d57d9a94b41?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1533467647193-9040050e0427?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    slug: 'courtyard-balance',
    category: 'commercial',
    area: '2,050 m²',
    year: '2024',
    location: { en: 'Emirates Hills', ar: 'إمارات هيلز' },
    title: { en: 'Courtyard Balance', ar: 'كورتيارد بالانس' },
    excerpt: {
      en: 'A clean courtyard composition where light planting, geometry, and open sky create visual balance.',
      ar: 'تكوين فناء نظيف تخلق فيه الزراعة الخفيفة والهندسة والسماء المفتوحة توازنًا بصريًا مميزًا.',
    },
    summary: {
      en: 'The courtyard was refined to feel open yet curated, using structured proportions and carefully placed greenery to enhance the architecture.',
      ar: 'تم تهذيب الفناء ليشعر بالاتساع مع الحفاظ على طابع مدروس عبر نسب منظمة وخضرة موزعة بعناية لتعزيز العمارة.',
    },
    challenge: {
      en: 'The site lacked visual focus and needed a stronger relationship between the architecture and the surrounding open space.',
      ar: 'كان الموقع يفتقد نقطة تركيز بصرية ويحتاج إلى علاقة أقوى بين العمارة والمساحة المفتوحة المحيطة.',
    },
    solution: {
      en: 'We introduced a measured layout, balanced spacing, and simple planting gestures to create a more complete and elegant courtyard experience.',
      ar: 'أضفنا توزيعًا محسوبًا ومسافات متوازنة ولمسات زراعية بسيطة لصناعة تجربة فناء أكثر اكتمالًا وأناقة.',
    },
    tags: {
      en: ['Courtyard', 'Minimal Landscape', 'Architectural'],
      ar: ['فناء', 'لاندسكيب مينيمال', 'معماري'],
    },
    cover: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1590059132231-5094c483ec73?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80',
    ],
  },
];

export interface LocalizedString {
  ar: string;
  en: string;
}

export interface AboutSection {
  badge: string;
  title: string;
  description: string;
  image: string;
  second_image?: string;
}

export interface WhatShapesTheWorkItem {
  title: LocalizedString;
  description: LocalizedString;
}

export interface WhatShapesTheWork {
  badge: string;
  title: string;
  description: string;
  items: WhatShapesTheWorkItem[];
}

export interface AboutData {
  about: AboutSection;
  mission: AboutSection;
  vision: AboutSection;
  what_shapes_the_work: WhatShapesTheWork;
  updated_at: string;
}

export interface AboutResponse {
  code: number;
  message: string;
  data: AboutData;
}

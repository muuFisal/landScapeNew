export interface Socials {
  facebook?: string | null;
  x?: string | null;
  youtube?: string | null;
  instagram?: string | null;
  tiktok?: string | null;
  linkedin?: string | null;
}

export interface Media {
  logo?: string | null;
  light_logo?: string | null;
  dark_logo?: string | null;
  selected_logo?: string | null;
  favicon?: string | null;
}

export interface SettingsData {
  name?: string | null;
  title?: string | null;
  desc?: string | null;
  address?: string | null;
  meta_key?: string | null;
  meta_desc?: string | null;
  phone?: string | null;
  whatsapp?: string | null;
  email?: string | null;
  support?: string | null;
  socials?: Socials | null;
  media?: Media | null;
  copyright?: string | null;
  promotion?: string | null;
}

export interface SettingsResponse {
  code: number;
  message: string;
  data: SettingsData;
}

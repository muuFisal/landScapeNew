export interface LegalData {
  banner: string;
  title: string;
  description: string;
  image: string;
  updated_at: string;
}

export interface LegalResponse {
  code: number;
  message: string;
  data: LegalData;
}

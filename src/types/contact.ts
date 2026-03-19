export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone: string;
}

export interface ContactResponse {
  code: number;
  message: string;
  data: any;
}

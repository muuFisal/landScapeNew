export interface WhyChooseItem {
  id: number;
  title: string;
  description: string;
  sort_order: number;
}

export interface WhyChooseData {
  id: number;
  title: string;
  description: string;
  image: string;
  items: WhyChooseItem[];
}

export interface WhyChooseResponse {
  code: number;
  message: string;
  data: WhyChooseData;
}

export interface RequestServiceData {
  id: number;
  small_label: string;
  title: string;
  description: string;
  button_text: string;
  image: string;
}

export interface RequestServiceResponse {
  code: number;
  message: string;
  data: RequestServiceData;
}

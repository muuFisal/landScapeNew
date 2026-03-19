export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqPagination {
  total: number;
  current_page: number;
  last_page: number;
  per_page: number;
}

export interface FaqResponse {
  code: number;
  message: string;
  data: FaqItem[];
  pagination: FaqPagination;
}

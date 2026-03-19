export interface ServicesPageData {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface ServicesPageResponse {
  code: number;
  message: string;
  data: ServicesPageData;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
  sort_order: number;
  has_projects: boolean;
  show_in_projects_filter: boolean;
  status: boolean;
}

export interface ServicesResponse {
  code: number;
  message: string;
  data: ServiceItem[];
}

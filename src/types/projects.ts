import { ServiceItem } from './services';

export interface WorkPageData {
  id: number;
  title: string;
  description: string;
  eyebrow: string;
  image: string;
}

export interface WorkPageResponse {
  code: number;
  message: string;
  data: WorkPageData;
}

export interface ProjectListItem {
  id: number;
  title: string;
  slug: string;
  short_description: string;
  cover_image: string;
  year: string;
  location: string;
  area: string;
  service: ServiceItem;
  sort_order: number;
}

export interface ProjectsPagination {
  total: number;
  current_page: number;
  last_page: number;
  per_page: number;
}

export interface ProjectsListResponse {
  code: number;
  message: string;
  data: ProjectListItem[];
  pagination: ProjectsPagination;
}

export interface ProjectChallenge {
  title: string;
  description: string;
}

export interface ProjectSolution {
  title: string;
  description: string;
}

export interface ProjectGalleryItem {
  id: number;
  image: string;
  sort_order: number;
}

export interface ProjectDetailsData {
  id: number;
  title: string;
  slug: string;
  short_description: string;
  year: string;
  location: string;
  area: string;
  challenge: ProjectChallenge;
  solution: ProjectSolution;
  facts: string[];
  service: ServiceItem;
  gallery: ProjectGalleryItem[];
  sort_order: number;
}

export interface ProjectDetailsResponse {
  code: number;
  message: string;
  data: ProjectDetailsData;
}

export interface RelatedProjectsResponse {
  code: number;
  message: string;
  data: ProjectListItem[];
}

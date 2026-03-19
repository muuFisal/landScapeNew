export interface GalleryPageData {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface GalleryPageResponse {
  code: number;
  message: string;
  data: GalleryPageData;
}

export interface GalleryItem {
  id: number;
  title: string;
  image: string;
  sort_order: number;
}

export interface GalleryPagination {
  total: number;
  current_page: number;
  last_page: number;
  per_page: number;
}

export interface GalleryItemsResponse {
  code: number;
  message: string;
  data: GalleryItem[];
  pagination: GalleryPagination;
}

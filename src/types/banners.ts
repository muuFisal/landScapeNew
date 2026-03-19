export interface BannerItem {
  id: number;
  banner: string;
  title: string;
  primary_label: string;
  secondary_label: string;
  sub_labels: string[];
  sort_order: number;
  status: boolean;
}

export interface BannersResponse {
  code: number;
  message: string;
  data: BannerItem[];
}

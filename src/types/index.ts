export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SiteMeta {
  title: string;
  description: string;
  author: string;
  medicalTitle: string;
  credentials: string[];
}

export interface ArticleMeta {
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  category: string;
  tags: string[];
  readingTime?: string;
  draft?: boolean;
}

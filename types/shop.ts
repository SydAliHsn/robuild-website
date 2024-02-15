export type Product = {
  images: string[];
  name: string;
  tag: string;
  price: number;
  currentPrice?: number;
  bullets?: string[];
  description?: string;
  slug: string;
  publishedAt: Date;
};

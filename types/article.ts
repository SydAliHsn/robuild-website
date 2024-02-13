export type Article = {
  slug: string;
  publishedAt: Date;
  title: string;
  coverImage: string;
  //   author: Author;
  //   tags: string[];
  content: any[];
  tags: string[];
  shortDescription: string;
};

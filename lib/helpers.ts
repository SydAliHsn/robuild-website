import { Article } from "@/types/article";
import { getAllArticles } from "./storyblok";

export const getArticles = async ({
  slug,
  limit,
}: {
  slug?: string;
  limit?: number;
}): Promise<Article[] | Article> => {
  const articles = await getAllArticles();
  if (slug) {
    return articles.find((article) => article.slug === slug);
  }

  if (limit) {
    articles.sort((a, b) => {
      return b.publishedAt.getTime() - a.publishedAt.getTime();
    });
    return articles.slice(0, limit);
  }

  return articles;
};

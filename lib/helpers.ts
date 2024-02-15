import { Article } from "@/types/article";
import { getAllArticles, getAllProducts } from "./storyblok";
import { Product } from "@/types/shop";

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

export const getProducts = async ({
  slug,
  limit,
}: {
  slug?: string;
  limit?: number;
}): Promise<Product[] | Product> => {
  const products = await getAllProducts();
  if (slug) {
    return products.find((product) => product.slug === slug);
  }

  if (limit) {
    products.sort((a, b) => {
      return b.publishedAt.getTime() - a.publishedAt.getTime();
    });
    return products.slice(0, limit);
  }

  return products;
};

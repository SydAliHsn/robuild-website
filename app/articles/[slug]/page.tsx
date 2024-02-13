import { getArticles } from '@/lib/helpers';
import ArticleDetail from '@/components/Article/ArticleDetail';

import { Metadata } from "next";
import { Article } from '@/types/article';
import NotFound from '@/components/NotFound';

export const metadata: Metadata = {
  title: "Blog Details Page | Robuild: Teach Your Kids to Think like Engineers",
  description: "This is Blog Details Page for Robuild",
  // other metadata
};

export const revalidate = 7200;

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  const articles = (await getArticles({})) as Article[];

  return articles.map(({ slug }) => {
    return { slug };
  });
}

const BlogDetailsPage = async ({ params }: Props) => {
  const { slug } = params;

  const article = await getArticles({ slug }) as Article;

  if (!article) return <NotFound />

  return (
    <ArticleDetail article={article} />
  );
};

export default BlogDetailsPage;

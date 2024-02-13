import Link from "next/link";

import SectionTitle from "../Common/SectionTitle";
import ArticleCard from "./ArticleCard";
import { getArticles } from "@/lib/helpers";
import { Article } from "@/types/article";

const Article = async () => {
  const articles = await getArticles({ limit: 3 }) as Article[];

  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container flex flex-col justify-center">
        <SectionTitle
          title="Our Latest Articles & Tutorials"
          paragraph="Explore the latest articles and tutorials designed to spark curiosity and inspire young minds in the world of robotics."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {articles.map((article) => (
            <div key={article.slug} className="w-full">
              <ArticleCard article={article} />
            </div>
          ))}
        </div>

        <Link
          href="/articles"
          className="mt-10 self-center rounded-md bg-primary dark:bg-secondary px-5 py-3 xs:px-8 xs:py-4 text-base font-semibold text-white dark:text-primary duration-300 ease-in-out hover:bg-transparent hover:text-primary border-[3px] border-transparent hover:border-primary inline-block"
        >
          View All Articles
        </Link>
      </div>
    </section>
  );
};

export default Article;

import { Metadata } from "next";
import { getArticles } from "@/lib/helpers";
import { Article } from "@/types/article";
import ArticleCard from "@/components/Article/ArticleCard";

export const metadata: Metadata = {
    title: "Articles | Robuild",
    description: "Robuild Articles | Robuild: Teach Your Kids to Think, Build, and Innovate Like an Engineer. We provide the best educational robotics kits for kids.",
    // other metadata
};

export const revalidate = 7200;

const ArticlesPage = async () => {
    const articles = await getArticles({}) as Article[];

    return (
        <section className="relative z-10 overflow-hidden pt-28 lg:pt-[150px]">
            <div className="container">
                <div className="bg-[url(/images/doodle.png)] rounded-lg overflow-hidden">
                    <h1 className="text-primary uppercase font-extrabold text-3xl sm:text-4xl md:text-5xl text-center py-12 bg-primary-dark/20 bg-center">
                        Robuild Articles
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 my-20">
                    {articles.map((article, i) => (<ArticleCard key={i} article={article} />))}
                </div>
            </div>
        </section>
    );
};

export default ArticlesPage;

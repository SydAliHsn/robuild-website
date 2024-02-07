import { Metadata } from "next";
import ProductCard from "@/components/Shop/ProductCard";
import blogData from "@/components/Blog/blogData";

export const metadata: Metadata = {
    title: "Shop | Robuild",
    description: "This is Our Shop | Robuild: Teach Your Kids to Think, Build, and Innovate Like an Engineer. We provide the best educational robotics kits for kids.",
    // other metadata
};

const ShopPage = () => {
    return (
        <section className="relative z-10 overflow-hidden pt-28 lg:pt-[150px]">
            <div className="container">
                <div className="bg-[url(/images/doodle.png)] rounded-lg overflow-hidden">
                    <h1 className="text-primary uppercase font-extrabold text-3xl sm:text-4xl md:text-5xl text-center py-12 bg-primary-dark/20 bg-center">
                        Shop Robuild
                    </h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 my-20">
                    <ProductCard blog={blogData[0]} />
                    <ProductCard blog={blogData[0]} />
                    <ProductCard blog={blogData[0]} />
                    <ProductCard blog={blogData[0]} />
                </div>
            </div>
        </section>
    );
};

export default ShopPage;
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ blog }: { blog: Blog }) => {
    const { title, image, paragraph, author, tags, publishDate } = blog;
    return (
        <>
            <div
                className="wow fadeInUp p-2 hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-lg bg-white shadow-one duration-300 dark:bg-dark border border-gray-200 dark:border-dark"
                data-wow-delay=".1s"
            >
                <Link
                    href="/blog-details"
                    className="relative block w-full aspect-[1165/839]"
                >
                    <Image src={"https://www.crunchlabs.com/cdn/shop/products/GrayShirt_Shirt_v2copy_7d03fdfb-9c54-4c67-acd7-195d54bf5765.png?v=1670539465&width=360"} alt="image" fill style={{ objectFit: 'cover' }} />
                </Link>
                <div className="p-4 space-y-2">
                    <span className="text-primary/85 font-semibold font-oswald uppercase text-sm">
                        Bukl Extras
                    </span>
                    <h3>
                        <Link
                            href="/blog-details"
                            className="block text-lg leading-tight font-bold text-primary dark:text-secondary"
                        >
                            {title}
                        </Link>
                    </h3>
                    {/* <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
                        {paragraph}
                    </p> */}
                    {/* <div className="flex items-center">
                        <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
                            <div className="mr-4">
                                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                                    <Image src={author.image} alt="author" fill />
                                </div>
                            </div>
                            <div className="w-full">
                                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                                    By {author.name}
                                </h4>
                                <p className="text-xs text-body-color">{author.designation}</p>
                            </div>
                        </div>
                        <div className="inline-block">
                            <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                                Date
                            </h4>
                            <p className="text-xs text-body-color">{publishDate}</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default ProductCard;

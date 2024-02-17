import { Metadata } from "next";
import { Product } from "@/types/shop";
import { getProducts } from "@/lib/helpers";
import Slider from "@/components/Shop/Slider";
import NotFound from "@/components/NotFound";
import { NextPage } from "next";
import Link from "next/link";

// Exporting at the bottom of the file.
const metadata: Metadata = {
    title: "Shop | Robuild",
    description: "This is Our Shop | Robuild: Teach Your Kids to Think, Build, and Innovate Like an Engineer. We provide the best educational robotics kits for kids.",
    // other metadata
};

export const revalidate = 7200;

type Props = { params: { slug: string } };

export async function generateStaticParams() {
    const products = (await getProducts({})) as Product[];

    return products.map(({ slug }) => {
        return { slug };
    });
}

const ProductDetails: NextPage<Props> = async ({ params }) => {
    const { slug } = params;

    const product = (await getProducts({ slug }) as Product);

    if (!product) return <NotFound />;

    // Setting the title of the page.
    metadata.title = product.name;

    const { name, images, salePrice, price, tag, description, bullets } = product;

    const currency = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
    });

    return (
        <section className="overflow-hidden pb-20 pt-28">
            <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full mb-8 lg:w-1/2 lg:mb-0">
                        <div className="z-50 overflow-hidden">
                            <Slider images={images.map(url => ({ url }))} />
                        </div>
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                        <div className="lg:pl-12">
                            <div className="mb-8 ">
                                <p className="mb-1 text-secondary dark:text-primary-light font-semibold">{tag}</p>
                                <h2 className="lg:max-w-xl mb-6 text-2xl font-bold text-primary-dark dark:text-gray-400 md:text-4xl">
                                    {name}
                                </h2>
                                <p className="inline-block space-x-3 mb-6 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                                    <span className="text-primary dark:text-secondary">{currency.format(salePrice || price)} <span className="text-2xl">QAR</span></span>
                                    {salePrice ? <span
                                        className="text-lg font-normal text-gray-500 line-through dark:text-gray-400">{currency.format(price)} <span className="text-base">QAR</span>
                                    </span> : null}
                                </p>
                                <p className="text-sm leading-6 lg:max-w-md text-gray-700 dark:text-gray-400 whitespace-pre-wrap">
                                    {description}
                                </p>
                            </div>

                            <div className="mb-8 space-y-3">
                                <h3 className="capitalize text-xl text-primary dark:text-secondary font-semibold">What you Get:</h3>
                                <ul className="dark:text-body-color-dark text-gray-700 text-sm">
                                    {bullets && bullets.map((bullet, i) => <li className="leading-6" key={i}>
                                        <span className="me-2 text-xl text-secondary dark:text-primary">•</span>
                                        {bullet}
                                    </li>)}
                                </ul>
                            </div>

                            <div className="flex flex-wrap items-center gap-4">
                                <Link href={'/contact'} className="capitalize shadow-submit dark:shadow-submit-dark rounded-md dark:bg-secondary px-9 py-4 text-base font-semibold hover:text-primary hover:bg-secondary text-secondary bg-primary dark:text-primary dark:hover:bg-primary dark:hover:text-secondary duration-300">
                                    Contact to get it
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;
export { metadata };
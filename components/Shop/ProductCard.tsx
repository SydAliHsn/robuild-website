import { Product } from "@/types/shop";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: Product }) => {
    const { title, images, price, currentPrice, tag, bullets } = product;

    const currency = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
    });

    return (
        <>
            <div
                className="wow fadeInUp p-2 hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-lg bg-white shadow-one duration-300 dark:bg-dark border border-gray-200 dark:border-dark hover:border-primary/60 dark:hover:border-primary/60 transition-all ease-in-out"
                data-wow-delay=".1s"
            >
                <Link
                    href="#"
                    className="relative block w-full aspect-[1165/839]"
                >
                    <Image src={images[0]} alt="image" fill style={{ objectFit: 'cover' }} />
                </Link>
                <div className="p-4 space-y-3">
                    <p className="text-primary/85 dark:text-secondary/85 font-semibold font-oswald uppercase text-sm">{tag}</p>

                    <h3>
                        <Link
                            href="#"
                            className="block text-lg leading-6 font-bold text-primary-dark/90 dark:text-secondary"
                        >
                            {title}
                        </Link>
                    </h3>

                    <div className="flex gap-2">
                        <p className="text-primary-light text-lg font-semibold">
                            {currency.format(+currentPrice || +price)}
                            <span className="uppercase text-xs ml-1">Qar</span>
                        </p>
                        {currentPrice ? <p className="scale-75 text-lg font-semibold text-gray-500 dark:text-gray-400 line-through">  {currency.format(+price)}
                            <span className="uppercase text-xs ml-1">Qar</span>
                        </p> : ''}
                    </div>

                    <ul className="dark:text-body-color-dark text-gray-700 text-sm pt-2">
                        {bullets && bullets.map((bullet, i) => <li className="leading-6" key={i}>
                            <span className="me-1">•</span>
                            {bullet}
                        </li>)}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ProductCard;

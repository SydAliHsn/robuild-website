'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Thumbs } from 'swiper';
import { Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const Slider = ({
    images,
}: {
    images: {
        url: string;
        alt?: string;
    }[];
}): JSX.Element => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className="slider">
            <Swiper
                spaceBetween={10}
                navigation={true}
                modules={[Navigation, Thumbs]}
                grabCursor={true}
                loop
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            >
                {images.map(({ url, alt }) => (
                    <SwiperSlide
                        key={url}
                        className="slider-main w-full aspect-[1165/839]"
                    >
                        <Image
                            // fill={true}
                            className='border dark:border-dark rounded-md object-cover'
                            fill
                            src={url}
                            alt={alt || 'product-image'}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                modules={[Thumbs, Navigation]}
                watchSlidesProgress
                // @ts-ignore
                onSwiper={setThumbsSwiper}
                slidesPerView={4}
                className='mt-4'
            >
                {images.map(({ url, alt }) => (
                    <SwiperSlide
                        key={url}
                        className="slider-thumb cursor-pointer"
                    >
                        <img
                            // fill={true}
                            src={url}
                            alt={alt || 'product-image'}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;

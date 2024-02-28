'use client';

import { useEffect, useState } from "react";
import Loading from "./LoadingGears"

const LoadingScreen = ({ loading }: { loading?: boolean }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);

        if (loading === undefined) {
            document.querySelector('html')?.classList.add('!overflow-hidden');
            setTimeout(() => {
                document.querySelector('html')?.classList.remove('!overflow-hidden');
                setVisible(false);
            }, 850);
        } else {
            if (loading)
                document.body.classList.add('!overflow-hidden');
            else {
                setVisible(false);
                document.body.classList.remove('!overflow-hidden');
            }

            return () => {
                document.body.classList.remove('!overflow-hidden');
            };
        }
    }, [loading]);

    if (!visible) return null;

    return <section className='fixed top-0 left-0 z-[1000] bg-white dark:bg-dark w-screen h-screen'>
        <div className="container flex flex-col justify-center items-center h-full space-y-4">
            <Loading className='w-60' />
            <h2 className='text-3xl'>Loading...</h2>
        </div>
    </section>
}

export default LoadingScreen;

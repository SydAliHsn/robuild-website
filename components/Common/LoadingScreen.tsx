'use client';

import { useEffect } from "react";
import Loading from "./LoadingGears"

const LoadingScreen = ({ loading }: { loading: boolean }) => {

    useEffect(() => {
        if (loading)
            document.body.classList.add('!overflow-hidden');

        else
            document.body.classList.remove('!overflow-hidden');

        return () => {
            document.body.classList.remove('!overflow-hidden');
        };
    }, [loading]);

    return <section className='absolute top-0 left-0 z-[1000] bg-white dark:bg-dark w-screen h-screen'>
        <div className="container flex flex-col justify-center items-center h-full space-y-4">
            <Loading className='w-60' />
            <h2 className='text-3xl'>Loading...</h2>
        </div>
    </section>
}

export default LoadingScreen;
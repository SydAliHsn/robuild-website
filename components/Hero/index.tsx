'use client';
import Link from "next/link";
import ReactTypingEffect from 'react-typing-effect';

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="dark:bg-[#0a0c3b] relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] flex flex-col justify-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl xs:text-4xl font-bold leading-tight text-gray-dark dark:text-white sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight text-left uppercase">
                  <p className="text-primary/90">
                    <ReactTypingEffect
                      typingDelay={200}
                      speed={30}
                      eraseSpeed={30}
                      eraseDelay={3500}
                      cursor={" "}
                      text={[`Think`, `Build`, `Innovate`]}
                    /></p>
                  Like An Engineer
                </h1>
                <p className="dark:text-gray-light mb-12 text-base !leading-relaxed text-gray-800 sm:text-lg md:text-xl">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, soluta iste? Assumenda asperiores id libero odit, aperiam quae deserunt?
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-7 sm:space-y-0">
                  <Link
                    href="/contact"
                    className="rounded-md bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-transparent hover:text-primary border-[3px] border-transparent hover:border-primary"
                  >
                    Get in Touch
                  </Link>
                  <Link
                    href="/shop"
                    className="inline-block rounded-md bg-transparent hover:bg-[#fed203] px-8 py-4 text-base font-semibold text-dark duration-300 ease-in-out dark:bg-white/10 dark:text-white border-[3px] border-yellow hover:text-white"
                  >
                    View Products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -right-10 sm:right-0 top-24 sm:top-14 lg:top-8 z-[-1]">
          <img src="/images/spidey-bot.png" className="w-[16rem] sm:w-[25rem] lg:w-[35rem]" />
        </div>

        <div className="absolute -bottom-10 -left-8 z-[-1] opacity-95">
          <img src="/images/robuild-package.png" className="hidden md:block w-[15rem] lg:w-[25rem]" />
        </div>
      </section>
    </>
  );
};

export default Hero;

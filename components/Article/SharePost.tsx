'use client';

import { toast } from "react-toastify";

const SharePost = ({ slug }: { slug: string }) => {

  const copyLink = () => {
    const link = `${window.location.origin}/articles/${slug}`;

    navigator.clipboard.writeText(link);

    toast.success("Article link copied to clipboard. Go ahead and share it!");
  };

  return (
    <>
      <button
        onClick={copyLink}
        aria-label="social-share"
        className="bg-gray-light dark:bg-gray-dark mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md text-body-color duration-300 hover:bg-primary hover:text-white dark:hover:bg-primary sm:ml-3"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          className="fill-current"
        >
          <path d="M14.3442 0H1.12455C0.499798 0 0 0.497491 0 1.11936V14.3029C0 14.8999 0.499798 15.4222 1.12455 15.4222H14.2942C14.919 15.4222 15.4188 14.9247 15.4188 14.3029V1.09448C15.4688 0.497491 14.969 0 14.3442 0ZM4.57316 13.1089H2.29907V5.7709H4.57316V13.1089ZM3.42362 4.75104C2.67392 4.75104 2.09915 4.15405 2.09915 3.43269C2.09915 2.71133 2.69891 2.11434 3.42362 2.11434C4.14833 2.11434 4.74809 2.71133 4.74809 3.43269C4.74809 4.15405 4.19831 4.75104 3.42362 4.75104ZM13.1947 13.1089H10.9206V9.55183C10.9206 8.7061 10.8956 7.58674 9.72108 7.58674C8.52156 7.58674 8.34663 8.53198 8.34663 9.47721V13.1089H6.07255V5.7709H8.29665V6.79076H8.32164C8.64651 6.19377 9.37122 5.59678 10.4958 5.59678C12.8198 5.59678 13.2447 7.08925 13.2447 9.12897V13.1089H13.1947Z" />
        </svg>
      </button>

      <button
        onClick={copyLink}
        aria-label="social-share"
        className="bg-gray-light dark:bg-gray-dark mb-3 ml-3 inline-flex h-9 w-9 items-center justify-center rounded-md text-body-color duration-300 hover:bg-primary hover:text-white dark:hover:bg-primary"
      >
        <svg width="9" height="18" viewBox="0 0 9 18" className="fill-current">
          <path d="M8.13643 7H6.78036H6.29605V6.43548V4.68548V4.12097H6.78036H7.79741C8.06378 4.12097 8.28172 3.89516 8.28172 3.55645V0.564516C8.28172 0.254032 8.088 0 7.79741 0H6.02968C4.11665 0 2.78479 1.58064 2.78479 3.92339V6.37903V6.94355H2.30048H0.65382C0.314802 6.94355 0 7.25403 0 7.70564V9.7379C0 10.1331 0.266371 10.5 0.65382 10.5H2.25205H2.73636V11.0645V16.7379C2.73636 17.1331 3.00273 17.5 3.39018 17.5H5.66644C5.81174 17.5 5.93281 17.4153 6.02968 17.3024C6.12654 17.1895 6.19919 16.9919 6.19919 16.8226V11.0927V10.5282H6.70771H7.79741C8.11222 10.5282 8.35437 10.3024 8.4028 9.96371V9.93548V9.90726L8.74182 7.95968C8.76604 7.7621 8.74182 7.53629 8.59653 7.31048C8.54809 7.16935 8.33016 7.02823 8.13643 7Z" />
        </svg>
      </button>
      <button
        onClick={copyLink}
        aria-label="social-share"
        className="bg-gray-light dark:bg-gray-dark mb-3 ml-3 inline-flex h-9 w-9 items-center justify-center rounded-md text-body-color duration-300 hover:bg-primary hover:text-white dark:hover:bg-primary"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="fill-current" width="15" x="0px" y="0px" viewBox="6.22 6 36.78 38">
          <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
        </svg>
      </button>
    </>
  );
};

export default SharePost;

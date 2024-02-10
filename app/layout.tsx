import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Oswald, Poppins } from "next/font/google";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "node_modules/react-modal-video/css/modal-video.css";
import './globals.css'

const oswald = Oswald({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700',],
  variable: '--font-oswald'
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '900'],
  variable: '--font-poppins'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${oswald.variable} ${poppins.variable}`}>
        <Providers>
          <ToastContainer />
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";

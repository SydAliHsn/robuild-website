import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Article from "@/components/Article";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import LoadingScreen from "@/components/Common/LoadingScreen";

export const metadata: Metadata = {
  title: "Robuild: Teach Your Kids to Think like Engineers",
  description: "This is Home Page for Robuild",
  // other metadata
};

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollUp />
      <Hero />
      {/* <Features /> */}
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      {/* <Blog /> */}
      <Article />
      <Contact />
    </>
  );
}

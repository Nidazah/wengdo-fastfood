import type { Metadata } from "next";

import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import WhyChoose from "@/components/features/WhyChoose";
import FeaturedMenu from "@/components/menu/FeaturedMenu";
import Offer from "@/components/offer/Offer";
import PopularFoods from "@/components/popular/PopularFoods";
import Stats from "@/components/stats/Stats";
import Testimonials from "@/components/testimonials/Testimonials";
import Gallery from "@/components/gallery/Gallery";
import Chefs from "@/components/chefs/Chefs";
import CTA from "@/components/cta/CTA";
import Blog from "@/components/blog/Blog";
import InstagramFeed from "@/components/instagram/InstagramFeed";
import Newsletter from "@/components/common/Newsletter";

export const metadata: Metadata = {
  title: "Home | Wengdo Fast Food",
  description:
    "Order delicious burgers, pizza, chicken and more from Wengdo.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <WhyChoose />
      <FeaturedMenu />
      <Offer />
      <PopularFoods />
      <Stats />
      <Testimonials />
      <Gallery />
      <Chefs />
      <CTA />
      <Blog />
      <InstagramFeed />
      <Newsletter />
    </main>
  );
}
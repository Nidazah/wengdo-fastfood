import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import WhyChoose from "@/components/features/WhyChoose";
import MenuGrid from "@/components/menu/MenuGrid";
import Offer from "@/components/offer/Offer";
import PopularMenu from "@/components/menu/PopularMenu";
import Stats from "@/components/stats/Stats";
import Testimonials from "@/components/testimonials/Testimonials";
import Gallery from "@/components/gallery/Gallery";
import Chefs from "@/components/chefs/Chefs";
import CTA from "@/components/cta/CTA";
import Blog from "@/components/blog/Blog";
import InstagramFeed from "@/components/instagram/InstagramFeed";
import FeaturedMenu from "@/components/menu/FeaturedMenu";
import PopularFoods from "@/components/popular/PopularFoods"
import Newsletter from "@/components/common/Newsletter";
import PageTransition from "@/components/common/PageTransition";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Wengdo Fast Food",
  description:
    "Order delicious burgers, pizza, chicken and more from Wengdo.",
};

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <About />
      <WhyChoose />
      <FeaturedMenu />
      <MenuGrid />
      <Offer />
      <PopularFoods />
      <PopularMenu />
      <Stats />
      <Testimonials />
      <Gallery />
      <Chefs />
      <CTA />
      <Blog />
      <InstagramFeed />
      <Newsletter />
    </PageTransition>
  );
}

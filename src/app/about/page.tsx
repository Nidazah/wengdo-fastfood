import type { Metadata } from "next";

import AboutHero from "@/components/about/AboutHero";
import AboutCompany from "@/components/about-page/AboutCompany";
import WhyChoose from "@/components/features/WhyChoose";
import Stats from "@/components/stats/Stats";
import Chefs from "@/components/chefs/Chefs";
import CTA from "@/components/cta/CTA";

export const metadata: Metadata = {
  title: "About | Wengdo Fast Food",
  description:
    "Learn about Wengdo's passion for serving fresh fast food made with premium ingredients.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutCompany />
      <WhyChoose />
      <Stats />
      <Chefs />
      <CTA />
    </main>
  );
}
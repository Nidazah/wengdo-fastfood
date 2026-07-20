import AboutHero from "@/components/about/AboutHero";
import AboutCompany from "@/components/about-page/AboutCompany";
import WhyChoose from "@/components/features/WhyChoose";
import Stats from "@/components/stats/Stats";
import Chefs from "@/components/chefs/Chefs";
import CTA from "@/components/cta/CTA";
import PageTransition from "@/components/common/PageTransition";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Wengdo Fast Food",
  description:
    "Learn about Wengdo's passion for serving fresh fast food made with premium ingredients.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <AboutHero />
      <AboutCompany />
      <WhyChoose />
      <Stats />
      <Chefs />
      <CTA />
    </PageTransition>
  );
}

import BlogHero from "@/components/blog-page/BlogHero";
import BlogGrid from "@/components/blog-page/BlogGrid";
import Container from "@/components/common/Container";
import PageTransition from "@/components/common/PageTransition";

export const metadata = {
  title: "Food Blog | Wengdo",
  description:
    "Read food tips, recipes and restaurant news from Wengdo.",
};

export default function BlogPage() {
  return (
    <PageTransition>
      <BlogHero />

      <section className="bg-[#FFF8EE] py-28">
        <Container className="max-w-[980px]">
          <BlogGrid />
        </Container>
      </section>
    </PageTransition>
  );
}
import BlogHero from "@/components/blog-page/BlogHero";
import BlogGrid from "@/components/blog-page/BlogGrid";
import Container from "@/components/common/Container";

export const metadata = {
  title: "Food Blog | Wengdo",
  description:
    "Read food tips, recipes and restaurant news from Wengdo.",
};

export default function BlogPage() {
  return (
    <main>
      <BlogHero />

      <section className="bg-[#FFF8EE] py-28">
        <Container className="max-w-[980px]">
          <BlogGrid />
        </Container>
      </section>
    </main>
  );
}
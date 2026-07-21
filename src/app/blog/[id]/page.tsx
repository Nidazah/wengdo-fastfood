import type { Metadata } from "next";

import { blogPosts } from "@/data/blogData";

import BlogHero from "@/components/blog-details/BlogHero";
import BlogDetails from "@/components/blog-details/BlogDetails";
import Container from "@/components/common/Container";
import PageTransition from "@/components/common/PageTransition";

interface BlogDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: BlogDetailsPageProps): Promise<Metadata> {
  const { id } = await params;

  const post = blogPosts.find(
    (item) => item.id === Number(id)
  );

  if (!post) {
    return {
      title: "Blog | Wengdo",
      description:
        "Read the latest food news, recipes, tips, and stories from Wengdo.",
    };
  }

  return {
    title: `${post.title} | Wengdo`,
    description: post.excerpt,

    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.image,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogDetailsPage({
  params,
}: BlogDetailsPageProps) {
  const { id } = await params;

  return (
    <PageTransition>
      {/* Blog Hero */}
      <BlogHero />

      {/* Blog Details */}
      <section className="bg-[#FFF8EE] py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto w-full max-w-[900px]">
            <BlogDetails id={Number(id)} />
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}
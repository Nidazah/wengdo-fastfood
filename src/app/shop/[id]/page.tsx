import { notFound } from "next/navigation";

import { products } from "@/data/products";

import ProductHero from "@/components/product-details/ProductHero";
import ProductInfo from "@/components/product-details/ProductInfo";
import ProductTabs from "@/components/product-details/ProductTabs";
import Reviews from "@/components/product-details/Reviews";
import RelatedProducts from "@/components/product-details/RelatedProducts";
import PageTransition from "@/components/common/PageTransition";

import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,

    description: product.description,

    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find((item) => item.id === Number(id));

  if (!product) notFound();

  return (
    <PageTransition>
      <ProductHero product={product} />

      <ProductInfo product={product} />

      <ProductTabs product={product} />

      <Reviews productId={product.id} />

      <RelatedProducts currentId={product.id} category={product.category} />
    </PageTransition>
  );
}

import type { Metadata } from "next";

import { products } from "@/data/products";

import ProductHero from "@/components/product-details/ProductHero";
import ProductInfo from "@/components/product-details/ProductInfo";
import ProductTabs from "@/components/product-details/ProductTabs";
import Reviews from "@/components/product-details/Reviews";
import RelatedProducts from "@/components/product-details/RelatedProducts";
import PageTransition from "@/components/common/PageTransition";

type ProductDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({
  params,
}: ProductDetailsPageProps): Promise<Metadata> {
  const { id } = await params;

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: product.name,
    description: product.description,

    openGraph: {
      title: product.name,
      description: product.description,

      images: [
        {
          url: product.image,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { id } = await params;

  const product = products.find(
    (item) => item.id === Number(id)
  );

  // Stop rendering if product doesn't exist
  if (!product) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Product Not Found
          </h1>

          <p className="mt-3 text-gray-600">
            Sorry, the product you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <PageTransition>
      <ProductHero product={product} />

      <ProductInfo product={product} />

      <ProductTabs product={product} />

      <Reviews productId={product.id} />

      <RelatedProducts
        currentId={product.id}
        category={product.category}
      />
    </PageTransition>
  );
}
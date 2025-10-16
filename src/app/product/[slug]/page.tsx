import { prismaClient } from "@/lib/prisma";
import { ProductImages } from "../_components/product-images";
import { ProductInfo } from "../_components/product-info";
import { computeProductTotalPrice } from "@/helpers/product";

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

export default async function ProductDetailPage({
  params: { slug },
}: ProductDetailPageProps) {
  const product = await prismaClient.product.findFirst({
    where: {
      slug,
    },
  });

  if (!product) return null;

  return (
    <div className="space-y-6">
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
      <ProductInfo product={computeProductTotalPrice(product)} />
    </div>
  );
}

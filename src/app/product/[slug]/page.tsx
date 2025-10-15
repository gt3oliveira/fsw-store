import { prismaClient } from "@/lib/prisma";
import { ProductImages } from "../_components/product-images";

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
    <div>
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
    </div>
  );
}

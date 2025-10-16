import { prismaClient } from "@/lib/prisma";
import { ProductImages } from "../_components/product-images";
import { ProductInfo } from "../_components/product-info";
import { computeProductTotalPrice } from "@/helpers/product";
import { ProductList } from "@/components/product-list";

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
    include: {
      category: {
        include: {
          products: {
            where: {
              NOT: {
                slug,
              },
            },
          },
        },
      },
    },
  });

  if (!product) return null;

  return (
    <div className="space-y-6">
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
      <ProductInfo product={computeProductTotalPrice(product)} />
      <div className="flex flex-col gap-2">
        <h3 className="px-5 font-bold">Produdos relacionados</h3>
        <ProductList products={product.category.products} />
      </div>
    </div>
  );
}

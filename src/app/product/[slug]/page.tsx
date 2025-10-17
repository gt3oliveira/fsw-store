import { ProductImages } from "../_components/product-images";
import { ProductInfo } from "../_components/product-info";
import { computeProductTotalPrice } from "@/helpers/product";
import { ProductList } from "@/components/product-list";
import { SectionTitle } from "@/components/section-title";
import { getSuggestionsProducts } from "@/actions/getSuggestionsProducts";

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

export default async function ProductDetailPage({
  params: { slug },
}: ProductDetailPageProps) {
  const product = await getSuggestionsProducts(slug);

  if (!product) return null;

  return (
    <div className="space-y-6">
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
      <ProductInfo product={computeProductTotalPrice(product)} />
      <div className="mt-8 flex flex-col gap-2">
        <SectionTitle>Produtos relacionados</SectionTitle>
        <ProductList products={product.category.products} />
      </div>
    </div>
  );
}

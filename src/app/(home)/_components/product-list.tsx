import { ProductItem } from "@/components/product-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";

interface ProductListProps {
  products: Product[];
}
export const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex w-full overflow-x-auto [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={computeProductTotalPrice(product)}
        />
      ))}
    </div>
  );
};

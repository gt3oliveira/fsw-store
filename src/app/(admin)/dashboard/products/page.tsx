import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PackageIcon, PlusIcon } from "lucide-react";
import {
  ProductsTable,
  ProductWithTotalPriceAndCategory,
} from "./_components/products-table";
import { computeProductTotalPrice } from "@/helpers/product";
import { getProductsTable } from "@/actions/getProductsTable";

export default async function ProductsPage() {
  const products = await getProductsTable();
  const productsWithTotalPrice: ProductWithTotalPriceAndCategory[] =
    products.map((product) => ({
      ...product,
      totalPrice: computeProductTotalPrice(product),
    }));

  return (
    <div className="flex w-full flex-col space-y-10 p-10">
      <Badge variant={"heading"}>
        <p>
          <PackageIcon size={20} />
        </p>
        Produtos
      </Badge>

      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold">
          Total de produtos: {products.length}
        </span>
        <Button>
          <PlusIcon />
          Adicionar Produto
        </Button>
      </div>

      <div className="overflow-y-auto">
        <ProductsTable products={productsWithTotalPrice} />
      </div>
    </div>
  );
}

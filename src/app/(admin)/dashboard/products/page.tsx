import { getProducts } from "@/actions/getProducts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PackageIcon, PlusIcon } from "lucide-react";
import { ProductsTable } from "./_components/products-table";
import { computeProductTotalPrice } from "@/helpers/product";

export default async function ProductsPage() {
  const products = await getProducts();
  const productsWithTotalPrice = products.map((product) =>
    computeProductTotalPrice(product),
  );

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

      <div>
        <ProductsTable products={productsWithTotalPrice} />
      </div>
    </div>
  );
}

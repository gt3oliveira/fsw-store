import { DataTable } from "@/components/ui/data-table";
import { ProductWithTotalPrice } from "@/helpers/product";
import { columnsProducts } from "./columns";
import { OrderProduct } from "@prisma/client";

export type ProductWithTotalPriceAndCategory = ProductWithTotalPrice & {
  category: {
    name: string;
  };
  orderProduct: OrderProduct[];
};

interface ProductsTableProps {
  products: ProductWithTotalPriceAndCategory[];
}

export const ProductsTable = ({ products }: ProductsTableProps) => {
  return (
    <div>
      <DataTable columns={columnsProducts} data={products} />
    </div>
  );
};

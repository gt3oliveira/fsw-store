import { DataTable } from "@/components/ui/data-table";
import { ProductWithTotalPrice } from "@/helpers/product";
import { columns } from "./columns";

export type ProductWithTotalPriceAndCategory = ProductWithTotalPrice & {
  category: {
    name: string;
  };
};

interface ProductsTableProps {
  products: ProductWithTotalPriceAndCategory[];
}

export const ProductsTable = ({ products }: ProductsTableProps) => {
  return (
    <div>
      <DataTable columns={columns} data={products} />
    </div>
  );
};

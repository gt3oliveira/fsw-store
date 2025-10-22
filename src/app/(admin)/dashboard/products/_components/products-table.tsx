import { DataTable } from "@/components/ui/data-table";
import { ProductWithTotalPrice } from "@/helpers/product";
import { columns } from "./columns";

interface ProductsTableProps {
  products: ProductWithTotalPrice[];
}

export const ProductsTable = ({ products }: ProductsTableProps) => {
  return (
    <div>
      <DataTable columns={columns} data={products} />
    </div>
  );
};

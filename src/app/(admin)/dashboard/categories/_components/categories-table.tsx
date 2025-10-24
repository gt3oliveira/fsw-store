import { DataTable } from "@/components/ui/data-table";
import { Prisma } from "@prisma/client";
import { columnsCategory } from "./columns";
import { QuantitySalesProducts } from "../helpers/quantity-sales-products";

export interface CategoriesTableProps {
  categories: Prisma.CategoryGetPayload<{
    include: {
      products: {
        select: {
          id: true;
          categoryId: true;
          orderProduct: true;
        };
      };
    };
  }>[];
}

export const qtdProductsSold = await QuantitySalesProducts();

export const CategoriesTable = ({ categories }: CategoriesTableProps) => {
  return (
    <div>
      <DataTable columns={columnsCategory} data={categories} />
    </div>
  );
};

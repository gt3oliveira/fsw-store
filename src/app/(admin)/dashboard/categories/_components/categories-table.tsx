import { DataTable } from "@/components/ui/data-table";
import { Prisma } from "@prisma/client";
import { columnsCategory } from "./columns";

export interface CategoriesTableProps {
  categories: Prisma.CategoryGetPayload<{
    include: {
      products: {
        select: {
          id: true;
        };
      };
    };
  }>[];
}

export const CategoriesTable = ({ categories }: CategoriesTableProps) => {
  return (
    <div>
      <DataTable columns={columnsCategory} data={categories} />
    </div>
  );
};

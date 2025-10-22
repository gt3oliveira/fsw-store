"use client";
import { ColumnDef } from "@tanstack/react-table";

interface Categories {
  products: {
    id: string;
  }[];
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
}
[];

export const columnsCategory: ColumnDef<Categories>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "products",
    header: "Produtos",
    cell: ({ row }) => {
      const products = row.original.products;
      return products.length;
    },
  },
  {
    accessorKey: "",
    header: "Procentagem das Vendas",
  },
];

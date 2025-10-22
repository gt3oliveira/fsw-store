"use client";
import { formatCurrency } from "@/helpers/format-currency";
import { ColumnDef } from "@tanstack/react-table";
import { ProductWithTotalPriceAndCategory } from "./products-table";

export const columns: ColumnDef<ProductWithTotalPriceAndCategory>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "category.name",
    header: "Categoria",
  },
  {
    accessorKey: "totalPrice",
    header: "Preço Total",
    cell: ({ row }) => {
      const product = row.original;
      return formatCurrency(product.totalPrice);
    },
  },
  {
    accessorKey: "basePrice",
    header: "Preço Base",
    cell: ({ row }) => {
      const product = row.original;
      return formatCurrency(Number(product.basePrice));
    },
  },
  {
    accessorKey: "",
    header: "Vendidos",
  },
];

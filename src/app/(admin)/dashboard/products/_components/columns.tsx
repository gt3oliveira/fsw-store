"use client";
import { formatCurrency } from "@/helpers/format-currency";
import { ProductWithTotalPrice } from "@/helpers/product";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<ProductWithTotalPrice>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "",
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

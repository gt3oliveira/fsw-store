"use client";
import { OrderProduct } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { qtdProductsSold } from "./categories-table";

type Categories = {
  products: {
    id: string;
    categoryId: string;
    orderProduct: OrderProduct[];
  }[];
  id: string;
  name: string;
};
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
    cell: ({ row }) => {
      const category = row.original;
      const ProductIdsToCategory = category.products.filter(
        (product) => category.id === product.categoryId,
      );

      const produtosVendidosDeUmaCategoria = ProductIdsToCategory.flatMap(
        (product) => product.orderProduct,
      );

      const qtdProdutosVendidosDeUmaCategoria =
        produtosVendidosDeUmaCategoria.reduce(
          (acc, curr) => acc + curr.quantity,
          0,
        );

      console.log(
        "qtdProdutosVendidosDeUmaCategoria",
        qtdProdutosVendidosDeUmaCategoria,
      );

      const percentage = qtdProductsSold
        ? (qtdProdutosVendidosDeUmaCategoria / qtdProductsSold) * 100
        : 0;

      return `${percentage.toFixed(2)}%`;
    },
  },
];

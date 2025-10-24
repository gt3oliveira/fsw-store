"use server";
import { prismaClient } from "@/lib/prisma";

export const QuantitySalesProducts = async () => {
  const orderproduct = await prismaClient.orderProduct.findMany();
  const qtdProductsSold = orderproduct.reduce(
    (acc, curr) => acc + curr.quantity,
    0,
  );
  return qtdProductsSold;
};

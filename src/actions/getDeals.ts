import { prismaClient } from "@/lib/prisma";
import { Product } from "@prisma/client";

export const getDeals = async (): Promise<Product[]> => {
  return await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });
};

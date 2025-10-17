import { prismaClient } from "@/lib/prisma";
import { Product } from "@prisma/client";

export const getKeyboards = async (): Promise<Product[]> => {
  return await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });
};

import { prismaClient } from "@/lib/prisma";
import { Product } from "@prisma/client";

export const getMouses = async (): Promise<Product[]> => {
  return await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });
};

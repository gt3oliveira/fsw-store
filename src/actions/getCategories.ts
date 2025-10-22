import { prismaClient } from "@/lib/prisma";
import { Category } from "@prisma/client";

export const getCategories = async (): Promise<Category[]> => {
  return await prismaClient.category.findMany({
    include: {
      products: {
        select: {
          id: true,
        },
      },
    },
  });
};

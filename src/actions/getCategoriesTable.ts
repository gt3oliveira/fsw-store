import { prismaClient } from "@/lib/prisma";

export const getCategoriesTable = async () => {
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

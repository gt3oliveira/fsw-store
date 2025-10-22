import { prismaClient } from "@/lib/prisma";

export const getProducts = async () => {
  return await prismaClient.product.findMany({
    include: {
      category: {
        select: { name: true },
      },
    },
    orderBy: {
      name: "asc",
    },
  });
};

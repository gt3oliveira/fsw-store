import { prismaClient } from "@/lib/prisma";

export const getProductsTable = async () => {
  return await prismaClient.product.findMany({
    include: {
      category: {
        select: { name: true },
      },
      orderProduct: true,
    },
    orderBy: {
      name: "asc",
    },
  });
};

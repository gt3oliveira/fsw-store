import { prismaClient } from "@/lib/prisma";

export const getProducts = async () => {
  return await prismaClient.product.findMany({
    orderBy: {
      name: "asc",
    },
  });
};

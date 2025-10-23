import { prismaClient } from "@/lib/prisma";

export const getOrdersTable = async () => {
  return await prismaClient.order.findMany({
    include: {
      orderProducts: {
        include: { product: true },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

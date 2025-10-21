import { prismaClient } from "@/lib/prisma";

export const getOrders = async (userId: string) => {
  return await prismaClient.order.findMany({
    where: {
      userId,
    },
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

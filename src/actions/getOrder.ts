import { prismaClient } from "@/lib/prisma";

export const getOrder = async (orderId: string) => {
  return await prismaClient.order.findUnique({
    where: {
      id: orderId,
    },
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
      user: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });
};

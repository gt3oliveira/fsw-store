import { prismaClient } from "@/lib/prisma";

export const getCategory = async (slug: string) => {
  return await prismaClient.category.findFirst({
    where: {
      slug: slug,
    },
    include: {
      products: true,
    },
  });
};

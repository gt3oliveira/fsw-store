import { prismaClient } from "@/lib/prisma";

export const getSuggestionsProducts = async (slug: string) => {
  return await prismaClient.product.findFirst({
    where: {
      slug,
    },
    include: {
      category: {
        include: {
          products: {
            where: {
              NOT: {
                slug,
              },
            },
          },
        },
      },
    },
  });
};

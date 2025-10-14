import Image from "next/image";
import { Categories } from "./_components/categories";
import { prismaClient } from "@/lib/prisma";
import { ProductList } from "./_components/product-list";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <div className="flex flex-col space-y-6 p-5">
      <Image
        src="/banner-55-off.svg"
        width={0}
        height={0}
        className="h-auto w-full"
        // sizes="100vw"
        alt="até 55% de descontos só esse mês"
      />

      <div className="flex items-center justify-center">
        <Categories />
      </div>

      <div className="-mx-5 space-y-2">
        <h2 className="px-5 font-bold">OFERTAS</h2>
        <ProductList products={deals} />
      </div>

      <Image
        src="/banner-mouses.svg"
        width={0}
        height={0}
        className="h-auto w-full"
        // sizes="100vw"
        alt="até 55% de descontos em mouses"
      />
    </div>
  );
}

import { Categories } from "./_components/categories";
import { prismaClient } from "@/lib/prisma";
import { ProductList } from "../../components/product-list";
import { SectionTitle } from "./_components/section-title";
import { PromoBanner } from "./_components/promo-banner";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });

  return (
    <div className="flex flex-col space-y-6 px-5">
      <PromoBanner
        src="/banner-55-off.svg"
        alt="até 55% de descontos só esse mês"
      />

      <div className="flex items-center justify-center">
        <Categories />
      </div>

      <div className="-mx-5 space-y-2">
        <SectionTitle>ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      <PromoBanner
        src="/banner-mouses.svg"
        alt="até 55% de descontos em Mouses"
      />

      <div className="-mx-5 space-y-2">
        <SectionTitle>teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>

      <PromoBanner
        src="/banner-fones.svg"
        alt="até 20% de descontos em Fones"
      />

      <div className="-mx-5 space-y-2">
        <SectionTitle>mouses</SectionTitle>
        <ProductList products={mouses} />
      </div>
    </div>
  );
}

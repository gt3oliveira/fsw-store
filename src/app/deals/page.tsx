import { ProductItem } from "@/components/product-item";
import { Badge } from "@/components/ui/badge";
import { computeProductTotalPrice } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";
import { PercentIcon } from "lucide-react";

export default async function DealsPage() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <div className="flex flex-col space-y-8 px-5">
      <Badge
        variant={"outline"}
        className="border-primary rounded-full border-2 px-3 py-[0.375rem] text-base uppercase"
      >
        <p>
          <PercentIcon size={20} />
        </p>
        Ofertas
      </Badge>

      <div className="grid w-full grid-cols-2 gap-x-5 gap-y-6">
        {deals.map((product) => (
          <ProductItem
            key={product.id}
            product={computeProductTotalPrice(product)}
            className="h-[176px] w-full"
          />
        ))}
      </div>
    </div>
  );
}

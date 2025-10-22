import { getDeals } from "@/actions/getDeals";
import { ProductItem } from "@/components/product-item";
import { Badge } from "@/components/ui/badge";
import { computeProductTotalPrice } from "@/helpers/product";
import { PercentIcon } from "lucide-react";

export default async function DealsPage() {
  const deals = await getDeals();

  return (
    <div className="flex flex-col space-y-8 px-5">
      <Badge variant={"heading"}>
        <p>
          <PercentIcon size={20} />
        </p>
        Ofertas
      </Badge>

      <div className="grid w-full grid-cols-2 gap-x-5 gap-y-6">
        {deals.map((product) => (
          <ProductItem
            key={product.id}
            product={{
              ...product,
              totalPrice: computeProductTotalPrice(product),
            }}
            className="h-[176px] w-full"
          />
        ))}
      </div>
    </div>
  );
}

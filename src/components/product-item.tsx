import { formatCurrency } from "@/helpers/format-currency";
import { ProductWithTotalPrice } from "@/helpers/product";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { ArrowDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductItemProps {
  product: ProductWithTotalPrice;
  className?: string;
}
export const ProductItem = ({ product, className }: ProductItemProps) => {
  return (
    <div className="mx-2 flex flex-col">
      <div
        className={cn(
          "bg-accent relative flex size-44 items-center justify-center rounded-lg",
          className,
        )}
      >
        {product.discountPercentage > 0 && (
          <Badge className="absolute top-3 left-3 rounded-full">
            <ArrowDownIcon />
            {product.discountPercentage}%
          </Badge>
        )}
        <Image
          src={product.imageUrls[0]}
          alt={product.name}
          width={0}
          height={0}
          className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
          sizes="100vw"
        />
      </div>
      <div>
        <p className="mt-2 line-clamp-1 text-sm">{product.name}</p>
      </div>
      <div className="flex items-center gap-2">
        {product.discountPercentage > 0 ? (
          <>
            <p className="font-semibold">
              {formatCurrency(product.totalPrice)}
            </p>
            <p className="text-[11px] line-through opacity-75">
              {formatCurrency(Number(product.basePrice))}
            </p>
          </>
        ) : (
          <p className="font-semibold">{formatCurrency(product.totalPrice)}</p>
        )}
      </div>
    </div>
  );
};

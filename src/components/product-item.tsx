import { formatCurrency } from "@/helpers/format-currency";
import { ProductWithTotalPrice } from "@/helpers/product";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { DiscountBadge } from "./discount-badge";

interface ProductItemProps {
  product: ProductWithTotalPrice;
  className?: string;
}
export const ProductItem = ({ product, className }: ProductItemProps) => {
  return (
    <Link href={`/product/${product.slug}`}>
      <div className="flex flex-col">
        <div
          className={cn(
            "bg-accent relative flex size-44 items-center justify-center rounded-lg",
            className,
          )}
        >
          {product.discountPercentage > 0 && (
            <DiscountBadge className="absolute top-3 left-3">
              {product.discountPercentage}
            </DiscountBadge>
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
            <p className="font-semibold">
              {formatCurrency(product.totalPrice)}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

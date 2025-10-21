import { formatCurrency } from "@/helpers/format-currency";
import { computeProductTotalPrice } from "@/helpers/product";
import { Prisma } from "@prisma/client";
import Image from "next/image";

interface OrderProductItemProps {
  orderProduct: Prisma.OrderProductGetPayload<{ include: { product: true } }>;
}
export const OrderProductItem = ({ orderProduct }: OrderProductItemProps) => {
  const productWithTotalPrice = computeProductTotalPrice(orderProduct.product);

  return (
    <div className="flex">
      <div className="flex w-full items-center gap-4">
        <div className="bg-accent flex h-[77px] w-[100px] items-center justify-center rounded-lg">
          <Image
            src={orderProduct.product.imageUrls[0]}
            alt={orderProduct.product.name}
            width={0}
            height={0}
            className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
            sizes="100vw"
          />
        </div>

        <div className="flex w-full flex-col gap-2">
          <div className="bg-accent flex items-center justify-center gap-1 px-2 py-1 text-xs">
            Vendido e entregue por: <strong>FSW Store</strong>
          </div>
          <div className="flex w-full justify-between">
            <div className="space-y-2">
              <p className="text-xs">{orderProduct.product.name}</p>
              <div className="flex items-center gap-2">
                <p className="font-bold">
                  {formatCurrency(productWithTotalPrice.totalPrice)}
                </p>
                {productWithTotalPrice.discountPercentage > 0 && (
                  <p className="text-xs line-through opacity-75">
                    {formatCurrency(Number(orderProduct.basePrice))}
                  </p>
                )}
              </div>
            </div>
            <div className="self-end">
              <p>Qdt: {orderProduct.quantity}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

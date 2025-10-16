"use client";
import { CartContext, CartProduct } from "@/providers/cart";
import Image from "next/image";
import { Button } from "./ui/button";
import { MinusIcon, PlusIcon, TrashIcon } from "lucide-react";
import { formatCurrency } from "@/helpers/format-currency";
import { useContext } from "react";

interface CartItemProps {
  product: CartProduct;
}

export const CartItem = ({ product }: CartItemProps) => {
  const { decreaseProductQuantity } = useContext(CartContext);

  const handleDecreaseQuantityClick = () => {
    decreaseProductQuantity(product.id);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="bg-accent flex h-[77px] w-[77px] items-center justify-center rounded-lg">
          <Image
            src={product.imageUrls[0]}
            alt={product.name}
            width={0}
            height={0}
            className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
            sizes="100vw"
          />
        </div>

        <div className="space-y-1">
          <p className="text-xs">{product.name}</p>
          <div className="flex items-center gap-2">
            <p className="text-sm font-bold">
              {formatCurrency(Number(product.totalPrice))}
            </p>
            {product.discountPercentage > 0 && (
              <p className="text-xs line-through opacity-75">
                {formatCurrency(Number(product.basePrice))}
              </p>
            )}
          </div>

          <div className="flex items-center gap-3">
            <Button
              size={"icon"}
              variant={"outline"}
              className="h-8 w-8"
              onClick={handleDecreaseQuantityClick}
            >
              <MinusIcon />
            </Button>
            <span className="text-xs">{product.quantity}</span>
            <Button
              size={"icon"}
              variant={"outline"}
              className="h-8 w-8"
              // onClick={handleIncreaseQuantity}
            >
              <PlusIcon />
            </Button>
          </div>
        </div>
      </div>

      <Button variant={"outline"}>
        <TrashIcon />
      </Button>
    </div>
  );
};

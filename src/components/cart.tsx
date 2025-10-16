"use client";
import { CartContext } from "@/providers/cart";
import { useContext } from "react";
import { CartItem } from "./cart-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { Separator } from "./ui/separator";
import { formatCurrency } from "@/helpers/format-currency";

export const Cart = () => {
  const { products, subtotal, total, totalDiscount } = useContext(CartContext);

  return (
    <div className="space-y-5 px-4">
      {products.length > 0 ? (
        <div className="space-y-8">
          {products.map((product) => (
            <CartItem
              key={product.id}
              product={computeProductTotalPrice(product) as any}
            />
          ))}

          <div className="flex flex-col gap-3 text-xs">
            <Separator />
            <div className="flex justify-between">
              <p>SubTotal:</p>
              <p>{formatCurrency(subtotal)}</p>
            </div>

            <Separator />
            <div className="flex justify-between">
              <p>Entrega:</p>
              <p>GRÁTIS</p>
            </div>

            <Separator />
            <div className="flex justify-between">
              <p>Descontos:</p>
              <p>{formatCurrency(totalDiscount)}</p>
            </div>

            <Separator />
            <div className="flex justify-between text-base font-bold">
              <p>Total:</p>
              <p>{formatCurrency(total)}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <p className="text-center text-lg opacity-75">
            Seu carrinho está vazio.
          </p>
          <p className="text-center text-sm opacity-75">
            Aproveite as ofertas e continue comprando.
          </p>
        </div>
      )}
    </div>
  );
};

"use client";
import { CartContext } from "@/providers/cart";
import { useContext } from "react";
import { CartItem } from "./cart-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { Separator } from "./ui/separator";
import { formatCurrency } from "@/helpers/format-currency";
import { ScrollArea } from "./ui/scroll-area";
import { Badge } from "./ui/badge";
import { ShoppingCartIcon } from "lucide-react";
import { Button } from "./ui/button";
import { createOrder } from "@/actions/order";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export const Cart = () => {
  const { data } = useSession();
  const { products, subtotal, total, totalDiscount } = useContext(CartContext);
  console.log(data?.user);
  const handleFinishPurchase = async () => {
    if (!data?.user) {
      return;
    }

    const order = await createOrder(products, (data.user as any).id);
    redirect(`/checkout-stripe/${order.id}`);
  };

  return (
    <div className="flex h-full flex-col gap-5 p-4">
      <Badge
        variant={"outline"}
        className="border-primary rounded-full border-2 px-3 py-[0.375rem] text-base uppercase"
      >
        <p>
          <ShoppingCartIcon size={20} />
        </p>
        Carrinho
      </Badge>

      {/* RENDERIZAR OS PRODUTOS */}
      <div className="flex h-full max-h-full flex-col gap-5 overflow-hidden">
        <ScrollArea className="h-full">
          <div className="flex h-full flex-col gap-5">
            {products.length > 0 ? (
              products.map((product) => (
                <CartItem
                  key={product.id}
                  product={computeProductTotalPrice(product) as any}
                />
              ))
            ) : (
              <div className="text-center opacity-75">
                <p className="text-lg">Seu carrinho está vazio.</p>
                <p className="text-sm">
                  Aproveite as ofertas e adicione produtos ao carrinho.
                </p>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>

      {products.length > 0 && (
        <div className="flex flex-col gap-3">
          <Separator />

          <div className="flex items-center justify-between text-xs lg:text-sm">
            <p>Subtotal</p>
            <p>{formatCurrency(subtotal)}</p>
          </div>

          <Separator />

          <div className="flex items-center justify-between text-xs lg:text-sm">
            <p>Entrega</p>
            <p>GRÁTIS</p>
          </div>

          <Separator />

          <div className="flex items-center justify-between text-xs lg:text-sm">
            <p>Descontos</p>
            <p>{formatCurrency(totalDiscount)}</p>
          </div>

          <Separator />

          <div className="flex items-center justify-between text-sm font-bold lg:text-base">
            <p>Total</p>
            <p>{formatCurrency(total)}</p>
          </div>

          <Button
            onClick={handleFinishPurchase}
            className="mt-5 font-bold uppercase"
          >
            Finalizar compra
          </Button>
        </div>
      )}
    </div>
  );
};

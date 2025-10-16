"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/helpers/format-currency";
import { ProductWithTotalPrice } from "@/helpers/product";
import { ArrowDownIcon, MinusIcon, PlusIcon, TruckIcon } from "lucide-react";
import { useState } from "react";

interface ProductInfoProps {
  product: Pick<
    ProductWithTotalPrice,
    "basePrice" | "description" | "discountPercentage" | "totalPrice" | "name"
  >;
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
  const [Quantity, setQuantity] = useState(1);

  const handleDecreaseQuantity = () => {
    Quantity > 1 && setQuantity(Quantity - 1);
  };

  const handleIncreaseQuantity = () => {
    setQuantity(Quantity + 1);
  };

  return (
    <div className="space-y-6 px-5">
      <div className="flex flex-col">
        <h2 className="text-lg">{product.name}</h2>
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold">
            {formatCurrency(product.totalPrice)}
          </h1>
          {product.discountPercentage > 0 && (
            <Badge className="rounded-full">
              <ArrowDownIcon />
              {product.discountPercentage}%
            </Badge>
          )}
        </div>
        {product.discountPercentage > 0 && (
          <div className="flex gap-1">
            <p className="text-[11px] opacity-75">De:</p>
            <p className="text-[11px] line-through opacity-75">
              {formatCurrency(product.basePrice)}
            </p>
          </div>
        )}
      </div>

      <div className="flex items-center gap-4">
        <Button
          size={"icon"}
          variant={"outline"}
          onClick={handleDecreaseQuantity}
        >
          <MinusIcon />
        </Button>
        <span>{Quantity}</span>
        <Button
          size={"icon"}
          variant={"outline"}
          onClick={handleIncreaseQuantity}
        >
          <PlusIcon />
        </Button>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-bold">Descrição</h3>
        <p className="text-justify text-sm opacity-75">{product.description}</p>
      </div>

      <Button className="w-full font-bold uppercase">
        Adicionar ao carrinho
      </Button>

      <div className="bg-accent flex items-center justify-between rounded-lg px-8 py-2">
        <div className="flex items-center gap-3">
          <TruckIcon size={30} />
          <div className="flex flex-col">
            <p>
              Entrega via <strong className="italic">FSPacket</strong>
            </p>
            <p className="text-primary text-sm">
              Envio para <strong>todo o Brasil</strong>
            </p>
          </div>
        </div>
        <p className="text-sm font-bold">Frete Grátis</p>
      </div>
    </div>
  );
};

"use client";
import { CartContext } from "@/providers/cart";
import { useContext } from "react";
import { CartItem } from "./cart-item";
import { computeProductTotalPrice } from "@/helpers/product";

export const Cart = () => {
  const { products } = useContext(CartContext);

  return (
    <div className="space-y-5 px-4">
      {products.map((product) => (
        <CartItem
          key={product.id}
          product={computeProductTotalPrice(product) as any}
        />
      ))}
    </div>
  );
};

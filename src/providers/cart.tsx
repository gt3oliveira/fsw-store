"use client";
import { Product } from "@prisma/client";
import { createContext } from "react";

interface CartProduct extends Product {
  quantity: number;
}

interface ICartContext {
  products: CartProduct[];
  addProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDiscount: number;
}

const CartContext = createContext<ICartContext>({
  cartBasePrice: 0,
  cartTotalPrice: 0,
  cartTotalDiscount: 0,
  products: [],
  addProduct: () => {},
  removeProduct: () => {},
} as ICartContext);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <CartContext.Provider
      value={{
        addProduct: () => {},
        removeProduct: () => {},
        cartBasePrice: 0,
        cartTotalPrice: 0,
        cartTotalDiscount: 0,
        products: [],
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

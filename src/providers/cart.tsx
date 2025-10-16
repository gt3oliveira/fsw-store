"use client";
import { ProductWithTotalPrice } from "@/helpers/product";
import { createContext, useState } from "react";

export interface CartProduct extends ProductWithTotalPrice {
  quantity: number;
}

interface ICartContext {
  products: CartProduct[];
  addProduct: (product: CartProduct) => void;
  removeProduct: (product: CartProduct) => void;
  decreaseProductQuantity: (productId: string) => void;
  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDiscount: number;
}

export const CartContext = createContext<ICartContext>({
  cartBasePrice: 0,
  cartTotalPrice: 0,
  cartTotalDiscount: 0,
  products: [],
  addProduct: () => {},
  removeProduct: () => {},
  decreaseProductQuantity: () => {},
} as ICartContext);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([]);
  const addProduct = (product: CartProduct) => {
    const existingProduct = products.some((p) => p.id === product.id);

    if (existingProduct) {
      setProducts((prev) =>
        prev.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + product.quantity,
            };
          }
          return cartProduct;
        }),
      );
      return;
    }

    setProducts((prev) => [...prev, product]);
  };

  const decreaseProductQuantity = (productId: string) => {
    setProducts((prev) =>
      prev
        .map((cartProduct) => {
          if (cartProduct.id === productId) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity - 1,
            };
          }
          return cartProduct;
        })
        .filter((cartProduct) => cartProduct.quantity > 0),
    );
  };

  const removeProduct = (product: CartProduct) => {
    setProducts(products.filter((p) => p.id !== product.id));
  };

  return (
    <CartContext.Provider
      value={{
        addProduct,
        removeProduct,
        decreaseProductQuantity,
        cartBasePrice: 0,
        cartTotalPrice: 0,
        cartTotalDiscount: 0,
        products,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

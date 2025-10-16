"use client";
import { ProductWithTotalPrice } from "@/helpers/product";
import { createContext, useMemo, useState } from "react";

export interface CartProduct extends ProductWithTotalPrice {
  quantity: number;
}

interface ICartContext {
  products: CartProduct[];
  addProduct: (product: CartProduct) => void;
  removeProduct: (productId: string) => void;
  decreaseProductQuantity: (productId: string) => void;
  increaseProductQuantity: (productId: string) => void;
  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDiscount: number;
  total: number;
  subtotal: number;
  totalDiscount: number;
}

export const CartContext = createContext<ICartContext>({
  cartBasePrice: 0,
  cartTotalPrice: 0,
  cartTotalDiscount: 0,
  total: 0,
  subtotal: 0,
  totalDiscount: 0,
  products: [],
  addProduct: () => {},
  removeProduct: () => {},
  decreaseProductQuantity: () => {},
  increaseProductQuantity: () => {},
} as ICartContext);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([]);

  const subtotal = useMemo(() => {
    return products.reduce(
      (acc, product) => (acc + Number(product.basePrice)) * product.quantity,
      0,
    );
  }, [products]);

  const total = useMemo(() => {
    return products.reduce(
      (acc, product) => (acc + product.totalPrice) * product.quantity,
      0,
    );
  }, [products]);

  const totalDiscount = total - subtotal;

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

  const increaseProductQuantity = (productId: string) => {
    setProducts((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct.id === productId) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          };
        }
        return cartProduct;
      }),
    );
  };

  const removeProduct = (productId: string) => {
    setProducts(products.filter((p) => p.id !== productId));
  };

  return (
    <CartContext.Provider
      value={{
        addProduct,
        removeProduct,
        decreaseProductQuantity,
        increaseProductQuantity,
        cartBasePrice: 0,
        cartTotalPrice: 0,
        cartTotalDiscount: 0,
        total,
        subtotal,
        totalDiscount,
        products,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

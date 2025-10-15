import { Product } from "@prisma/client";

export interface ProductWithTotalPrice extends Omit<Product, "basePrice"> {
  basePrice: number;
  totalPrice: number;
}

export const computeProductTotalPrice = (
  product: Product,
): ProductWithTotalPrice => {
  if (product.discountPercentage === 0) {
    return {
      ...product,
      basePrice: Number(product.basePrice),
      totalPrice: Number(product.basePrice),
    };
  }

  const totalPrice =
    Number(product.basePrice) * (1 - product.discountPercentage / 100);

  return {
    ...product,
    basePrice: Number(product.basePrice),
    totalPrice,
  };
};

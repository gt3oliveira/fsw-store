import { Product } from "@prisma/client";
import { Pick } from "@prisma/client/runtime/library";

export interface ProductWithTotalPrice extends Product {
  totalPrice: number;
}

export const computeProductTotalPrice = (
  product: Pick<Product, "basePrice" | "discountPercentage">,
): number => {
  if (product.discountPercentage === 0) {
    return Number(product.basePrice);
  }

  const totalPrice =
    Number(product.basePrice) * (1 - product.discountPercentage / 100);

  return totalPrice;
};

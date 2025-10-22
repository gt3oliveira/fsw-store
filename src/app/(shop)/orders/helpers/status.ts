import { OrderStatus } from "@prisma/client";

export const formatStatus = (status: OrderStatus) => {
  return {
    [OrderStatus.WAITING_FOR_PAYMENT]: "PENDENTE",
    [OrderStatus.PAYMENT_CONFIRMED]: "CONFIRMADO",
  }[status];
};

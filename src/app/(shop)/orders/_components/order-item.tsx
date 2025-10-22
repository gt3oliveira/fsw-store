import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { OrderStatus, Prisma } from "@prisma/client";
import dayjs from "dayjs";
import { OrderProductItem } from "./order-product-item";
import { Separator } from "@/components/ui/separator";
import { formatCurrency } from "@/helpers/format-currency";
import { useMemo } from "react";
import { computeProductTotalPrice } from "@/helpers/product";
import { formatStatus } from "../helpers/status";

interface OrderItemProps {
  order: Prisma.OrderGetPayload<{
    include: {
      orderProducts: {
        include: {
          product: true;
        };
      };
    };
  }>;
}

export const OrderItem = ({ order }: OrderItemProps) => {
  const subtotal = useMemo(() => {
    return order.orderProducts.reduce(
      (acc, product) => (acc + Number(product.basePrice)) * product.quantity,
      0,
    );
  }, [order.orderProducts]);

  const total = useMemo(() => {
    return order.orderProducts.reduce((acc, product) => {
      const productTotalPrice = computeProductTotalPrice(product.product);
      return (acc + productTotalPrice) * product.quantity;
    }, 0);
  }, [order.orderProducts]);

  const totalDiscount = total - subtotal;

  return (
    <Card className="px-4 py-0">
      <Accordion type="single" collapsible>
        <AccordionItem value={order.id}>
          <AccordionTrigger>
            <div className="flex flex-col gap-1 text-left">
              <p className="uppercase">
                Pedido com {order.orderProducts.length} produto(s)
              </p>
              <span className="text-sm opacity-60">
                Feito em {dayjs(order.createdAt).format("DD/MM/YYYY")}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                <div className="font-bold">
                  <p>Status</p>
                  <p
                    className={`${
                      order.status === OrderStatus.WAITING_FOR_PAYMENT
                        ? "text-primary"
                        : "text-green-500"
                    }`}
                  >
                    {formatStatus(order.status)}
                  </p>
                </div>

                <div>
                  <p className="font-bold">Data</p>
                  <p className="opacity-75">
                    {dayjs(order.createdAt).format("DD/MM/YYYY")}
                  </p>
                </div>

                <div>
                  <p className="font-bold">Pagamento</p>
                  <p className="opacity-75">Cartão</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {order.orderProducts.map((orderProduct) => (
                  <OrderProductItem
                    key={orderProduct.id}
                    orderProduct={orderProduct}
                  />
                ))}
              </div>

              <div className="mt-2 flex flex-col gap-3">
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
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

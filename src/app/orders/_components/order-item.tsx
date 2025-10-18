import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Prisma } from "@prisma/client";
import dayjs from "dayjs";

interface OrderItemProps {
  order: Prisma.OrderGetPayload<{ include: { orderProducts: true } }>;
}

export const OrderItem = ({ order }: OrderItemProps) => {
  return (
    <Card className="px-4 py-0">
      <Accordion type="single" collapsible>
        <AccordionItem value={order.id}>
          <AccordionTrigger>
            <div className="flex flex-col gap-1 text-left">
              Pedido com {order.orderProducts.length} produto(s)
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <div className="font-bold">
                  <p>Status</p>
                  <p className="text-primary">{order.status}</p>
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
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

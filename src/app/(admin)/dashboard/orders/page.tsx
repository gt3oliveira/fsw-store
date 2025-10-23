import { getOrdersTable } from "@/actions/getOrdersTable";
import { OrderItem } from "@/components/order-item";
import { Badge } from "@/components/ui/badge";
import { PackageCheckIcon } from "lucide-react";

export default async function OrdersPage() {
  const orders = await getOrdersTable();

  return (
    <div className="flex w-full flex-col space-y-10 p-10">
      <Badge variant={"heading"}>
        <p>
          <PackageCheckIcon size={20} />
        </p>
        Categorias
      </Badge>

      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold">
          Total de pedidos: {orders.length}
        </span>
      </div>

      <div className="space-y-3 overflow-y-auto">
        {orders.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}

import { authOptions } from "@/lib/auth";
import { PackageCheckIcon } from "lucide-react";
import { getServerSession } from "next-auth";
import { OrderItem } from "./_components/order-item";
import { getOrders } from "@/actions/getOrders";
import { Badge } from "@/components/ui/badge";

export default async function OrdersPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-2 p-5">
        <h2 className="font-bold">Acesso Negado!</h2>
        <p className="text-sm opacity-60">Faça login para ver seus pedidos</p>
      </div>
    );
  }

  const orders = await getOrders(session.user.id);

  return (
    <div className="flex flex-col space-y-8 px-5">
      <Badge variant={"heading"}>
        <p>
          <PackageCheckIcon size={20} />
        </p>
        Meus Pedidos
      </Badge>

      <div className="space-y-5">
        {orders.map((order) => (
          <OrderItem order={order} key={order.id} />
        ))}
      </div>
    </div>
  );
}

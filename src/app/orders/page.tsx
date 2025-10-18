import { BadgeTitlePage } from "@/components/badge-title-page";
import { authOptions } from "@/lib/auth";
import { prismaClient } from "@/lib/prisma";
import { PackageCheckIcon } from "lucide-react";
import { getServerSession } from "next-auth";
import { OrderItem } from "./_components/order-item";

export default async function OrdersPage() {
  const user = getServerSession(authOptions);

  if (!user) {
    return <div>Não autorizado</div>;
  }

  const orders = await prismaClient.order.findMany({
    where: {
      userId: (user as any).id,
    },
    include: {
      orderProducts: true,
    },
  });

  return (
    <div className="flex flex-col space-y-8 px-5">
      <BadgeTitlePage>
        <p>
          <PackageCheckIcon size={20} />
        </p>
        Meus Pedidos
      </BadgeTitlePage>

      <div className="space-y-5">
        {orders.map((order) => (
          <OrderItem order={order} key={order.id} />
        ))}
      </div>
    </div>
  );
}

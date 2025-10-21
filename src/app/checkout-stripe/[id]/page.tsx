import { Badge } from "@/components/ui/badge";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { FaStripe } from "react-icons/fa";
import { getOrders } from "@/actions/getOrders";
import Image from "next/image";
import { formatCurrency } from "@/helpers/format-currency";
import { PaymentButton } from "../_components/payment-button";

export default async function CheckoutStripePage({
  params,
}: {
  params: { id: string };
}) {
  const order = await getOrders(params.id);

  return (
    <div className="absolute top-0 z-10 flex h-full w-full flex-col bg-white px-12 py-4">
      <div className="flex flex-col items-center gap-8 text-black">
        <div className="flex w-full justify-between">
          <Link href={"/"} className="flex items-center gap-2">
            <p>
              <ArrowLeftIcon size={14} />
            </p>
            <Badge variant={"outline"} className="rounded-full border-zinc-200">
              <p className="text-xs font-bold text-black">{order?.user.name}</p>
            </Badge>
          </Link>
          <FaStripe size={44} />
        </div>

        <div className="flex h-[100px] w-[100px] items-center justify-center rounded-lg border border-gray-200">
          <Image
            src={order?.orderProducts.at(0)?.product.imageUrls[0] || ""}
            alt={order?.orderProducts.at(0)?.product.name || "Product Image"}
            width={0}
            height={0}
            className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
            sizes="100vw"
          />
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-1">
          <p className="text-sm opacity-75">
            {Number(order?.orderProducts.length) > 1
              ? `${order?.orderProducts.at(0)?.product.name} e mais ${
                  Number(order?.orderProducts.length) - 1
                } itens`
              : order?.orderProducts.at(0)?.product.name}
          </p>
          <p className="text-2xl font-bold">
            {formatCurrency(
              Number(order?.orderProducts.at(0)?.basePrice) *
                Number(order?.orderProducts.at(0)?.quantity),
            )}
          </p>
          <p className="line-clamp-2 text-center text-xs opacity-75">
            Escolha sua forma de pagamento ideal e conclua sua compra com
            segurança.
          </p>
        </div>

        <PaymentButton orderId={params.id} />
      </div>
    </div>
  );
}

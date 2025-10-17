import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { FaStripe } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaPix } from "react-icons/fa6";

export default function CheckoutStripePage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="absolute top-0 z-10 flex h-full w-full flex-col bg-white px-12 py-4">
      <div className="flex flex-col items-center gap-8 text-black">
        <div className="flex w-full justify-between">
          <Link href={"/"} className="flex items-center gap-2">
            <p>
              <ArrowLeftIcon size={14} />
            </p>
            <Badge variant={"outline"} className="rounded-full border-zinc-200">
              <p className="text-xs font-bold text-black">Gustavo Tavares</p>
            </Badge>
          </Link>
          <FaStripe size={44} />
        </div>

        <div className="h-[100px] w-[100px] rounded-lg bg-zinc-400/50">
          {/* DIV DA IMAGEM */}
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-1">
          <p className="text-sm opacity-75">Nome do produto</p>
          <p className="text-2xl font-bold">R$ 1.500,00</p>
          <p className="line-clamp-2 text-xs opacity-75">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti,
            dolorum alias porro perspiciatis consectetur praesentium libero
            debitis, quis asperiores natus enim eius necessitatibus temporibus
            cupiditate eum excepturi eos beatae reiciendis.
          </p>
          <p className="text-xs opacity-75">Qtd 3, R$ 520,00 cada</p>
        </div>

        <div className="mt-4 flex w-full gap-2">
          <Button className="flex-1 gap-1 bg-black hover:bg-black/80">
            <FcGoogle /> Pay
          </Button>
          <Button className="flex-1 bg-green-400 text-black hover:bg-green-400/80">
            Pagar com
            <strong className="flex items-center gap-1">
              PIX
              <FaPix />
            </strong>
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}

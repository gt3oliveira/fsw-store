"use client";
import { updateOrder } from "@/actions/order";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, Loader2Icon } from "lucide-react";
import { redirect } from "next/navigation";
import { useState } from "react";
import { FaPix } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export const PaymentButton = ({ orderId }: { orderId: string }) => {
  const [GPay, setGPay] = useState(false);
  const [Pix, setPix] = useState(false);

  const gPay = async () => {
    setGPay(true);
    await updateOrder(orderId);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    redirect("/");
  };

  const pix = async () => {
    setPix(true);
    await updateOrder(orderId);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    redirect("/");
  };

  return (
    <div className="mt-4 flex w-full gap-2">
      <Button
        className="flex-1 gap-1 bg-black hover:bg-black/80"
        onClick={gPay}
        disabled={GPay}
      >
        {GPay && <Loader2Icon className="animate-spin" />}
        <FcGoogle /> Pay
      </Button>
      <Button
        className="flex-1 bg-green-400 text-black hover:bg-green-400/80"
        onClick={pix}
        disabled={Pix}
      >
        {Pix && <Loader2Icon className="animate-spin" />}
        Pagar com
        <strong className="flex items-center gap-1">
          PIX
          <FaPix />
        </strong>
        <ArrowRightIcon />
      </Button>
    </div>
  );
};

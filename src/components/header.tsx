import Image from "next/image";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  MenuIcon,
  PercentIcon,
  ShoppingCartIcon,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Header = () => {
  return (
    <Card className="flex flex-row items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size={"icon"} variant={"outline"}>
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader className="text-lg font-semibold">
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>

          <div className="mt-2 space-y-4 p-4">
            <Button variant={"outline"} className="w-full justify-start">
              <LogInIcon />
              Fazer Login
            </Button>

            <Button variant={"outline"} className="w-full justify-start">
              <HomeIcon />
              Início
            </Button>

            <Button variant={"outline"} className="w-full justify-start">
              <PercentIcon />
              Ofertas
            </Button>

            <Button variant={"outline"} className="w-full justify-start">
              <ListOrderedIcon />
              Catálogo
            </Button>
          </div>
        </SheetContent>
      </Sheet>
      <Image src="/logo.svg" width={100} height={100} alt="FSW Store" />
      <Button size={"icon"} variant={"outline"}>
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};

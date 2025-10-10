import Image from "next/image";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { MenuIcon, ShoppingCartIcon } from "lucide-react";

export const Header = () => {
  return (
    <Card className="flex flex-row items-center justify-between p-[1.875rem]">
      <Button size={"icon"} variant={"outline"}>
        <MenuIcon />
      </Button>
      <Image src="/logo.svg" width={100} height={100} alt="FSW Store" />
      <Button size={"icon"} variant={"outline"}>
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};

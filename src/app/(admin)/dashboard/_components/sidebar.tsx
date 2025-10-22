import { Button } from "@/components/ui/button";
import {
  LayoutDashboardIcon,
  ListOrderedIcon,
  LogOutIcon,
  PackageCheckIcon,
  PackageIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Sidebar = () => {
  return (
    <div className="bg-background border-accent flex h-screen min-w-[300px] flex-col items-center space-y-8 border-r p-8">
      <Link href={"/"}>
        <Image src="/logo.svg" width={100} height={100} alt="FSW Store" />
      </Link>

      <div className="flex w-full flex-col gap-3">
        <Button variant={"outline"} className="justify-start">
          <LayoutDashboardIcon />
          Dashboard
        </Button>
        <Button variant={"outline"} className="justify-start">
          <PackageIcon />
          Produtos
        </Button>
        <Button variant={"outline"} className="justify-start">
          <ListOrderedIcon />
          Categorias
        </Button>
        <Button variant={"outline"} className="justify-start">
          <PackageCheckIcon />
          Pedidos
        </Button>
      </div>

      <div className="mt-auto flex w-full flex-col">
        <Button
          variant={"outline"}
          className="justify-start hover:border-red-500/40"
        >
          <LogOutIcon />
          Sair da loja
        </Button>
      </div>
    </div>
  );
};

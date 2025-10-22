"use client";
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
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const path = usePathname();

  return (
    <div className="bg-background border-accent flex h-screen min-w-[300px] flex-col items-center space-y-8 border-r p-8">
      <Link href={"/"}>
        <Image src="/logo.svg" width={100} height={100} alt="FSW Store" />
      </Link>

      <div className="flex w-full flex-col gap-3">
        <Link href={"/dashboard"}>
          <Button
            variant={"outline"}
            className={`w-full justify-start ${path === "/dashboard" && "ring-primary ring-2"}`}
          >
            <LayoutDashboardIcon />
            Dashboard
          </Button>
        </Link>
        <Link href="/dashboard/products">
          <Button
            variant={"outline"}
            className={`w-full justify-start ${path === "/dashboard/products" && "ring-primary ring-2"}`}
          >
            <PackageIcon />
            Produtos
          </Button>
        </Link>
        <Link href="/dashboard/categories">
          <Button
            variant={"outline"}
            className={`w-full justify-start ${path === "/dashboard/categories" && "ring-primary ring-2"}`}
          >
            <ListOrderedIcon />
            Categorias
          </Button>
        </Link>
        <Link href="/dashboard/deals">
          <Button
            variant={"outline"}
            className={`w-full justify-start ${path === "/dashboard/deals" && "ring-primary ring-2"}`}
          >
            <PackageCheckIcon />
            Pedidos
          </Button>
        </Link>
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

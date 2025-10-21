"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  PackageCheckIcon,
  PercentIcon,
  ShoppingCartIcon,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { Cart } from "./cart";
import { MenuItemSheet, MenuItemSheetLink } from "./sheet-menu-item";
import { BadgeTitlePage } from "./badge-title-page";

export const Header = () => {
  const { data: session, status } = useSession();
  async function handleLoginClick() {
    await signIn();
  }

  async function handleLogoutClick() {
    await signOut();
  }

  return (
    <Card className="flex flex-row items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size={"icon"} variant={"outline"}>
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetTitle className="sr-only">menu</SheetTitle>
          <BadgeTitlePage className="m-4">
            <p>
              <MenuIcon size={20} />
            </p>
            Menu
          </BadgeTitlePage>

          {status === "authenticated" && session?.user && (
            <div className="flex flex-col">
              <div className="mb-4 flex items-center gap-2 px-4">
                <Avatar>
                  <AvatarFallback>
                    {session.user.name?.[0].toUpperCase()}
                  </AvatarFallback>

                  {session.user.image && (
                    <AvatarImage src={session.user.image} />
                  )}
                </Avatar>

                <div className="flex flex-col">
                  <p className="font-medium">{session.user.name}</p>
                  <p className="text-sm opacity-75">Boas compras!</p>
                </div>
              </div>

              <Separator />
            </div>
          )}

          <div className="flex flex-col gap-3 px-4">
            {status === "unauthenticated" && (
              <MenuItemSheet onclick={handleLoginClick}>
                <LogInIcon />
                Fazer Login
              </MenuItemSheet>
            )}

            <MenuItemSheetLink href="/">
              <HomeIcon />
              Início
            </MenuItemSheetLink>

            <MenuItemSheetLink href="/orders">
              <PackageCheckIcon />
              Meus pedidos
            </MenuItemSheetLink>

            <MenuItemSheetLink href="/deals">
              <PercentIcon />
              Ofertas
            </MenuItemSheetLink>

            <MenuItemSheetLink href="/catalog">
              <ListOrderedIcon />
              Catálogo
            </MenuItemSheetLink>

            {status === "authenticated" && (
              <MenuItemSheet onclick={handleLogoutClick}>
                <LogOutIcon className="text-red-500" />
                Fazer Logout
              </MenuItemSheet>
            )}
          </div>
        </SheetContent>
      </Sheet>

      <Link href={"/"}>
        <Image src="/logo.svg" width={100} height={100} alt="FSW Store" />
      </Link>

      <Sheet>
        <SheetTrigger asChild>
          <Button size={"icon"} variant={"outline"}>
            <ShoppingCartIcon />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[420px]">
          <SheetTitle className="sr-only">Carrinho</SheetTitle>
          <Cart />
        </SheetContent>
      </Sheet>
    </Card>
  );
};

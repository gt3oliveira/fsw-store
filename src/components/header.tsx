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
  PercentIcon,
  ShoppingCartIcon,
} from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { Cart } from "./cart";
import { Badge } from "./ui/badge";

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
          <SheetHeader className="text-lg font-semibold">
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>

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
              <SheetClose asChild>
                <Button
                  onClick={handleLoginClick}
                  variant={"outline"}
                  className="w-full justify-start"
                >
                  <LogInIcon />
                  Fazer Login
                </Button>
              </SheetClose>
            )}

            <SheetClose asChild>
              <Link href={"/"}>
                <Button variant={"outline"} className="w-full justify-start">
                  <HomeIcon />
                  Início
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href={"/deals"}>
                <Button variant={"outline"} className="w-full justify-start">
                  <PercentIcon />
                  Ofertas
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href={"/catalog"}>
                <Button variant={"outline"} className="w-full justify-start">
                  <ListOrderedIcon />
                  Catálogo
                </Button>
              </Link>
            </SheetClose>

            {status === "authenticated" && (
              <SheetClose asChild>
                <Button
                  onClick={handleLogoutClick}
                  variant={"outline"}
                  className="w-full justify-start"
                >
                  <LogOutIcon className="text-red-500" />
                  Fazer Logout
                </Button>
              </SheetClose>
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
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <Badge
                variant={"outline"}
                className="border-primary rounded-full border-2 px-3 py-[0.375rem] text-base uppercase"
              >
                <p>
                  <ShoppingCartIcon />
                </p>
                Carrinho
              </Badge>
            </SheetTitle>
          </SheetHeader>
          <Cart />
        </SheetContent>
      </Sheet>
    </Card>
  );
};

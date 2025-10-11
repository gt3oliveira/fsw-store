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
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";

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

          <div className="space-y-4 px-4">
            {status === "unauthenticated" && (
              <Button
                onClick={handleLoginClick}
                variant={"outline"}
                className="w-full justify-start"
              >
                <LogInIcon />
                Fazer Login
              </Button>
            )}

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

            {status === "authenticated" && (
              <Button
                onClick={handleLogoutClick}
                variant={"outline"}
                className="w-full justify-start"
              >
                <LogOutIcon className="text-red-500" />
                Fazer Logout
              </Button>
            )}
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

"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { SheetClose } from "./ui/sheet";

interface SheetMenuItemProps {
  children: React.ReactNode;
  href?: string;
  onclick?: () => void;
}

export const MenuItemSheet = ({ children, onclick }: SheetMenuItemProps) => {
  return (
    <SheetClose asChild>
      <Button
        onClick={onclick}
        variant={"outline"}
        className="w-full justify-start"
      >
        {children}
      </Button>
    </SheetClose>
  );
};

export const MenuItemSheetLink = ({ children, href }: SheetMenuItemProps) => {
  return (
    <SheetClose asChild>
      <Link href={href as string}>
        <Button variant={"outline"} className="w-full justify-start">
          {children}
        </Button>
      </Link>
    </SheetClose>
  );
};

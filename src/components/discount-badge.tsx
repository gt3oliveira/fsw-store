import { ArrowDownIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DiscountBadgeProps {
  children: ReactNode;
  className?: string;
}

export const DiscountBadge = async ({
  children,
  className,
}: DiscountBadgeProps) => {
  return (
    <Badge className={cn(`rounded-full`, className)}>
      <ArrowDownIcon />
      {children}%
    </Badge>
  );
};

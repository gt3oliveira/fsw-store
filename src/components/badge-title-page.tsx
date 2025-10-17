import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

interface BadgeTitlePageProps {
  children: React.ReactNode;
  className?: string;
}

export const BadgeTitlePage = ({
  children,
  className,
}: BadgeTitlePageProps) => {
  return (
    <Badge
      variant={"outline"}
      className={cn(
        "border-primary rounded-full border-2 px-3 py-[0.375rem] text-base uppercase",
        className,
      )}
    >
      {children}
    </Badge>
  );
};

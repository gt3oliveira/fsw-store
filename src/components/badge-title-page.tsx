import { Badge } from "./ui/badge";

export const BadgeTitlePage = ({ children }: { children: React.ReactNode }) => {
  return (
    <Badge
      variant={"outline"}
      className="border-primary rounded-full border-2 px-3 py-[0.375rem] text-base uppercase"
    >
      {children}
    </Badge>
  );
};

import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import { ListOrderedIcon } from "lucide-react";
import { CategoryItem } from "./_components/category-item";

export default async function CatalogPage() {
  const categories = await prismaClient.category.findMany();

  return (
    <div className="flex flex-col space-y-8 p-5">
      <Badge
        variant={"outline"}
        className="border-primary rounded-full border-2 px-3 py-[0.375rem] text-base uppercase"
      >
        <p>
          <ListOrderedIcon />
        </p>
        Catálogo
      </Badge>

      <div className="grid w-full grid-cols-2 gap-6">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}

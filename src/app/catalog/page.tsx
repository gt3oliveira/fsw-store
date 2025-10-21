import { ListOrderedIcon } from "lucide-react";
import { CategoryItem } from "./_components/category-item";
import { getCategories } from "@/actions/getCategories";
import { Badge } from "@/components/ui/badge";

export default async function CatalogPage() {
  const categories = await getCategories();

  return (
    <div className="flex flex-col space-y-8 px-5">
      <Badge variant={"heading"}>
        <p>
          <ListOrderedIcon size={20} />
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

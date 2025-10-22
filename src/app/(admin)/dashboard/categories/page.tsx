import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ListOrderedIcon, PlusIcon } from "lucide-react";
import { CategoriesTable } from "./_components/categories-table";
import { getCategoriesTable } from "@/actions/getCategoriesTable";

export default async function CategoriesPage() {
  const categories = await getCategoriesTable();

  return (
    <div className="flex w-full flex-col space-y-10 p-10">
      <Badge variant={"heading"}>
        <p>
          <ListOrderedIcon size={20} />
        </p>
        Categorias
      </Badge>

      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold">
          Total de categorias: {categories.length}
        </span>
        <Button>
          <PlusIcon />
          Adicionar Categoria
        </Button>
      </div>

      <div className="overflow-y-auto">
        <CategoriesTable categories={categories} />
      </div>
    </div>
  );
}

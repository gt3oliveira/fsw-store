import { Badge } from "@/components/ui/badge";
import { CATEGORY_ICON } from "@/constants/category-icon";
import { Category } from "@prisma/client";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
}

export const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <Badge
        variant={"outline"}
        className="flex w-full items-center justify-center rounded-lg py-3"
      >
        <p>{CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}</p>
        <span className="text-xs font-semibold">{category.name}</span>
      </Badge>
    </Link>
  );
};

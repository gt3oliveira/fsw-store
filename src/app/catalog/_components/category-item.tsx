import { Category } from "@prisma/client";
import Image from "next/image";

interface CategoryItemProps {
  category: Category;
}

export const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex h-[150px] w-full items-center justify-center rounded-tl-lg rounded-tr-lg bg-gradient-to-tr from-[#5033c3] to-[#5033c3]/20">
        <Image
          src={category.imageUrl}
          alt={category.name}
          width={0}
          height={0}
          className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
          sizes="100vw"
        />
      </div>
      <div className="bg-accent rounded-br-lg rounded-bl-lg py-3 text-center">
        <p className="text-sm font-semibold">{category.name}</p>
      </div>
    </div>
  );
};

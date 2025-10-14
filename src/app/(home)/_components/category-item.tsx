import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client";
import {
  HeadphonesIcon,
  KeyboardIcon,
  MonitorIcon,
  MouseIcon,
  SpeakerIcon,
  SquareIcon,
} from "lucide-react";

interface CategoryItemProps {
  category: Category;
}

export const CategoryItem = ({ category }: CategoryItemProps) => {
  const categoryIcon = {
    keyboards: <KeyboardIcon size={16} />,
    monitors: <MonitorIcon size={16} />,
    headphones: <HeadphonesIcon size={16} />,
    mousepads: <SquareIcon size={16} />,
    speakers: <SpeakerIcon size={16} />,
    mouses: <MouseIcon size={16} />,
  };

  return (
    <Badge
      variant={"outline"}
      className="flex w-full items-center justify-center rounded-lg py-3"
    >
      <p>{categoryIcon[category.slug as keyof typeof categoryIcon]}</p>
      <span className="text-xs font-semibold">{category.name}</span>
    </Badge>
  );
};

import { getCategory } from "@/actions/getCategory";
import { ProductItem } from "@/components/product-item";
import { Badge } from "@/components/ui/badge";
import { CATEGORY_ICON } from "@/constants/category-icon";
import { computeProductTotalPrice } from "@/helpers/product";

export default async function CategoryProducts({
  params,
}: {
  params: { slug: string };
}) {
  const category = await getCategory(params.slug);

  if (!category) {
    return null;
  }

  return (
    <div className="flex flex-col space-y-8 px-5">
      <Badge variant={"heading"}>
        <p>{CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}</p>
        {category.name}
      </Badge>

      <div className="grid w-full grid-cols-2 gap-x-5 gap-y-6">
        {category.products.map((product) => (
          <ProductItem
            key={product.id}
            product={computeProductTotalPrice(product)}
            className="h-[176px] w-full"
          />
        ))}
      </div>
    </div>
  );
}

import { getProducts } from "@/actions/getProducts";

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}

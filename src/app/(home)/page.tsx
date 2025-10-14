import Image from "next/image";
import { Categories } from "./_components/categories";

export default function Home() {
  return (
    <div className="p-5">
      <Image
        src="/banner-55-off.svg"
        width={0}
        height={0}
        className="h-auto w-full"
        // sizes="100vw"
        alt="Banner 55% off"
      />

      <div className="mt-8 flex items-center justify-center">
        <Categories />
      </div>
    </div>
  );
}

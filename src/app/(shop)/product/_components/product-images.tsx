"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  name: string;
  imageUrls: string[];
}

export const ProductImages = ({ imageUrls, name }: ProductImagesProps) => {
  const [image, setImage] = useState(imageUrls[0]);

  return (
    <div className="flex flex-col space-y-6">
      <div className="bg-accent flex h-[380px] w-full items-center justify-center">
        <Image
          src={image}
          alt={name}
          width={0}
          height={0}
          className="h-auto max-h-[70%] w-full max-w-[80%] object-contain"
          sizes="100vw"
        />
      </div>
      <div className="grid grid-cols-4 gap-4 px-5">
        {imageUrls.map((url) => (
          <Button
            key={url}
            className={`h-[100px] w-full cursor-pointer p-0 ${
              url === image && "ring-primary ring-2"
            }`}
            variant={"secondary"}
            onClick={() => setImage(url)}
          >
            <Image
              src={url}
              alt={name}
              width={0}
              height={0}
              className="h-auto max-h-[70%] w-full max-w-[80%] object-contain"
              sizes="100vw"
            />
          </Button>
        ))}
      </div>
    </div>
  );
};

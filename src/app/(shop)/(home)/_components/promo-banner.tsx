import Image, { ImageProps } from "next/image";

export const PromoBanner = ({ alt, ...props }: ImageProps) => {
  return (
    <Image
      width={0}
      height={0}
      className="h-auto w-full"
      // sizes="100vw"
      alt={alt}
      {...props}
    />
  );
};

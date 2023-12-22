//https://blog.gogrow.dev/next-js-14-the-power-of-url-in-state-management-7d38a4e34ca8

import Link from "next/link";

export default function ProductPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const selectedColor = (searchParams?.color || "blue") as string;
  const selectedSize = (searchParams?.size || "M") as string;

  const sizeVariants = ["S", "M", "L", "XL"];

  return (
    // ...
    <div>
      {sizeVariants.map((size, index) => (
        <Link
          key={index}
          href={`?${new URLSearchParams({
            color: selectedColor,
            size,
          })}`}
          className={`${
            selectedSize === size ? "bg-blue-500" : "bg-gray-200"
          } mr-2 inline-block h-8 w-8 text-center leading-8`}
        >
          {size}
        </Link>
      ))}
    </div>
  );
}

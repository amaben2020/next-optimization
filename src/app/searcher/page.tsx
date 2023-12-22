"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

// the selected size query should be highlighted

// copied query should continue on new tab

const Searcher = () => {
  const sizeVariants = ["S", "M", "L", "XL"];

  const params = useSearchParams();

  const selectedColor = params.get("color") ?? "blue";
  const selectedSize = params.get("size") ?? "M";
  console.log(selectedColor);

  return (
    <div className="p-20">
      <h3>
        Selected: {selectedSize} -- {selectedColor}
      </h3>
      <div className="flex gap-x-4">
        {sizeVariants.map((size, index) => (
          <Link
            href={`?size=${size}&color=${index % 2 === 0 ? "red" : "blue"}`}
            key={`${index}--`}
            className={`bg-${selectedColor}-600 p-5 rounded-md hover:bg-${selectedColor}-400`}
            style={{
              background: selectedColor,
            }}
          >
            {" "}
            {size}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Searcher;

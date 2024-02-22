"use client";

import Link from "next/link";

function NewProductItem({ imgOne, label, price, color, param }) {
	/* prettier-ignore */
	return (  
    <Link href={`/product/${param}`}>
      <div className="flex flex-col gap-3 items-start justify-center bg-slate-200 p-4">
        <img src={imgOne} alt={label} className="mb-5" />
        <p className="font-bold text-2xl">
          {label}
        </p>
        <p className="text-xl">
          Color: {color}
        </p>
        <p className="text-xl">
          Price: {price}
        </p>
      </div>
    </Link>
  );
}

export default NewProductItem;

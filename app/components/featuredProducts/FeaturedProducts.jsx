"use client";

import Link from "next/link";
import FeaturedProductItem from "./FeaturedProductsItem";
import data from "./data";

function FeaturedProducts() {
	/* prettier-ignore */
	return (  
    <div className="py-4 px-6">
      <div className="flex flex-row items-center justify-between py-6">
        <h2 className="text-3xl font-bold">Productos destacados</h2>
        <Link href={"/destacados"}>
          <p className="text-gray-400 text-xl font-semibold">Ver todo</p>
        </Link>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4 items-stretch">
        {
          data.map(item => (
            <FeaturedProductItem
              key={item.label}
              imgOne={item.imgOne}
              label={item.label}
              price={item.price}
              color={item.color}
              param={item.param}
            />
          ))
        }
      </div>
    </div>
  );
}

export default FeaturedProducts;

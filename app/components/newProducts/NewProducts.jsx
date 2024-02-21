"use client";

import "./NewProducts.css";
import Link from "next/link";
import NewProductItem from "./NewProductItem";
import data from "./data";

function NewProducts() {
	/* prettier-ignore */
	return (  
    <div className="py-4 px-6">
      <div className="flex flex-row items-center justify-between py-6">
        <h2 className="text-3xl font-bold">Nuevos Productos</h2>
        <Link href={"/nuevos"}>
          <p className="text-gray-400 text-xl font-semibold">Ver todo</p>
        </Link>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4 items-stretch">
        {
          data.map(item => (
            <NewProductItem
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

export default NewProducts;

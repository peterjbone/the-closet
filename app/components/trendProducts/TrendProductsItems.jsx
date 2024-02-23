"use client";

import Link from "next/link";
import "./TrendProductsItems.css";

function TrendProductItems({
	id,
	nombre,
	marca,
	descripcion,
	precio,
	inOferta,
	oferta,
	categoria,
	genero,
	imagen,
	tallas,
	colores
}) {
	const nombreParam = nombre
		.split(" ")
		.join("-")
		.toLowerCase()
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "");

	/* prettier-ignore */
	return (  
    <Link href={`/producto/${nombreParam}`} className="block h-[100%]">
      <div className="
      p-4
      h-[100%]
      flex
      flex-col
      gap-2
      items-center
      justify-center
      text-black"
      >
        <div className="mb-5 img-area">
          <img src={imagen[1]} alt={nombre} className="new-product-image img-back" />
          <img src={imagen[0]} alt={nombre} className="new-product-image img-front" />
        </div>
        <p className="font-bold text-2xl text-left">
          {nombre.toLowerCase()}
        </p>
        <p className="text-xl">
          ${precio} USD
        </p>
      </div>
    </Link>
  );
}

export default TrendProductItems;

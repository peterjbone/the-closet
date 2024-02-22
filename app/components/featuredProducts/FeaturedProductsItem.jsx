"use client";

import Link from "next/link";

function NewProductItem({
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
    <Link href={`/producto/${nombreParam}`}>
      <div className="flex flex-col gap-3 items-center justify-center bg-slate-600 p-4 text-white">
        <img src={imagen[0]} alt={nombre} className="mb-5 w-[260px] h-[310px]" />
        <p className="font-bold text-2xl">
          {nombre}
        </p>
        <p className="text-xl">
          Color: {colores}
        </p>
        <p className="text-xl">
          Precio: {precio}
        </p>
      </div>
    </Link>
  );
}

export default NewProductItem;

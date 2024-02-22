"use client";

import data from "@/app/utils/db.json";

/**
 * Esta función busca un producto específico de
 * entre todas las categorías
 * @param param es el nombre del producto que llega por parámetro
 * @returns Devuelve un objeto del producto buscado.
 */
function findProduct(param) {
	let product = {};

	data.forEach((item) => {
		item.productos.forEach((subitem) => {
			const nombreParam = subitem.nombre
				.split(" ")
				.join("-")
				.toLowerCase()
				.normalize("NFD")
				.replace(/[\u0300-\u036f]/g, "");

			if (nombreParam === param) {
				product = subitem;
			}
		});
	});

	return product;
}

//* PRODUCT PAGE
function Page({ params }) {
	const producto = findProduct(params.nombre);

	/* prettier-ignore*/
	return (  
    <div className="w-full h-[50vh] text-center flex flex-col justify-center items-center">
      <h1 className="text-black text-5xl text-center">
        {producto.nombre}
      </h1>
      <img src={producto.imagen[0]} alt={producto.nombre} width={250} height={250} />
    </div>
  );
}

export default Page;

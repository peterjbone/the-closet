"use client";

import Link from "next/link";

function ProductCard({
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
	console.log(nombre);

	let nombreParam = "";

	if (nombre && typeof nombre === "string") {
		nombreParam = nombre
			.split(" ")
			.join("-")
			.toLowerCase()
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "");
	}

	console.log(nombreParam);

	const coloresFiltrado = colores.join(" / ");

	/* prettier-ignore */
	return (
    <Link href={`/producto/${nombreParam}`}>
				<div className="flex flex-col gap-3 items-center justify-center bg-slate-200 p-4">
					<img src={imagen[0]} alt={nombre} className="mb-5 w-[250px] h-[300px]" />
					<p className="font-bold text-2xl">{nombre}</p>
					<p className="text-xl">{coloresFiltrado}</p>
					<p className="text-xl">${precio}</p>
				</div>
			</Link>
	);
}

export default ProductCard;

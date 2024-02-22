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
	const nombreParam = nombre.split(" ").join("-").toLowerCase();

	/* prettier-ignore */
	return (
    <Link href={`/product/${nombreParam}`}>
      <div className="bg-purple-500 text-2xl font-semibold flex flex-row justify-center items-center w-[200px] h-[200px] m-6">
        <p>
          {nombre}
        </p>
      </div>
				{/* <div className="flex flex-col gap-3 items-start justify-center bg-slate-200 p-4">
					<img src={} alt={} className="mb-5" />
					<p className="font-bold text-2xl">{}</p>
					<p className="text-xl">{}</p>
					<p className="text-xl">{}</p>
				</div> */}
			</Link>
	);
}

export default ProductCard;

"use client";

import "./ProductCard.css";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

function ProductCard({
	id,
	nombre,
	marca,
	precio,
	inOferta,
	oferta,
	categoria,
	genero,
	imagen,
	tallas,
	colores
}) {
	//? Formateando el nombre a parametro
	let nombreParam = "";
	if (nombre && typeof nombre === "string") {
		nombreParam = nombre
			.split(" ")
			.join("-")
			.toLowerCase()
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "");
	}

	//? Formateando los colores de array a string
	let coloresSintaxis = "";
	if (colores.length > 1) {
		coloresSintaxis = colores.join(" / ");
	} else {
		coloresSintaxis = colores.join();
	}

	/* prettier-ignore */
	return (
		<Link href={`/producto/${nombreParam}`}>
			<section className="card">
				<img
					src={imagen[0]}
					alt={nombre}
					className="card-img"
				/>
        <div className="card-details">
          <section className="mb-6">
            <h3 className="text-2xl">{nombre.toUpperCase()}</h3>
            <p className="font-semibold italic">{marca}</p>
          </section>
          <p className="font-semibold"> {categoria} & {genero} </p>
          <p className="mb-4"> {coloresSintaxis} </p>
					<section className="card-reviews">
						<FaStar className="ratings-star" />{" "}
						<FaStar className="ratings-star" />{" "}
						<FaStar className="ratings-star" />{" "}
						<FaStar className="ratings-star" />
						<span className="total-reviews">4</span>
					</section>
					<section className="card-price">
						<div className="price text-start">
							${precio}
						</div>
						<div className="bag">
							<FaBagShopping className="bag-icon" />
						</div>
					</section>
				</div>
			</section>
		</Link>
	);
}

export default ProductCard;

/* 
FIRST CODE - BACKUP
      <Link href={`/producto/${nombreParam}`}>
				<div className="flex flex-col gap-3 items-center justify-center bg-slate-200 p-4">
					<img src={imagen[0]} alt={nombre} className="mb-5 w-[250px] h-[300px]" />
					<p className="font-bold text-2xl">{nombre}</p>
					<p className="text-xl">{coloresFiltrado}</p>
					<p className="text-xl">${precio}</p>
				</div>
			</Link>
*/

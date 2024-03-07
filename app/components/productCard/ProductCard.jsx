"use client";

import "./ProductCard.css";
import Link from "next/link";
import { FaBagShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

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
	colores,
	productoNuevo
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

	function addToCart() {}

	function addToWishlist() {}

	/* prettier-ignore */
	return (
		<Link href={`/producto/${nombreParam}`}>
      <section className="card relative">
        
          <div className="absolute top-4 right-3">
            <FaBagShopping size={25} color="#000" />
          </div>
          <div className="absolute top-4 left-3">
            <FaHeart size={25} color="#000" />
          </div>
          
          <img src={imagen[0]} alt={nombre} className="card-img" />
        
          <div className="card-details">
            <section className="mb-2">
              <h3 className="text-xl">{nombre.toUpperCase()}</h3>
              <div className="flex flex-row gap-4">
                <p className="font-semibold italic">{marca}</p>
                {productoNuevo && <p className="text-red-600">NUEVO</p>}
              </div>
            </section>
            
            <p className="font-semibold">
              {categoria} & {genero}
            </p>

            <p className="mb-4">
              {coloresSintaxis}
            </p>
    
            <section className="flex flex-row items-center justify-center">
              <div className="text-xl ">${precio}</div>
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

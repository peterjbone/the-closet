"use client";

import "./ProductCard.css";
import Link from "next/link";
import { FaBagShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import ProductImage from "./ProductImage.jsx";
import { useState } from "react";

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
	//? estado local para las imagenes
	const [bigImage, setBigImage] = useState(imagen[0]);

	//? Formateando el nombre a parametro (en minuscula, guiones medios y sin acentos)
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

	//if (nombre === "chomba falabe") console.log(imagen);

	/* prettier-ignore */
	return (
    <section className="card relative">
        
          <div className="absolute top-4 right-3">
            <FaBagShopping size={25} color="#000" />
          </div>
          <div className="absolute top-4 left-3">
            <FaHeart size={25} color="#000" />
          </div>
          
          <Link href={`/producto/${nombreParam}`}>
            <img src={bigImage} alt={nombre} className="card-img" />
          </Link>
          <div
            className="
            flex
            flex-row
            items-center
            justify-start
            gap-3
            h-[2.5rem]
            w-full
            px-4
            mb-3">
            {
              imagen.map((img) => {
                  return (
                    <ProductImage
                      key={img}
                      imgUrl={img}
                      changeBigImage={(image) => setBigImage(image)}
                      bigImage={bigImage}
                    />
                  )
              })
            }
          </div>
        
          <Link href={`/producto/${nombreParam}`}>
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
           </Link>  
        
			</section>
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

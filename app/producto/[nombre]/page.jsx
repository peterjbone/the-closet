"use client";
import { FaCartShopping } from "react-icons/fa6";
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

  // Limpia la información:
  const finalBrands = producto.marca.toUpperCase();
  const finalSizes = producto.tallas.map((talla) => talla);
  const finalColors = producto.colores.map((color) => color);
  const finalStars = Array(4).fill("⭐");

  /* prettier-ignore*/
  return (  
	<div>
    <div className="w-full h-[50vh] flex flex-row justify-center items-center gap-5 border mb-8">
      <img src={producto.imagen[0]} alt={producto.nombre} width={250} height={250} className=""/>
	  <div className="flex flex-col border p-5 bg-slate-100 shadow-md">
      <div className="text-left pb-3">
	  <h3 className="text-3xl">{finalBrands}</h3>
    <h2 className="text-xl">{producto.precio} $</h2>
	  <h2 className="text-black text-3xl">
        {producto.nombre}
      </h2>
      </div>
	  <h2 className="text-yellow mb-3">{finalStars} (3)</h2>
	  <h2 className="flex mt-4">{finalColors.map((color)=> (
		<span
		key={color}
		className={`flex flex-row h-6 w-6 rounded-full mr-2 ${
		  color === "blanco"
			? "bg-white"
			: color === "verde"
			? "bg-green-500"
			: color === "rosa"
			? "bg-pink-400"
			: color === "negro"
			? "bg-black"
			: color === "naranja"
			? "bg-orange-500"
			: color === "gris"
			? "bg-gray-500"
			: color === "azul"
			? "bg-blue-500"
			: color === "azul"
			? "bg-blue-500"
			: color === "tostado"
			? "bg-amber-700"
			: color === "plata"
			? "bg-slate-300"
			: color === "rojo"
			? "bg-red-600"
			: color === "cemento"
			? "bg-gray-700"
			: color == "azul marino"
			? "bg-blue-950"
			: color == "bordo"
			? "bg-pink-900"
			: color == "francia"
			? "bg-blue-700"
			: color == "ocre"
			? "bg-yellow-700"
			: color == "cuero"
			? "bg-yellow-600"
			: color == "marron"
			? "bg-amber-900"
			: color == "habano"
			? "bg-amber-800"
			: color == "cobre"
			? "bg-orange-600"
			: ""
		}`}
	  ></span>
		
	  ))}</h2>

	  <h2 className="flex flex-row gap-2">{finalSizes.map(talla => (
		<span key={talla} className="border w-full mt-5 text-center mb-3 p-1 hover:bg-blue-900 hover:text-white cursor-pointer">{talla}</span>
	  ))}</h2>
	 
	  <h2 className="bg-blue-400 hover:bg-blue-800 text-white w-full text-center text-2xl p-3 flex justify-center gap-4 items-center transition duration-300 ease-in-out cursor-pointer mt-8">
            Agregar
            <FaCartShopping />
      </h2>	
	  </div>
    </div>

    <div className="mx-auto flex flex-col  flexplace-content-center justify-center border shadow-xl p-4 mb-12 w-2/4 justify-items-center">
    <p className="mt-5 font-bold text-left border-b-2">Reseñas (1)</p>
        <p className="font-light text-xl  rounded-md mt-2 text-gray-600 bg-white p-1">
              Los pantalones de la marca Mambo son una opción versátil y
              elegante para cualquier ocasión casual. Confeccionados con
              materiales de alta calidad, estos pantalones ofrecen comodidad y
              estilo a partes iguales. Brindan una calidez y confort únicos.
         </p>
    </div>
	</div>

  );
}

export default Page;

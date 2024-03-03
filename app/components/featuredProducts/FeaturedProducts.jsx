"use client";

import "./FeaturedProducts.css";
import data from "../../utils/db.json"; //? Base de datos demo
import Link from "next/link";
import FeaturedProductItem from "./FeaturedProductsItem";

function FeaturedProducts() {
	//! HARDCODEO, buscar productos en la DB
	const currentCategory = data.find((item) => item.categoria === "destacados");
	const { productos } = currentCategory;

	/* prettier-ignore */
	return (  
    <div className="py-4 px-6">
      <div className="flex flex-row items-center justify-between py-6">
        <h2 className="text-3xl font-bold">Productos destacados ⭐</h2>
        <Link href={"/categoria/destacados"}>
          <p className="text-gray-400 hover:text-gray-700 text-xl font-semibold">Ver todo</p>
        </Link>
      </div>
      <div className="featureProducts-grid bg-gray-50">
        {
          productos.map((item, index) => {
            if (index <= 3) {
              return (
                <FeaturedProductItem
								key={item.nombre}
								id={item.id}
								nombre={item.nombre}
								marca={item.marca}
								descripcion={item.descripcion}
								precio={item.precio}
								inOferta={item.inOferta}
								oferta={item.oferta}
								categoria={item.categoria}
								genero={item.genero}
								imagen={item.imagen}
								tallas={item.tallas}
								colores={item.colores}
                />
              )
            }
          })
        }
      </div>
    </div>
  );
}

export default FeaturedProducts;

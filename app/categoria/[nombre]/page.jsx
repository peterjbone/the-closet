"use client";

import ProductCard from "@/app/components/productCard/ProductCard";
import { useProductsStore } from "@/app/hooks/productsStore";
import { useEffect } from "react";

function Page({ params }) {
	const { nombre } = params;
	const getAllProducts = useProductsStore((state) => state.getAllProducts);
	const getMenProducts = useProductsStore((state) => state.getMenProducts);
	const allProducts = useProductsStore((state) => state.allProducts);

	//? Definiendo cual "action" usar
	useEffect(() => {
		switch (nombre) {
			case "todos":
				getAllProducts();
				break;

			case "hombres":
				getMenProducts();
				break;

			case "mujeres":
				break;

			case "infantes":
				break;

			default:
				return null;
		}
	}, []);

	//? Para definir
	let categoria = "";
	switch (nombre) {
		case "todos":
			categoria = "Categoría: Todos los productos";
			break;

		case "hombres":
			categoria = "Categoría: Hombres";
			break;

		case "mujeres":
			categoria = "Categoría: Mujeres";
			break;

		default:
			break;
	}

	let productos = allProducts;
	console.log(productos);

	/* prettier-ignore */
	return (
    <div className="text-center font-bold text-5xl">
      <h1 className="mb-5">{categoria}</h1>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        {
          productos.map((item, index) => (
            <ProductCard
              key={index}
              id={item.id}
              nombre={item.nombre}
              marca={item.marca}
              precio={item.precio}
              oferta={item.oferta}
              activo={item.Activo}
              productoNuevo={item.productoNuevo}
              categoria={item.categoria}
              genero={item.genero}
              subcategoria={item.subcategoria}
              imagen={item.imagen}
              tallas={item.tallas}
              colores={item.colores}
              opcion={item.opcion}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Page;

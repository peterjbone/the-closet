"use client";

import "./TrendProducts.css";
import Link from "next/link";
import TrendProductItems from "./TrendProductsItems";
import { useProductsStore } from "../../hooks/productsStore";
import { useEffect } from "react";

function TrendProducts() {
	const getTrendyProducts = useProductsStore(
		(state) => state.getTrendyProducts
	);
	const removeAllTrendy = useProductsStore((state) => state.removeAllTrendy);

	useEffect(() => {
		getTrendyProducts();

		return () => {
			removeAllTrendy();
		};
	}, []);

	const trendy = useProductsStore((state) => state.trendy);
	//console.log(trendy);

	/* prettier-ignore */
	return (  
    <div className="py-4 px-6">
      <div className="flex flex-row items-center justify-between py-6">
        <h2 className="text-3xl font-bold">Productos en Tendencia ⭐</h2>
        <Link href={"/categoria/tendencias"}>
          <p className="text-gray-400 hover:text-gray-700 text-xl font-semibold">Ver todo</p>
        </Link>
      </div>
      <div className="featureProducts-grid bg-gray-50">
        {
          trendy.map((item, index) => {
            if (index <= 3) {
              return (
                <TrendProductItems
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

export default TrendProducts;

"use client";

import "./FeaturedProducts.css";
import Link from "next/link";
import FeaturedProductItem from "./FeaturedProductsItem";
import { useProductsStore } from "../../hooks/productsStore";
import { useEffect } from "react";

function FeaturedProducts() {
	const getFeaturedProducts = useProductsStore(
		(state) => state.getFeaturedProducts
	);
	const removeAllFeatured = useProductsStore(
		(state) => state.removeAllFeatured
	);

	useEffect(() => {
		getFeaturedProducts();

		return () => {
			removeAllFeatured();
		};
	}, []);

	const featured = useProductsStore((state) => state.featured);
	//console.log(featured);

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
          featured.map((item, index) => {
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

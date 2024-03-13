"use client";

import "./ProductCard.css";
import Link from "next/link";
import ProductImage from "./ProductImage.jsx";
import { useEffect, useState } from "react";
import Hearts from "../../components/hearts/Hearts.jsx";
import { BiSolidTrash } from "react-icons/bi";
import { useFavoritesStore } from "../../hooks/favoritesStore";
import { useCounterStore } from "../../hooks/counterStore";

function ProductCard({
  _id,
  nombre,
  marca,
  descripcion,
  precio,
  oferta,
  activo,
  productoNuevo,
  categoria,
  genero,
  subcategoria,
  imagen,
  tallas,
  colores,
  opcion,
  isFavoritesScreen,
}) {
  //Quitar de favoritos:
  const removeFromFavorites = useFavoritesStore(
    (state) => state.removeFavorites
  );
  //Reducir el contador
  const decrement = useCounterStore((state) => state.decrement);
  //Estado para controlar la visibilidad de la card
  const [isVisible, setIsVisible] = useState(true);

  //? estado local para las imagenes
  const [bigImage, setBigImage] = useState(imagen[0]);

  useEffect(() => {
    setBigImage(imagen[0]);

    return () => setBigImage(null);
  }, []);

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
  const handleRemoveFromFavorites = () => {
    removeFromFavorites(_id, nombre);
    decrement();
    setIsVisible(false);
  };

  /* prettier-ignore */
  return (
    <>
    { isVisible && (
		<section className="card relative">
			<div className="absolute top-3 right-2">
		       {isFavoritesScreen ? (
              <BiSolidTrash size={25} color="#000" onClick={handleRemoveFromFavorites} />
            ): (
            <Hearts 
            nombre={nombre} 
            marca={marca} 
            precio={precio} 
            _id={_id} 
            imagen={imagen}
            categoria={categoria}
            genero={genero}
            colores={colores}
            productoNuevo={productoNuevo}
            
            />)}
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
				{imagen.map((img, index) => {
					return (
						<ProductImage
              key={img}
              index={index}
							imgUrl={img}
							changeBigImage={(image) => setBigImage(image)}
							bigImage={bigImage}
						/>
					);
				})}
			</div>

			<Link href={`/producto/${nombreParam}`}>
				<div className="card-details">
					<section className="mb-2">
						<h3 className="text-lg">{nombre.toUpperCase()}</h3>
						<div className="flex flex-row gap-4">
							<p className="font-semibold italic">{marca}</p>
							{productoNuevo && <p className="text-red-600">NUEVO</p>}
						</div>
					</section>

					<div className="flex flex-row justify-between">
						<div>
							<p className="font-semibold">
								{categoria} & {genero}
							</p>
							<p className="mb-4">{coloresSintaxis}</p>
						</div>
            <section className="flex flex-row items-center justify-center">
              <div className="text-xl ">${precio}</div>
            </section>
					</div>

				</div>
			</Link>
		</section>)}
  </>
	);
}

export default ProductCard;

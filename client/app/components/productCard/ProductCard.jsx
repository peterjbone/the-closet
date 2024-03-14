"use client";

import "./ProductCard.css";
import Link from "next/link";
import { useEffect, useState } from "react";

import { FaHeart } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useFavoritesStore } from "../../hooks/favoritesStore";

import ProductImage from "./ProductImage.jsx";

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
	opcion
}) {
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

	//? --------------------------- MANEJANDO FAVORITOS ----------------------------
	const router = useRouter();
	const { data: session } = useSession();

	const [isFavorite, setIsFavorite] = useState(false);
	const addFavorite = useFavoritesStore((state) => state.addFavorite);
	const removeFavorite = useFavoritesStore((state) => state.removeFavorite);
	const favorites = useFavoritesStore((state) => state.favorites);
	useEffect(() => {
		// mantener favoritos al cargar el componente
		favorites.forEach((item) => {
			if (item._id === _id) {
				setIsFavorite(true);
			}
		});
	}, [favorites]);

	const userId = session?.user._id;
	const productId = _id;
	const productForFavorite = {
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
		opcion
	};

	function handleFavorites() {
		if (!session?.user) {
			return router.push("/login");
		}

		if (!isFavorite) {
			addFavorite(userId, productForFavorite);
			setIsFavorite(true);
			toast.success("Se agrego a favoritos");
			return true;
		}

		if (isFavorite) {
			removeFavorite(userId, productId);
			setIsFavorite(false);
			toast.success("Se elimino de favoritos");
			return true;
		}
	}

	//* ----------------------------- COMPONENTE "PRODUCTCARD" ----------------------------
	return (
		<div className="card relative">
			{/* Corazón de favoritos */}
			<div className="absolute top-3 right-2" onClick={handleFavorites}>
				<FaHeart size={30} color={`${isFavorite ? "#f00" : "#000"}`}></FaHeart>
			</div>

			{/* Imagenes del producto */}
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

			{/* Info del producto */}
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
		</div>
	);
}

export default ProductCard;

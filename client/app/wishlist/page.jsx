"use client";

import "./styles.css";
import { useRouter } from "next/navigation";
import { useFavoritesStore } from "../hooks/favoritesStore";

//? Importando componentes a usar
import CategoryNav from "../components/categoryNav/CategoryNav";
import FavoriteCard from "./favoriteCard/FavoriteCard";
import Footer from "../components/footer/Footer";

function WishListPage() {
	//? Creando router
	const router = useRouter();

	//? Para regresar a la pagina anterior
	const handleGoBack = () => {
		router.back();
	};

	//? Obteniendo los estados global "favorites"
	const favorites = useFavoritesStore((state) => state.favorites);
	const favoriteTotalQuantity = useFavoritesStore(
		(state) => state.favoriteTotalQuantity
	);

	//* ---------------------- PAGINA WISHLIST ---------------------
	/* prettier-ignore */
	return (
		<div>
			{/* NAVBAR DE CATEGORIAS */}
			<CategoryNav />

			{/* BOTON Y FAVORITOS */}
			<div>
				<button
					onClick={handleGoBack}
          className="
            block
            p-4
            w-fit
            mx-auto
            mb-6
          bg-black
          text-white
            text-xl
            font-semibold
            rounded-md
            hover:cursor-pointer">
					Regresar 🔙
				</button>

				{/* Mostrar los favoritos si hay (sino un mensaje) */}
				{favorites.length ? (
					<div className="card-container">
						{favorites.map(
							({
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
							}) => (
								<FavoriteCard
									key={nombre + colores.toString()}
									_id={_id}
									nombre={nombre}
									marca={marca}
									descripcion={descripcion}
									precio={precio}
									oferta={oferta}
									activo={activo}
									productoNuevo={productoNuevo}
									categoria={categoria}
									genero={genero}
									subcategoria={subcategoria}
									imagen={imagen}
									tallas={tallas}
									colores={colores}
									opcion={opcion}
								/>
							)
						)}
					</div>
				) : (
					<div className="w-full min-h-screen bg-slate-300 flex items-center justify-center">
						<h1 className="text-xl text-center font-bold ">
							NO TIENES FAVORITOS AGREGADOS
						</h1>
					</div>
				)}

				<Footer />
			</div>
		</div>
	);
}

export default WishListPage;

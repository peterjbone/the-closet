"use client";

import { toast } from "react-hot-toast";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState, useCallback, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";

import Avatar from "../navbar/Avatar";
import MenuItem from "../navbar/MenuItem";

import { useCartStore } from "../../hooks/cartStore";
import { useFavoritesStore } from "../../hooks/favoritesStore";

function CategoryNav({ query, handleInputChange }) {
	//? Creando un router
	const router = useRouter();

	//? Cargando datos de sesion de usuario
	const { data: session } = useSession();

	//? Para abrir el menú de usuario
	const [isOpen, setIsOpen] = useState(false);
	const toggleOpen = useCallback(() => {
		setIsOpen((value) => !value);
	}, []);

	//? Para salir de la sesión
	function handleSignout() {
		toast
			.promise(
				new Promise((resolve) => setTimeout(() => resolve(true), 2000)),
				{
					loading: "Cerrando sesión...",
					success: <b>Haz cerrado tu sesión.</b>,
					error: <b>Algo salió mal.</b>
				},
				{
					success: {
						duration: 1000
					}
				}
			)
			.then(() => signOut());
	}

	//? Estado global de "Cart"
	let cartTotalQuantity = useCartStore((state) => state.cartTotalQuantity);

	//? Estado global de "favorites"
	const defaultUserFavorites = useFavoritesStore(
		(state) => state.defaultUserFavorites
	);
	useEffect(() => {
		if (session?.user._id) defaultUserFavorites(session?.user._id);
	}, [session?.user]);

	let favorites = useFavoritesStore((state) => state.favorites);

	//* ----------------- COMPONENTE CATEGORY-NAV ---------------------
	/* prettier-ignore*/
	return (
		<header className="font-semibold border-b-gray-300 border-[3px] mb-5">
			<nav
				className="
        max-w-screen-xl
        mx-auto
        flex
        flex-row
        justify-between
        items-center
        py-4
      ">
				{/* LOGO - VOLVER A CASA */}
				<Link href={"/"} className="font-bold text-[2rem] text-black">
					The closet
				</Link>

				{/* SEARCHBAR */}
				<div>
					<input
						type="text"
						placeholder="Busca lo que deseas..."
						onChange={handleInputChange}
						value={query}
						className="
              w-[20rem]
              p-3
              border-[3px]
            border-black
              rounded-xl
              text-xl
            "
					/>
				</div>

        {/*  ENLACES DE USUARIO */}
				<div className="flex flex-row gap-4 items-center relative">
					{/* Lista de deseos */}
					<div className="relative">
						<Link
							href={`${session?.user ? "/wishlist" : "/login"}`}
							className="hover:cursor-pointer hover:text-red-600">
							<FaRegHeart size={32} />
						</Link>
						<div
							onClick={() => router.push(`${session?.user ? "/wishlist" : "/login"}`)}
							className="
              absolute
              z-10
              top-6
              left-5
              w-[25px]
              h-[25px]
              p-1
              bg-orange-500
              text-black
              text-[1rem]
              font-semibold
              rounded-full
              flex
              items-center
              justify-center
              hover:cursor-pointer
            ">
							{favorites.length}
						</div>
					</div>
					{/* carrito */}
					<div className="relative">
						<Link href={"/cart"}>
							<MdOutlineShoppingCart size={32} />
						</Link>
						<div
							onClick={() => router.push("/cart")}
							className="
              absolute
              z-10
              top-6
              left-5
              w-[25px]
              h-[25px]
              p-1
              bg-orange-500
              text-black
              text-[1rem]
              font-semibold
              rounded-full
              flex
              items-center
              justify-center
              hover:cursor-pointer
            ">
							{cartTotalQuantity}
						</div>
					</div>
					{/* cuenta de usuario */}
					<div className="hover:cursor-pointer" onClick={toggleOpen}>
						<Avatar src={session?.picture} />
					</div>
					{session?.user && (
						<p className="text-xl underline"> {session?.user.name} </p>
					)}
					{isOpen && (
						<div className="absolute z-10 top-12 left-28 border-black border-[5px]">
							<div className="flex flex-col cursor-pointer">
								{session?.user ? (
									<>
										<MenuItem onClick={() => {}} label="Editar perfil" />
										<MenuItem onClick={() => {}} label="Historial de compras" />
										<MenuItem
											onClick={() => handleSignout()}
											label="Salir de la sesión"
										/>
									</>
								) : (
									<>
										<MenuItem
											onClick={() => router.push("/login")}
											label="Inicio sesión"
										/>
										<MenuItem
											onClick={() => router.push("/register")}
											label="Registro"
										/>
									</>
								)}
							</div>
						</div>
					)}
				</div>
			</nav>
		</header>
	);
}

export default CategoryNav;

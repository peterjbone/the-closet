import { useState, useCallback } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Avatar from "../navbar/Avatar";
import MenuItem from "../navbar/MenuItem";
import { useCartStore } from "../../hooks/cartStore";

function CategoryNav({ query, handleInputChange }) {
	const router = useRouter();
	const cartTotalQuantity = useCartStore((state) => state.cartTotalQuantity);

	//? Cargando datos de sesion de usuario
	const { data: session } = useSession();

	//? Para abrir el menú de usuario
	const [isOpen, setIsOpen] = useState(false);
	const toggleOpen = useCallback(() => {
		setIsOpen((value) => !value);
	}, []);

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
				{/* VOLVER A CASA */}
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

				<div className="flex flex-row gap-4 items-center">
					{/* LISTA DE DESEOS */}
					<Link
						href={"/wishlist"}
						className="hover:cursor-pointer hover:text-red-600">
						<FaRegHeart size={32} />
					</Link>
					{/* CARRITO */}
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
					{/* USUARIO */}
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
											label="Login"
										/>
										<MenuItem
											onClick={() => router.push("/register")}
											label="Sign up"
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

"use client";

import "./Navbar.css";
import { toast } from "react-hot-toast";
import { useState, useCallback } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import Avatar from "./Avatar";
import MenuItem from "./MenuItem";

const Header = () => {
	const router = useRouter();
	const [isOpen, setIsOpen] = useState(false);
	const { data: session } = useSession();

	//? Mensaje por consola para saber si cargo el usuario
	console.log(session?.user || "No hay sesión iniciada.");

	//? Para abrir el menú desplegable
	const toggleOpen = useCallback(() => {
		setIsOpen((value) => !value);
	}, []);

	//? Para salir de la sesión
	async function handleSignout() {
		toast
			.promise(
				new Promise((resolve) => setTimeout(() => resolve(true), 2000)),
				{
					loading: "Cerrando sesión...",
					success: <b>Haz cerrado tu sesión.</b>,
					error: <b>Algo salió mal.</b>
				}
			)
			.then(() => signOut());
	}

	/* prettier-ignore */
	return (
		<header className="font-semibold border-b-gray-500">
			<div
				className="
        max-w-screen-xl
        mx-auto
        flex
        flex-row
        justify-between
        py-4">
				<Link href={"/"} className="font-bold text-[2rem] text-black">
					The closet
				</Link>
				<nav className="text-gray-800 text-xl flex flex-row items-center gap-6">
					<Link href={"/zapatos"}>Hombre</Link>
					<Link href={"/ropa"}>Mujer</Link>
					<Link href={"/descuento"}>Niños y Niñas</Link>
				</nav>
				<div className="flex flex-row items-center gap-4 relative">
					<FaRegHeart size={30} />
					<MdOutlineShoppingCart size={35} />
					<div onClick={toggleOpen}>
						<Avatar />
          </div>
          
          {isOpen && (
            <div className="absolute z-10 top-12 left-28 border-black border-[5px]">
              <div className="flex flex-col cursor-pointer">
                {
                  session?.user ? (
                    <>
                    <MenuItem onClick={() => {}} label="Editar perfil"/>
                    <MenuItem onClick={() => {}} label="Historial de compras"/>
                    <MenuItem onClick={() => handleSignout()} label="Salir de la sesión"/>
                    </>
                  ) : (
                    <>
                      <MenuItem onClick={()=> router.push("/login")} label="Login"/>
                      <MenuItem onClick={()=> router.push("/register")} label="Sign up" />
                    </> 
                  )
                }
              </div>
            </div>
          )}

				</div>

			</div>
		</header>
	);
};

export default Header;

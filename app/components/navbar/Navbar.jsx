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
import { useCounterStore } from "../../hooks/counterStore";

const Header = () => {
  const counter = useCounterStore((state) => state.counter);

  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  //? Mensaje por consola para saber si cargo el usuario
  // console.log("SESSION:");
  // console.log(session);

  //? Para abrir el menú de usuario
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
          error: <b>Algo salió mal.</b>,
        },
        {
          success: {
            duration: 1000,
          },
        }
      )
      .then(() => signOut());
  }

  /* prettier-ignore */
  return (
		<header className="font-semibold border-b-gray-300 border-[3px]">
			<div
				className="
        max-w-screen-xl
        mx-auto
        flex
        flex-row
        justify-between
        py-4
        ">
				<Link href={"/"} className="font-bold text-[2rem] text-black">
					The closet
				</Link>
				<nav className="text-gray-800 text-xl flex flex-row items-center gap-6">
					<Link href={"/categoria/hombres"}>Hombre</Link>
					<Link href={"/categoria/mujeres"}>Mujer</Link>
					<Link href={"/categoria/infantes"}>Niños y Niñas</Link>
				</nav>
				<div className="flex flex-row items-center gap-4 relative">
					<div className="hover:cursor-pointer hover:text-red-600">
				 {/* Es una ruta temporal */}
					<Link href="/wishlist/[3]" as="/wishlist/3">
						<div className="flex gap-2">
							
						<FaRegHeart size={30} />
						  <p className="rounded-full bg-red-500 h-5 w-5 flex items-center justify-center text-white text-xs font-semibold">{counter}</p>
						  </div>
					 </Link>
					</div>
          <div>
            <Link href={"/cart"}>
						  <MdOutlineShoppingCart size={35} />
            </Link>
					</div>
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
			</div>
		</header>
	);
};

export default Header;

"use client";

//import "animate.css";
import "./Navbar.css";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { toast } from "react-hot-toast";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import Avatar from "./Avatar";
import MenuItem from "./MenuItem";
import { useCartStore } from "../../hooks/cartStore";

const Header = () => {
  //? Creando router
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

  //? trayendo el estado global de cart
  const cartTotalQuantity = useCartStore((state) => state.cartTotalQuantity);

  /* prettier-ignore */
  return (
		<header className="font-semibold border-b-gray-300 border-[3px]">
			<nav
				className="
        max-w-screen-xl
        mx-auto
        flex
        flex-row
        justify-between
        py-4
        ">
        {/* LOGO */}
				<Link href={"/"} className="font-bold text-[2rem] text-black">
					The closet
        </Link>
        {/* ENLACES */}
				<div className="text-gray-800 text-xl flex flex-row items-center gap-6">
					<Link href={"/categoria/hombres"}>Hombre</Link>
					<Link href={"/categoria/mujeres"}>Mujer</Link>
					<Link href={"/categoria/infantes"}>Niños y Niñas</Link>
				</div>
				<div className="flex flex-row items-center gap-4 relative">
					<Link
						href={"/wishlist"}
						className="hover:cursor-pointer hover:text-red-600">
						<FaRegHeart size={32} />
					</Link>
					<div className="relative" >
            <Link href={"/cart"} >
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
};

export default Header;

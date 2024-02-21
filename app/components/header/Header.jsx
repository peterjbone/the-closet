import Link from "next/link";
import Avatar from "./Avatar";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

const Header = () => {
	/* prettier-ignore */
	return (
    <header className="font-semibold border-b-gray-500">
      <div className="
        max-w-screen-xl
        mx-auto
        flex
        flex-row
        justify-between
        py-6"
      >
        <Link href={"/"} className="font-bold text-[2rem] text-black">The closet</Link>
        <nav className="text-gray-800 text-xl flex flex-row items-center gap-6">
          <Link href={"/productos"}>Todos los Productos</Link>
          <Link href={"/zapatos"}>Zapatos</Link>
          <Link href={"/ropa"}>Ropa</Link>
          <Link href={"/descuento"}>En descuento</Link>
        </nav>
        <div className="flex flex-row items-center gap-4">
          <FaRegHeart size={30}/>
          <MdOutlineShoppingCart size={35} />
          <Avatar/>  
        </div>
      </div>
		</header>
	);
};

export default Header;

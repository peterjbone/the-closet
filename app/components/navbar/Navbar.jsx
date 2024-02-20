import Link from "next/link";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
	/* prettier-ignore */
	return (  
    <div className="flex flex-row items-center justify-between bg-white p-6 ">
      <div>
        <span className="font-bold text-4xl">The closet</span>
      </div>
      <div>
        <ul className="flex flex-row gap-4 font-semibold text-xl">
          <li>
            <Link href="/kids">
              Kids
            </Link>
          </li>
          <li>
            <Link href="/men">
              Men
            </Link>
          </li>
          <li>
            <Link href="/women">
              Women
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-row">
        <FaMagnifyingGlass size={30} />
        <div className="font-semibold text-xl">Sign in</div>
        <FaShoppingCart size={30} />
      </div>
    </div>
  );
}

export default Navbar;

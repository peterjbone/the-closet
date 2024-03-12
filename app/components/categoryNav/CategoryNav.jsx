import "./CategoryNav.css";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";
import { useCounterStore } from "../../hooks/counterStore";

function CategoryNav({ query, handleInputChange }) {
  const counter = useCounterStore((state) => state.counter);

  /* prettier-ignore*/
  return (  
    <nav className="category-nav">
      <Link href={"/"} >
        <div className="sub-logo">The closet</div>
      </Link>

      <div className="nav-container">
        <input
          type="text"
          placeholder="Busca lo que desees."
          className="search-input"
          onChange={handleInputChange}
          value={query}
        />
      </div>

      <div className="profile-container">
       <Link href="/wishlist/[3]" as="/wishlist/3">
          <div className="flex gap-1">
            <FaRegHeart className="nav-icons"/>
            <p className="rounded-full bg-red-500 h-5 w-5 flex items-center justify-center text-white text-xs font-semibold">{counter}</p>
          </div>
        </Link>
        <a href="#">
          <FiShoppingCart className="nav-icons"/>
        </a>
        <a href="#">
          <FaRegUser className="nav-icons"/>
        </a>
      </div>
    </nav>
  );
}

export default CategoryNav;

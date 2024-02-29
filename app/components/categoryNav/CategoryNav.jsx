import "./CategoryNav.css";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";

function CategoryNav({ query, handleInputChange }) {
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
        <a href="#">
          <FaRegHeart className="nav-icons"/>
        </a>
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

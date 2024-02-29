import "./Sidebar.css";
import Category from "./categoryFilters/CategoryFilters";
import Colors from "./colors/Colors";
import Price from "./price/Price";
import { FaFilter } from "react-icons/fa";

function Sidebar({ handleRadioChange }) {
	/* prettier-ignore*/
	return (  
    <>
      <section className="sidebar">
        <h2 className="border-b-2 mb-5">
          Filtra tus resultados 🔍
        </h2>
        <Category  handleRadioChange={handleRadioChange}/>
        <Price  handleRadioChange={handleRadioChange}/>
        <Colors handleRadioChange={handleRadioChange}/>
      </section>
    </>
  );
}

export default Sidebar;

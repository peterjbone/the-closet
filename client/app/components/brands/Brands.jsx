import "./Brands.css";
import Button from "./Button";

function Brands({ handleBtnClick }) {
	/* prettier-ignore*/
	return (  
    <>
      <div>
        <h2 className="recommended-title">Filtra por marcas</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleBtnClick} value="" title="Todos" />
          <Button onClickHandler={handleBtnClick} value="adidas" title="Adidas" />
          <Button onClickHandler={handleBtnClick} value="mambo" title="Mambo" />
          <Button onClickHandler={handleBtnClick} value="batistella" title="Batistella" />
          <Button onClickHandler={handleBtnClick} value="taverniti" title="Taverniti" />
          <Button onClickHandler={handleBtnClick} value="falabela" title="Falabela" />
          <Button onClickHandler={handleBtnClick} value="eyelit" title="Eyelit" />
          <Button onClickHandler={handleBtnClick} value="casa-chic" title="Casa-chic" />
          <Button onClickHandler={handleBtnClick} value="toche" title="Toche" />
          <Button onClickHandler={handleBtnClick} value="jarvec" title="Jarvec" />
          <Button onClickHandler={handleBtnClick} value="topper" title="Topper" />
        </div>
      </div>
    </>
  );
}

export default Brands;

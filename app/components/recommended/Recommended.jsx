import "./Recommended.css";
import Button from "./Button";

function Recommended({ handleBtnClick }) {
	/* prettier-ignore*/
	return (  
    <>
      <div>
        <h2 className="recommended-title">Filtra por marcas</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleBtnClick} value="mambo" title="Mambo" />
          <Button onClickHandler={handleBtnClick} value="batistella" title="Batistella" />
          <Button onClickHandler={handleBtnClick} value="taverniti" title="Taverniti" />
          <Button onClickHandler={handleBtnClick} value="falabela" title="Falabela" />
        </div>
      </div>
    </>
  );
}

export default Recommended;

function Button({ onClickHandler, value, title }) {
	/* prettier-ignore */
	return (  
    <button
      onClick={ onClickHandler }
      value={ value }
      className="btns"
    >
      {title}
    </button>
  );
}

export default Button;

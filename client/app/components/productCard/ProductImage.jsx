"use client";

import { useEffect } from "react";

function ProductImage({ imgUrl, changeBigImage, bigImage, index }) {
	function handleClick() {
		if (bigImage !== imgUrl) {
			changeBigImage(imgUrl);
		}
	}

	//? Hace que siempre al renderizar la imagen grande sea igual a la primera imagen
	useEffect(() => {
		if (index === 0) {
			changeBigImage(imgUrl);
		}
	}, []);

	/* prettier-ignore */
	return ( 
    <div
      className={`
      h-full 
      w-[40px]
      transition
      cursor-pointer
      hover:border-2
      hover:border-black
      ${bigImage === imgUrl ? "border-b-4 border-b-orange-500" : "border-transparent"}
      `}
      onClick={handleClick}
    >
      <img
        src={imgUrl}
        alt="Product image"
        width={40}
        height={40}
        className="h-full w-full object-contain"
      />
    </div>
   );
}

export default ProductImage;

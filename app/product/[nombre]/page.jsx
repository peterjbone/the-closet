"use client";

import data from "@/app/components/newProducts/data";

function loadProduct(param) {
	const product = data.find((item) => item.param === param);
	return product;
}

function Page({ params }) {
	console.log(params);
	const product = loadProduct(params.nombre);
	console.log(product);

	/* prettier-ignore*/
	return (  
    <div className="w-full h-[50vh] text-center flex flex-row justify-center items-center">
      <h1 className="text-black text-5xl">
        {product.label}  👘
      </h1>
      <img src={product.imgOne} alt="" width={450} height={450} />
      <img src={product.imgTwo} alt="" width={450} height={450} />
    </div>
  );
}

export default Page;

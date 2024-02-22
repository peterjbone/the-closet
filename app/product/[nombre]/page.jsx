"use client";

//import data from "@/app/components/featuredProducts/data";
import data from "@/app/utils/db.json";

function findProduct(param) {
	let product = {};

	data.forEach((item) => {
		item.productos.forEach((subitem) => {
			const nombreParam = subitem.nombre.split(" ").join("-").toLowerCase();
			if (nombreParam === param) {
				product = subitem;
			}
		});
	});

	//console.log(product);
	return product;
}

function Page({ params }) {
	const product = findProduct(params.nombre);

	/* prettier-ignore*/
	return (  
    <div className="w-full h-[50vh] text-center flex flex-col justify-center items-center">
      <h1 className="text-black text-5xl text-center">
        {product.nombre}
      </h1>
      <img src={product.imagen[0]} alt={product.nombre} width={250} height={250} />
    </div>
  );
}

export default Page;

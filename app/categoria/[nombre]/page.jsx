"use client";

import "./style.css";
import { useEffect, useState } from "react";
import { useProductsStore } from "@/app/hooks/productsStore";

//? Importando componentes a usar
import ProductCard from "@/app/components/productCard/ProductCard";
import CategoryNav from "@/app/components/categoryNav/CategoryNav";
import Recommended from "@/app/components/recommended/Recommended";
import Sidebar from "@/app/components/sideBar/Sidebar";

function Page({ params }) {
	const { nombre } = params;
	const getAllProducts = useProductsStore((state) => state.getAllProducts);
	const removeAllProducts = useProductsStore(
		(state) => state.removeAllProducts
	);
	const getMenProducts = useProductsStore((state) => state.getMenProducts);
	const allProducts = useProductsStore((state) => state.allProducts);

	//? Definiendo cuales productos traer al estado global
	//? ejecuta cierta "action" dependiendo de la params que llego.
	useEffect(() => {
		switch (nombre) {
			case "todos":
				getAllProducts();
				break;

			case "hombres":
				getMenProducts();
				break;

			case "mujeres":
				break;

			case "infantes":
				break;

			default:
				return null;
		}
		return () => {
			removeAllProducts();
		};
	}, []);

	//? Definiendo el título de la categoría, dependiendo del params
	let titulo = "";
	switch (nombre) {
		case "todos":
			titulo = "Todos nuestros productos, en un solo lugar 👑";
			break;

		case "hombres":
			titulo = "Categoría Masculino / Adulto 🤵";
			break;

		case "mujeres":
			titulo = "Categoría Femenina / Adulta 👠";
			break;

		case "infantes":
			titulo = "Categoría infantil / Niños y Niñas 🧒";
			break;

		default:
			break;
	}

	//? Estos son todos los productos de determinada categoría (sin filtros aplicados)
	let productos = allProducts;

	const [selectedCategory, setSelectedCategory] = useState(null);
	const [query, setQuery] = useState("");

	//? ----------Input filter (Custom search) ----------------
	function handleInputChange(event) {
		setQuery(event.target.value);
	}

	//prettier-ignore
	const filteredItems = productos.filter(
		(producto) =>
			producto.nombre.toLowerCase().indexOf(query.toLowerCase()) !== -1
	);

	//? -----------Radio filter (for categories) -----------------
	function handleRadioChange(e) {
		setSelectedCategory(e.target.value);
	}

	//? ------------ Button filter (for brands) -------------
	function handleBtnClick(e) {
		setSelectedCategory(e.target.value);
	}

	//* -------- Creación de las cards y filtración de productos (si las hay)-----------
	function filteredData(products, selected, query) {
		let filteredProducts = products;

		// Filtrando: Input items
		if (query) {
			filteredProducts = filteredItems;
		}

		// Filtrando: Selecter filter
		//prettier-ignore
		if (selected) {
			filteredProducts = filteredProducts.filter(
				({ subcategoria, colores, marca, precio }) =>
					subcategoria === selected ||
					colores.some((color) => color === selected) ||
					marca === selected ||
					(precio <= selected && precio >= (selected - 10))
			);
		}

		//prettier-ignore
		const result = filteredProducts.map(
			({ imagen, nombre, precio, colores, categoria, genero, marca },index) => (
				<ProductCard
					key={index}
					nombre={nombre}
					imagen={imagen}
					precio={precio}
					colores={colores}
					categoria={categoria}
					genero={genero}
					marca={marca}
				/>
			)
		);

		return result;
	}

	const resultado = filteredData(productos, selectedCategory, query);

	/* prettier-ignore */
	return (
		<div>
      <CategoryNav query={query} handleInputChange={handleInputChange} />
      <h1 className="text-2xl text-center mb-6 font-bold">{titulo}</h1>
			<div className="flex flex-row">
        <Sidebar handleRadioChange={handleRadioChange}/>
				<div>
          <Recommended handleBtnClick={handleBtnClick} />
          {/* Products container */}
					<section className="card-container">
            {resultado}
					</section>
				</div>
			</div>
		</div>
	);
}

export default Page;

/*
FIRST VERSION CODE BACKUP
 <h1 className="mb-5">{categoria}</h1>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        {
          productos.map((item, index) => (
            <ProductCard
              key={index}
              id={item.id}
              nombre={item.nombre}
              marca={item.marca}
              precio={item.precio}
              oferta={item.oferta}
              activo={item.Activo}
              productoNuevo={item.productoNuevo}
              categoria={item.categoria}
              genero={item.genero}
              subcategoria={item.subcategoria}
              imagen={item.imagen}
              tallas={item.tallas}
              colores={item.colores}
              opcion={item.opcion}
            />
          ))
        }
      </div>
*/

/*
SECOND CODE - BACKUP
 {
              resultado.map((item, index) => (
							<ProductCard
								key={index}
								id={item.id}
								nombre={item.nombre}
								marca={item.marca}
								precio={item.precio}
								oferta={item.oferta}
								activo={item.Activo}
								productoNuevo={item.productoNuevo}
								categoria={item.categoria}
								genero={item.genero}
								subcategoria={item.subcategoria}
								imagen={item.imagen}
								tallas={item.tallas}
								colores={item.colores}
								opcion={item.opcion}
							/>
              ))
            }
*/

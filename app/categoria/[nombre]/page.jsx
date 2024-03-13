"use client";

import "./style.css";
import { useEffect, useState } from "react";
import { useProductsStore } from "../../hooks/productsStore.js";

//? Importando componentes a usar
import ProductCard from "../../components/productCard/ProductCard.jsx";
import CategoryNav from "../../components/categoryNav/CategoryNav";
import Brands from "../../components/brands/Brands";
import Sidebar from "../../components/sideBar/Sidebar";
import ScrollToTopButton from "../../components/buttons/toTop/ScrollTop";

function Page({ params }) {
  /* prettier-ignore */
  const { nombre } = params;

  //* Trayendo las funciones que modifican el estado global
  const getAllProducts = useProductsStore((state) => state.getAllProducts);
  const removeAllProducts = useProductsStore(
    (state) => state.removeAllProducts
  );
  const getMenProducts = useProductsStore((state) => state.getMenProducts);
  const getWomenProducts = useProductsStore((state) => state.getWomenProducts);
  const getChildrenProducts = useProductsStore(
    (state) => state.getChildrenProducts
  );
  const getHoodiesProducts = useProductsStore(
    (state) => state.getHoodiesProducts
  );
  const getTshirtsProducts = useProductsStore(
    (state) => state.getTshirtsProducts
  );
  const getJoggersProducts = useProductsStore(
    (state) => state.getJoggersProducts
  );
  const getShoes = useProductsStore((state) => state.getShoes);
  const getJeans = useProductsStore((state) => state.getJeans);
  const getShorts = useProductsStore((state) => state.getShorts);
  const getNewProducts = useProductsStore((state) => state.getNewProducts);

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
        getWomenProducts();
        break;

      case "infantes":
        getChildrenProducts();
        break;

      case "nuevos":
        getNewProducts();
        break;

      case "hoodies":
        getHoodiesProducts();
        break;

      case "camisetas":
        getTshirtsProducts();
        break;

      case "joggers":
        getJoggersProducts();
        break;

      case "zapatos":
        getShoes();
        break;

      case "jeans":
        getJeans();
        break;

      case "shorts":
        getShorts();
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

    case "nuevos":
      titulo = "Categoría de nuevos productos 😎";
      break;

    case "hoodies":
      titulo = "Hoodies & Sudaderas";
      break;

    case "camisetas":
      titulo = "T-Shirts 👕";
      break;

    case "joggers":
      titulo = "Joggers & Leggings";
      break;

    case "zapatos":
      titulo = "Zapatos & Botas 👟 👢";
      break;

    case "jeans":
      titulo = "Pantalones & Jeans 👖";
      break;

    case "jeans":
      titulo = "Faldas y Shorts 🩳";
      break;

    default:
      break;
  }

  //* -------------------MANIPULACION DE LOS PRODUCTOS-------------------

  //? Estos son todos los productos de determinada categoría (sin filtros aplicados)
  const allProducts = useProductsStore((state) => state.allProducts);
  let productos = allProducts;
  //console.log(productos);

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
			(
        {
          _id,
					nombre,
					marca,
					descripcion,
          precio,
          oferta,
          activo,
          productoNuevo,
					categoria,
          genero,
          subcategoria,
          imagen,
          tallas,
					colores,
					opcion
				},
				index
			) => (
				<ProductCard
          key={index}
          _id={_id}
					nombre={nombre}
					marca={marca}
					descripcion={descripcion}
					precio={precio}
          oferta={oferta}
          activo={activo}
          productoNuevo={productoNuevo}
					categoria={categoria}
					genero={genero}
					subcategoria={subcategoria}
					imagen={imagen}
					tallas={tallas}
					colores={colores}
					opcion={opcion}
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
          <Brands handleBtnClick={handleBtnClick} />
          {/* Products container */}
					<section className="card-container">
            {resultado}
					</section>
				</div>
			</div>
			<ScrollToTopButton />
		</div>
	);
}

export default Page;

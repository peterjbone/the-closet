"use client";

import "./styles.css";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useProductsStore } from "../../hooks/productsStore";
import { useParams } from "next/navigation";
import Header from "../../components/navbar/Navbar";
import Images from "./Images";
import ColorInput from "./ColorInput";
import TallaInput from "./TallaInput";
import { useCartStore } from "../../hooks/cartStore.js";

const Page = () => {
	//? obteniendo el nombre del producto por parametro
	const params = useParams();
	const nombre = params.nombre;

	//? Llenando el estado global de "all products"
	const getAllProducts = useProductsStore((state) => state.getAllProducts);
	useEffect(() => {
		getAllProducts();
	}, [getAllProducts]);

	//? Funcion para normalizar el nombre del producto
	const normalizeName = (name) => {
		return name
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "")
			.replace(/-/g, " ")
			.toLowerCase();
	};

	//? Buscando el producto en el array de productos
	const allProducts = useProductsStore((state) => state.allProducts);
	const producto = allProducts.find(
		(product) => normalizeName(product.nombre) === normalizeName(nombre)
	);

	// Manejando imágenes
	const [imagenSeleccionada, setImagenSeleccionada] = useState(
		producto?.imagen[0]
	);

	//Limpia la información:
	const productoOpciones = producto?.opcion;
	const finalName = producto?.nombre.toUpperCase();
	const finalBrands = producto?.marca.toUpperCase();
	const finalStars = Array(4).fill("⭐");

	//? Para la descripcion
	const [mostrarDescripcion, setMostrarDescripcion] = useState(true);
	const toggleMostrarDescripcion = () => {
		setMostrarDescripcion(true);
	};
	const toggleMostrarResena = () => {
		setMostrarDescripcion(false);
	};

	//! ZONA IMPORTANTE

	//? ------------ INFORMACION DEL PRODUCTO (que se enviara a la cart) -----------
	const [productInfo, setProductInfo] = useState({
		_id: producto?._id,
		nombre: producto?.nombre,
		marca: producto?.marca,
		categoria: producto?.categoria,
		genero: producto?.genero,
		subcategoria: producto?.subcategoria,
		imagen: producto?.imagen[0],
		precio: producto?.precio,
		color: "",
		talla: ""
	});
	function handleProductChange(event) {
		event.preventDefault();

		const { name, value } = event.target;
		setProductInfo({
			...productInfo,
			[name]: value
		});
	}
	console.log(productInfo);

	//? ----------------- OPCIONES DE LA TALLA -------------------
	let opcionesDeTallas = null;

	if (productInfo.color) {
		for (let i = 0; i < productoOpciones.length; i++) {
			const opcion = productoOpciones[i];
			if (opcion.color.nombreColor === productInfo.color) {
				opcionesDeTallas = opcion.talles.map((item) => (
					<TallaInput
						key={opcion.color.nombreColor + "-" + item.talla}
						label={item.talla}
						value={item.talla}
						stock={item.stock}
						handleProductChange={handleProductChange}
						valueChecked={productInfo.talla}
					/>
				));
			}
		}
	}

	//? Trayendo las funciones y estados globales de la Cart
	const addToCart = useCartStore((state) => state.addToCart);
	const cartItems = useCartStore((state) => state.cartItems);

	//? Funcion para enviar el producto a la Cart
	function handleCartBtn() {
		if (!productInfo.color) {
			return toast.error("Debe seleccionar un color");
		}
		if (!productInfo.talla) {
			return toast.error("Debe seleccionar una talla");
		}

		addToCart(productInfo);
		//localStorage.setItem("cartItems", JSON.stringify(cartItems));
	}
	console.log(cartItems);

	//* ------------------- PAGINA DETAIL DEL PRODUCTO ------------------------
	/* prettier-ignore */
	return (
		<div>
			<div className="border-black border-b-2 mb-5">
				<Header />
			</div>
			<div
				className="
        w-[100vw]
        min-h-[100vh]
        my-8
        py-5
      bg-slate-200
        flex
        flex-col
        md:flex-row
        justify-center
        items-center
        shadow-lg
        overflow-y-hidden
      ">
				{/*Imágenes*/}
				<div
					className="
        flex
        flex-col
        items-center
        gap-4
        md:w-7/12
        flex-grow
        md:flex-shrink
        ">
					<img
						src={imagenSeleccionada}
						alt={producto?.nombre}
						width={540}
						height={760}
						className="object-contain"
					/>
					<div
						className="
            flex
            flex-row
            items-center
            justify-start
            gap-3
            px-4
            mb-3
          ">
						{producto?.imagen.map((img, index) => (
							<Images
								key={img}
								index={index}
								imgUrl={img}
								changeBigImage={(img) => setImagenSeleccionada(img)}
								bigImage={imagenSeleccionada}
							/>
						))}
					</div>
				</div>

				{/*Marca, nombre, precio, estrellas y el Boton de Carrito*/}
				<div
					className="
        h-full
        self-start
        flex
        flex-col
        p-4
        md:w-5/12
        flex-shrink
        ">
					<div className="text-left pb-3 ">
						<h2 className="text-black text-4xl font-black"> {finalName}</h2>
						<h3 className="text-xl font-bold mb-3">
							{producto?.genero} & {producto?.categoria}
						</h3>
						{/* <h2 className="text-yellow mt-1 mb-3">{finalStars} (3)</h2> */}
						<h3 className="text-xl font-bold">{finalBrands}</h3>
						<h2 className="text-xl">{producto?.precio} $</h2>
					</div>

					{/* Colores */}
					<h2 className="font-semibold text-xl">Seleccione un color</h2>
					<div className="flex p-6 place-content-start">
						{productoOpciones?.map((item) => (
							<ColorInput
								key={item.color.nombreColor}
								label={item.color.nombreColor.replace(/^\w/, (letra) =>
									letra.toUpperCase()
								)}
								value={item.color.nombreColor}
								color={item.color.codHexadecimal}
								handleProductChange={handleProductChange}
								valueChecked={productInfo.color}
							/>
						))}
					</div>

					{/*Tallas*/}
          <p className="font-semibold text-xl">Selecciona una talla</p>
          <div className="flex flex-row items-center justify-center gap-6 p-4">
            {
              productInfo.color
                ? opcionesDeTallas  
                : <div className="text-center text-lg mx-auto">
                   Seleccione un color para <br /> ver las tallas disponibles :)
                  </div>    
            }
          </div>
          
          <button
            onClick={handleCartBtn}
            className="
          bg-black
          text-white
            min-w-[250px]
            w-6/12 
            mx-auto
            text-center
            text-2xl
            p-3
            flex
            gap-4
            justify-center
            items-center
            transition
            cursor-pointer
            mt-10
          ">
						Agregar
						<FaCartShopping />
					</button>
				</div>
			</div>

			{/* Descripcion y Reseñas */}
			<div className="mx-auto flex flex-col place-content-center justify-center border-b-8 shadow-xl w-[60vw] h-[30vh]justify-items-center mb-16">
				<div className="font-bold text-left border-b-2 flex gap-2 cursor-pointer">
					<p
						onClick={toggleMostrarDescripcion}
						className={`p-4 ${
							mostrarDescripcion ? "bg-black text-white" : ""
						}`}>
						Descripción
					</p>
					<p
						onClick={toggleMostrarResena}
						className={`p-4 ${
							!mostrarDescripcion ? "bg-black text-white" : ""
						}`}>
						Reseña
					</p>
				</div>
				<p className="font-light text-xl rounded-md mt-2 text-gray-600 bg-white p-7">
					{mostrarDescripcion
						? producto?.descripcion
							? producto?.descripcion
							: "Aún no hay descripción..."
						: producto?.reseña
						? producto?.reseña
						: "Aún no hay reseñas..."}
				</p>
			</div>
		</div>
	);
};

export default Page;

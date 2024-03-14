"use client";

import "./styles.css";
import './reviewCard.css'
import { toast } from "react-hot-toast";
import axios from 'axios'
import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useProductsStore } from "../../hooks/productsStore";
import { useParams } from "next/navigation";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react"
import { useSession } from 'next-auth/react';
import Header from "../../components/navbar/Navbar";
import Images from "./Images";
import ColorInput from "./ColorInput";
import TallaInput from "./TallaInput";
import { useCartStore } from "../../hooks/cartStore.js";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons"


initMercadoPago('TEST-aaf6addf-8825-47b9-b75c-547fe0bf6533')

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
 console.log(producto);
	// Manejando imágenes
	const [imagenSeleccionada, setImagenSeleccionada] = useState(
		producto?.imagen[0]
	);

	//Limpia la información:
	const productoOpciones = producto?.opcion;
	const finalName = producto?.nombre.toUpperCase();
	const finalBrands = producto?.marca.toUpperCase();
	const finalStars = Array().fill("⭐");

	//? Para la descripcion
	const [mostrarDescripcion, setMostrarDescripcion] = useState(true);
	const [permitirReview, setPermitirReview] = useState(false)
	const [reseñasPublicadas, setReseñasPublicadas] = useState([]);

	
	const toggleMostrarDescripcion = () => {
		setMostrarDescripcion(true);
	};
	const toggleMostrarResena = () => {
		const infoCompra = {
			producto: producto?._id,
			userId: userId
		}
		setMostrarDescripcion(false);
		
		axios.get(`http://localhost:3001/review/${infoCompra.producto}`)
			.then(response => {
				if(response.data.length > 0){
					setReseñasPublicadas(response.data)
				}
			})
		
		
		axios.get('http://localhost:3001/compras?=',  { params: infoCompra })
		.then(response =>{
			if(response.data.success) {
				setPermitirReview(true)
			}else{
				setPermitirReview(false)
				toast.error('Debes comprar este producto para dejar una reseña')
			}
		}).catch(error => {
			console.error('Error al verificar compra', error);
			// toast.error('Error al verificar la compra.');
		})
		
	};
	console.log('Resenias' ,reseñasPublicadas);
	// Reseña y puntaje
	const [puntaje, setPuntaje] = useState(0);
	const handleClickStar = (index) => {
		if (puntaje === index + 1) {
			
			setPuntaje(0);
		} else {
			
			setPuntaje(index + 1);
		}
	};
	  
	const [reseña, setReseña] = useState('');
	const handleGuardarReseña = () => {
		if (!reseña.trim()) {
			toast.error('Por favor, escribe una reseña antes de enviar.');
			return;
		}
	
		
		if (puntaje === 0) {
			toast.error('Por favor, selecciona un puntaje antes de enviar.');
			return;
		}
		const review = {
			userId: userId,
			producto: producto._id,
			reseña: reseña,
			puntaje: puntaje
		}
		axios.post('http://localhost:3001/review', {review})
		.then(() => {
            setReseña(''); 
            setPuntaje(0); 
            toast.success('Reseña enviada exitosamente');
        })
        .catch(error => {
            console.error('Error al guardar reseña', error);
            toast.error('Error al guardar la reseña');
        });
	}
	//Obtener las Reseñas
	
	
	//! ZONA IMPORTANTE
	const { data: session } = useSession();
	const userId = session && session.user ? session.user._id : null;
	const userName = session && session.user ? session.user.name : null;
	const userEmail = session && session.user ? session.user.email : null;
	
	
	//? ------------ INFORMACION DEL PRODUCTO (que se enviara a la cart) -----------
	const [productInfo, setProductInfo] = useState({
		cartId: uuidv4(),
		_id: producto?._id,
		nombre: producto?.nombre,
		marca: producto?.marca,
		categoria: producto?.categoria,
		genero: producto?.genero,
		subcategoria: producto?.subcategoria,
		imagen: producto?.imagen[0],
		precio: producto?.precio,
		color: "",
		talla: "",
		userId: userId,
		userName: userName,
		userEmail: userEmail
	});
	function handleProductChange(event) {
		event.preventDefault();
		
		const { name, value } = event.target;
		console.log('name v',name, value)
		setProductInfo({
			...productInfo,
			[name]: value,
		});
	}
	console.log('productos',producto, productInfo);

	const renderizarPuntaje = (puntaje) => {
		const stars = [];
		for (let i = 1; i <= 5; i++) {
			if (i <= puntaje) {
				stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-blue-500" />);
			} else {
				stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-gray-200" />);
			}
		}
		return stars;
	};
	
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

	//? ACTIONS Y ESTADOS GLOBALES DE LA CART
	const addToCart = useCartStore((state) => state.addToCart);
	const getTotals = useCartStore((state) => state.getTotals);
	const cartItems = useCartStore((state) => state.cartItems);

	//? FUNCION PARA AGREGAR EL PRODUCTO A CARRITO Y ACTUALIZAR LOS TOTALES
	function handleCartBtn() {
		if (!productInfo.color) {
			return toast.error("Debe seleccionar un color");
		}
		if (!productInfo.talla) {
			return toast.error("Debe seleccionar una talla");
		}

		addToCart(productInfo);
		getTotals();

		setProductInfo({
			cartId: uuidv4(),
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
	}
	console.log('nombre',cartItems, cartItems && cartItems.nombre); // imprimiendo el estado global de carts

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
						<h2 className="text-yellow mt-1 mb-4">{finalStars} </h2>
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
          <div className="flex flex-row items-center justify-center gap-8 p-4">
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
				<div className="font-light text-xl mt-2 bg-white p-7">
					{mostrarDescripcion ? (
						producto?.descripcion ? (
							producto.descripcion
						) : (
							"Aún no hay descripción..."
						)
					) : (
						<>
							{reseñasPublicadas.length > 0 ? (
								<div className="reseñas">
									{reseñasPublicadas.map((reseña, index) => (
										<div key={index} className="card">
											<h3>{reseña.usuario.name}</h3>
											<div className="valoracion">
												{renderizarPuntaje(reseña.puntaje)}
											</div>
											<p>{reseña.reseña}</p>
										</div>
									))}
								</div>
							) : (
								"Aún no hay reseñas..."
							)}
						</>
					)}
				</div>
				{
    !mostrarDescripcion && permitirReview && (
        <div className="review-section">
				<h5 className="text-lg font-semibold text-center mt-4">Deje su Reseña!</h5>

            <div className="valoracion">
                {[...Array(5)].map((_, index) => (
                    <button
                        key={index}
                        className={`star-button ${index < puntaje ? "selected" : ""}`}
                        onClick={() => handleClickStar(index)}
                    >
                        <FontAwesomeIcon icon={faStar} />
                    </button>
                ))}
            </div>
            <textarea
                id='review'
                value={reseña}
                onChange={(e) => setReseña(e.target.value)}
                placeholder="Escribe tu reseña..."
                className="w-full h-40 p-4 border border-gray-300 rounded-md mt-2"
            />
            <button
                onClick={handleGuardarReseña}
                className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
            >
                Enviar Reseña
            </button>
        </div>
    )
}
				
				

			</div>
		</div>
	);
};

export default Page;

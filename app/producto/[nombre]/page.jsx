"use client";

import axios from 'axios'
import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { AiFillMinusSquare } from "react-icons/ai";
import { RiAddBoxFill } from "react-icons/ri";
import { useProductsStore } from "../../hooks/productsStore";
import { useParams } from "next/navigation";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react"
import { useSession } from 'next-auth/react';
import Header from "../../components/navbar/Navbar";


initMercadoPago('TEST-aaf6addf-8825-47b9-b75c-547fe0bf6533')

const Page = () => {
  const params = useParams();
  let nombre = params.nombre;
  const getAllProducts = useProductsStore((state) => state.getAllProducts);
  const allProducts = useProductsStore((state) => state.allProducts);
  const [preferenceId, setPreferenceId] = useState(null);
  const [creatingPreference, setCreatingPreference] = useState(false)

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  const normalizeName = (name) => {
    return name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/-/g, " ")
      .toLowerCase();
  };
  const normalizedNombre = normalizeName(nombre);
  console.log("Nombre normalizado:", normalizedNombre);

  const producto = allProducts.find(
    (product) => normalizeName(product.nombre) === normalizeName(nombre)
  );
  //Manejando imágenes
  const [imagenSeleccionada, setImagenSeleccionada] = useState(
    producto?.imagen[0]
  );
  const handleImagenClick = (imagen) => {
    setImagenSeleccionada(imagen);
  };
  //Limpia la información:
  const finalName = producto?.nombre.toUpperCase();
  const finalSizes = producto?.tallas.map((talla) => talla);
  const finalColors = producto?.colores.map((color) => color);
  const finalStars = Array(4).fill("⭐");
  const finalBrands = producto?.marca.toUpperCase();
  //Manejando tallas
  const [tallaSeleccionada, setTallaSeleccionada] = useState("");

  const [counter, setCounter] = useState(1);
  const [mostrarDescripcion, setMostrarDescripcion] = useState(true);

  const toggleMostrarDescripcion = () => {
    setMostrarDescripcion(true);
  };

  const toggleMostrarResena = () => {
    setMostrarDescripcion(false);
  };

  const handleTallaClick = (talla) => {
    setTallaSeleccionada(talla);
  };
  const handleContadorSuma = () => {
    setCounter(counter + 1);
  };
  const handleContadorResta = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const {data: session} = useSession()
  const userId = session && session.user ? session.user._id : null;


  
  
  
  console.log(producto?.precio);
  
  
  const handlePreference = async () => {
    if( creatingPreference){
      return
    }
    try {
      setCreatingPreference(true)
      console.log('hola soy la ropa', userId)
      const infoProducto = [{
         userId: userId,
         userName: session.user.name,
         userEmail: session.user.email,
         id: producto._id,
         nombre: producto.nombre,
         cantidad: counter,
         unit_price: producto?.precio,
         talla: tallaSeleccionada
      }]
      
      const postProduct = await axios.post('http://localhost:3001/preference', infoProducto);
      const data = postProduct.data;
      window.location.href = data.redirectUrl
    } catch (error) {
      console.log("Error al enviar la solicitud:", error);
    } finally{
      setCreatingPreference(false)
    }
  };


  return (
    <div>
      <div className="border-black border-b-2 mb-5">
        <Header />
      </div>
      <div className="w-[60vw] h-[70vh] flex flex-row m-auto justify-center items-center gap-10 border-2 mb-8 mt-8 shadow-lg">
        <div className="flex flex-row-reverse items-start gap-4 mb-3">
          {/*Imágenes*/}

          <img
            src={imagenSeleccionada}
            alt={producto?.nombre}
            className="w-70 h-96"
          />
          <div className="flex flex-col gap-4">
            <img
              src={producto?.imagen[0]}
              alt={producto?.nombre}
              className={`w-50 h-16 cursor-pointer ${
                imagenSeleccionada === producto?.imagen[0]
                  ? "border-2 border-gray-400"
                  : ""
              }`}
              onClick={() => {
                handleImagenClick(producto?.imagen[0]);
              }}
            />
            {producto?.imagen[1] && (
              <img
                src={producto?.imagen[1]}
                alt={producto?.nombre}
                className={`w-50 h-16 cursor-pointer ${
                  imagenSeleccionada === producto?.imagen[1]
                    ? "border-2 border-gray-400"
                    : ""
                }`}
                onClick={() => handleImagenClick(producto?.imagen[1])}
              />
            )}
            {producto?.imagen[2] && (
              <img
                src={producto?.imagen[2]}
                alt={producto?.nombre}
                className={`w-50 h-16 cursor-pointer ${
                  imagenSeleccionada === producto?.imagen[2]
                    ? "border-2 border-gray-400"
                    : ""
                }`}
                onClick={() => handleImagenClick(producto.imagen[2])}
              />
            )}
          </div>
        </div>

        {/*Marca, nombre, precio y estrellas*/}

        <div className="flex flex-col p-5 w-96 justify-center">
          <div className="text-left pb-3 ">
            <div className="flex justify-between align-middle place-content-center">
              {" "}
              <h3 className="text-3xl font-bold">{finalBrands}</h3>
              <h2 className="text-yellow mt-1">{finalStars} (3)</h2>
            </div>

            <h2 className="text-xl">{producto?.precio} $</h2>
            <h2 className="text-black text-xl"> {finalName}</h2>
          </div>
          {/* Colores */}
          <h2 className="flex mt-4 bg-gray-200 place-content-start pt-1">
            {finalColors?.map((color) => (
              <span
                key={color}
                className={`flex flex-row h-6 w-6 rounded-full mr-2 mb-2 mt-1 ml-5  ${
                  color === "blanco"
                    ? "bg-white"
                    : color === "verde"
                    ? "bg-green-500"
                    : color === "rosa"
                    ? "bg-pink-400"
                    : color === "negro"
                    ? "bg-black"
                    : color === "naranja"
                    ? "bg-orange-500"
                    : color === "gris"
                    ? "bg-gray-500"
                    : color === "azul"
                    ? "bg-blue-500"
                    : color === "azul"
                    ? "bg-blue-500"
                    : color === "tostado"
                    ? "bg-amber-700"
                    : color === "plata"
                    ? "bg-slate-300"
                    : color === "rojo"
                    ? "bg-red-600"
                    : color === "cemento"
                    ? "bg-gray-700"
                    : color == "azul marino"
                    ? "bg-blue-950"
                    : color == "bordo"
                    ? "bg-pink-900"
                    : color == "francia"
                    ? "bg-blue-700"
                    : color == "ocre"
                    ? "bg-yellow-700"
                    : color == "cuero"
                    ? "bg-yellow-600"
                    : color == "marron"
                    ? "bg-amber-900"
                    : color == "habano"
                    ? "bg-amber-800"
                    : color == "cobre"
                    ? "bg-orange-600"
                    : color == "amarillo"
                    ? "bg-yellow-400"
                    : color == "salmon"
                    ? "bg-rose-400"
                    : color == "mate"
                    ? "bg-lime-600"
                    : color == "gris topo"
                    ? "bg-gray-700"
                    : color == "violeta"
                    ? "bg-purple-300"
                    : color == "azulino"
                    ? "bg-blue-300"
                    : color == "dulce de leche"
                    ? "bg-orange-200"
                    : color == "multiples"
                    ? "bg-gradient-to-br from-black via-white to-blue-500"
                    : color == "gris ceniza"
                    ? "bg-gray-300 border border-gray-400"
                    : ""
                }`}
              ></span>
            ))}
          </h2>
          <p className="border-b-2 mt-3">Selecciona una talla</p>
          {/*Tallas*/}
          <h2 className="flex flex-row gap-2 mb-2">
            {finalSizes?.map((talla) => (
              <span
                key={talla}
                onClick={() => handleTallaClick(talla)}
                className={`border w-full mt-5 text-center mb-3 p-1 hover:bg-black hover:text-white cursor-pointer ${
                  talla === tallaSeleccionada ? "bg-black text-white" : ""
                }`}
              >
                {" "}
                {talla}
              </span>
            ))}
          </h2>
          <div className="flex flex-row place-content-center justify-items-center">
            {/*Cantidad*/}

            <h2 className="flex flex-row gap-2 align-middle items-center">
              {" "}
              Cantidad
              <AiFillMinusSquare
                className="text-3xl text-black cursor-pointer"
                onClick={() => handleContadorResta()}
              />
              {counter}
              <RiAddBoxFill
                className="text-3xl text-black cursor-pointer"
                onClick={() => handleContadorSuma()}
              />
            </h2>
          </div>
          <h2 className="bg-black text-white w-full text-center text-2xl p-3 flex justify-center gap-4 items-center transition duration-300 ease-in-out cursor-pointer mt-10">
            Agregar
            <FaCartShopping />
          </h2>
          <div>
            <button onClick={handlePreference} className="bg-black text-white w-full text-center text-2xl p-3 flex justify-center gap-4 items-center transition duration-300 ease-in-out cursor-pointer mt-10">
              Comprar
            <FaCartShopping />
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto flex flex-col place-content-center justify-center border-b-8 shadow-xl w-[60vw] h-[30vh]justify-items-center mb-16">
        <div className="font-bold text-left border-b-2 flex gap-2 cursor-pointer">
          <p
            onClick={toggleMostrarDescripcion}
            className={`p-4 ${mostrarDescripcion ? "bg-black text-white" : ""}`}
          >
            Descripción
          </p>
          <p
            onClick={toggleMostrarResena}
            className={`p-4 ${
              !mostrarDescripcion ? "bg-black text-white" : ""
            }`}
          >
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
      
      {/* <div id ='wallet_container'  disable={creatingPreference}>

        <Wallet initialization={{ preferenceId: preferenceId, }}  customization={{ texts:{ valueProp: 'smart_option'}}}
        onSubmit={handlePreference} />


    </div> */}
    </div>
                        //65eb3fe785987e4ed7385af9
  );
};

export default Page;

"use client";
import { productos } from "../kidsData";
import { Krona_One } from "next/font/google";
import { Lato } from "next/font/google";
import { CgAddR } from "react-icons/cg";
import { FaRegSquareMinus } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { TiStarFullOutline } from "react-icons/ti";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
});
const krona = Krona_One({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});
function loadProduct(id) {
  const product = productos.find((producto) => producto.id === Number(id));
  return product;
}
const SingleKidPage = ({ params }) => {
  const pdto = loadProduct(params.kid);
  return (
    <div className="flex place-content-center">
      <div className="flex flex-row  mt-10 mb-10 ">
        <div>
          <img
            src={pdto?.imagen[0]}
            width={400}
            height={500}
            className="bg-gray-200 border border-gray-300 shadow-md"
          />
        </div>
        <div className="p-4 bg-gray-200 border border-gray-300 shadow-md w-80">
          <h1 className="flex justify-end w-full mb-4">
            Código: {pdto?.nombre}
          </h1>
          <div className="flex w-full justify-end mb-4 text-yellow-400 size-4">
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline className="text-gray-400" />
            <div className="text-xs ml-2">
              <p className="gap-1 mb-2 text-gray-500">(4)</p>
            </div>
          </div>
          <p className={`mb-2 ${krona.className}`}>
            Marca: {pdto?.marca.toLocaleUpperCase()}
          </p>

          <p className={`mb-2 ${krona.className}`}>Precio: {pdto?.precio} $</p>
          <p className={`flex flex-row gap-3 text-xl ${lato.className}`}>
            Color:
            {pdto?.colores.map((color, index) => (
              <span
                key={index}
                className={`flex flex-row h-6 w-6 rounded-full mr-2 ${
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
                    ? "bg-yellow-600"
                    : color == "cuero"
                    ? "bg-yellow-600"
                    : ""
                }`}
              ></span>
            ))}
          </p>
          <p className={`flex gap-3 mt-3 mb-3 text-xl ${lato.className}`}>
            Talla:
            {pdto?.tallas.map((talla) => (
              <span key={talla}>
                <span className="bg-gray-100 rounded-md text-md pr-3 pl-3">
                  {talla}
                </span>
              </span>
            ))}
          </p>
          <p className="flex items-center gap-3 text-xl">
            Cantidad:
            <FaRegSquareMinus />
            1
            <CgAddR />
          </p>
          <div className="w-full">
            <p className="bg-blue-400 hover:bg-blue-800 text-white w-full text-center mt-5 text-2xl p-3 flex justify-center gap-4 items-center transition duration-300 ease-in-out cursor-pointer">
              Agregar
              <FaCartShopping />
            </p>
            <p className="mt-5 font-bold">Reseñas (1)</p>
            <p className="font-light text-sm rounded-md mt-2 text-gray-600 bg-white p-1">
              Los pantalones de la marca Mambo son una opción versátil y
              elegante para cualquier ocasión casual. Confeccionados con
              materiales de alta calidad, estos pantalones ofrecen comodidad y
              estilo a partes iguales. Brindan una calidez y confort únicos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleKidPage;

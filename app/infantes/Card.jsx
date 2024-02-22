import { FaCartShopping } from "react-icons/fa6";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal"],
});
const Card = ({ producto }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 shadow-2xl max-w-xs mb-20 max-h-fit transform transition-transform duration-300 ease-in-out hover:scale-110">
      {/* <h1>{producto.genero}</h1> */}
      <div>
        <img
          src={producto.imagen[0]}
          alt={producto.nombre}
          className="object-fill h-full"
        />
      </div>
      <div>
        <div className="flex gap-3 pr-6 pl-6 pb-6 h-full items-end">
          <div>
            <h1 className="font-bold flex text-xl mb-2">
              {producto.marca.toUpperCase()}
            </h1>
            {/* <h1 className="font-bold flex flex-row gap-1 ">
              Tallas:
              {producto.tallas.map((talla) => (
                <div key={talla}>
                  <span className="bg-white border-black rounded-full text-md pr-3 pl-3">
                    {talla}
                  </span>
                </div>
              ))}
            </h1> */}
            <h1 className="flex">
              {producto.colores.map((color, index) => (
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
            </h1>
          </div>
          <div className="flex w-full justify-end">
            <h1 className={`font-black text-right text-xl ${inter.className}`}>
              $ {producto.precio}
            </h1>
          </div>
        </div>
        <div className="flex flex-grow">
          <h1 className="bg-blue-400 hover:bg-blue-800 text-white w-full text-center text-2xl p-3 flex justify-center gap-4 items-center transition duration-300 ease-in-out cursor-pointer">
            Agregar
            <FaCartShopping />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Card;

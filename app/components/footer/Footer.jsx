import { IoLocationSharp } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { PiTiktokLogoFill } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <div className="bg-blue-950 flex text-white p-2 pt-7 pb-7 place-content-evenly font-bold">
        <div>
          <p className="text-center mb-2">Explora</p>
          <div className="flex list-none gap-3 font-light">
            <div>
              <li>Jeans</li>
              <li>Blusas</li>
              <li>Vestidos</li>
            </div>
            <div>
              <li>Camisas</li>
              <li>Poleras</li>
              <li>Zapatos</li>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p>Acerca de Nosotros</p>
          <div className="list-none font-light mt-3">
            <li>Misión</li>
            <li>Visión</li>
            <li>Historia</li>
          </div>
        </div>
        <div className="text-center">
          <p>Suscripciones</p>
          <div className="list-none font-light mt-3">
            <li>Diamante</li>
            <li>Platino</li>
            <li>Oro</li>
          </div>
        </div>
        <div>
          <p className="mb-2 text-center">Contacto</p>
          <div className="list-none font-light">
            <li className="flex items-center">
              <IoLocationSharp />
              <p className="ml-3">Av. Locura</p>
            </li>
            <li className="flex items-center">
              <IoLogoWhatsapp />
              <p className="ml-3">+1 528 8789 55</p>
            </li>
            <li className="flex items-center">
              <MdEmail />
              <p className="ml-3">thecloset@store.com</p>
            </li>{" "}
          </div>
        </div>
        <div>
          <p className="text-center mb-2">Síguenos</p>
          <div className="list-none font-light content-center">
            <li className="flex items-center gap-3 text-2xl mt-6">
              <FaFacebook />
              <FaSquareInstagram />
              <PiTiktokLogoFill />
              <RiTwitterXFill />
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

"use client";
import "animate.css";
import Header from "../components/navbar/Navbar";
import image1 from "../../public/images/about/imagen1.jpg";
import image2 from "../../public/images/about/imagen2.png";
import Image from "next/image";
import hombres from "../../public/images/about/hombre.webp";
import mujer from "../../public/images/about/mujer.webp";
import ninos from "../../public/images/about/ninos.webp";
import { BackArrowButton } from "../components/buttons/back/BackButton";
import Footer from "../components/footer/Footer";
import ScrollToTopButton from "../components/buttons/toTop/ScrollTop";

import Carrusel from "../components/slider/Carrusel";
import Link from "next/link";
const AboutPage = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <Header />
      <div className="mt-5 ml-5">
        <BackArrowButton />
        <ScrollToTopButton />
      </div>
      <section>
        <div className="flex flex-col justify-center align-middle items-center my-5 mx-8 gap-6">
          <h1 className="text-5xl font-bold text-center w-full p-4 bg-black text-white ">
            About The closet
          </h1>

          <div className="flex flex-row">
            <Image
              src={image1}
              alt="people"
              width={500}
              height={300}
              style={{ width: "auto", height: "auto" }}
            />
            <p className="text-2xl text-gray-800 m-10 text-pretty">
              <strong>The closet</strong>, nos enorgullece ser más que una
              tienda online, somos un destino para los amantes de la moda que
              buscan lo último en tendencias, calidad y diversidad. Nos
              dedicamos a potenciar tanto marcas locales como internacionales,
              ofreciendo a nuestros clientes una amplia gama de productos para
              satisfacer sus necesidades y gustos. Somos una tienda comprometida
              con la excelencia y la diversidad en la moda. Nuestro equipo está
              formado por apasionados del estilo y la innovación, siempre listos
              para brindarte la mejor experiencia de compra.
              <br />
              <br />
              Acá, encontrarás una cuidadosa selección de productos que reflejan
              las últimas tendencias tanto a nivel local como internacional.
              Desde marcas emergentes hasta reconocidas firmas internacionales,
              nuestro objetivo es ofrecerte lo mejor de ambos mundos. Desde ropa
              y hasta calzado, tenemos todo lo que necesitas para expresar tu
              estilo único y original.
            </p>
          </div>
          <h2 className="text-5xl font-bold text-center w-full p-4 bg-black text-white">
            Historia
          </h2>
          <div className="flex gap-5">
            <p className="font-medium text-2xl text-pretty text-gray-800">
              Hace no mucho tiempo atrás, The closet con una clara visión y un
              gusto exquisito, abrió sus puertas al mundo de la moda en un vasto
              mundo digital. Un lugar donde puedes encontrar últimas novedades
              de marcas reconocidas, tanto nacionales como internacionales.
              Desde sus inicios The closet se destacó por su cuidadosa selección
              de prendas de alta calidad y diseño vanguardista. Entre sus
              estantes virtuales se pueden encontrar marcas icónicas como{" "}
              <strong>Batistella, Taverniti, Mambo, Adidas y Falabella</strong>,
              que no solo ofrecen estilo, sino también comodidad y durabilidad.
              <br />
              <br />
              Nuestra <strong>Misión</strong> es brindar una selección diversa
              de productos de moda. Nos esforzamos por mantener una amplia gama
              de productos que reflejen las últimas tendencias de la moda para
              satisfacer los gustos y estilos únicos de nuestros clientes. Nos{" "}
              <strong>comprometemos</strong> a ofrecer productos de{" "}
              <strong>alta calidad</strong> que no solo sean elegantes y
              modernos, sino también duraderos y funcionales.
              <br />
              <br />
              Nuestra <strong>Visión</strong> es convertirnos en un referente de
              la moda. Buscamos <strong>liderar</strong> el camino en la
              industria de la moda en línea al ofrecer una amplia gama de
              productos de moda que reflejen nuestro compromiso con el cliente.
              Inspirar y <strong>fomentar</strong> una comunidad colaborativa
              empoderando a nuestros clientes, ayudándoles a descubrir y
              expresar su estilo único a través de nuestra cuidadosa{" "}
              <strong>selección de prendas de vestir.</strong>
            </p>
            <Image
              src={image2}
              alt="cellphone"
              width={600}
              height={500}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col justify-center items-center m-8 align-middle">
          <h1 className="text-5xl font-bold text-center w-full p-4 bg-black text-white mb-16">
            Marcas Aliadas
          </h1>
          <Carrusel />
        </div>
      </section>
      <section className=" flex justify-center">
        <div className="flex flex-row m-11 gap-32 text-2xl p-3">
          <Link href="categoria/hombres">
            <div className="bg-amber-900 text-center text-white transition-transform transform hover:scale-110">
              <h1 className="p-2 font-extrabold animate__animated animate__flip">
                HOMBRES
              </h1>
              <Image src={hombres} width={500} height={400} />
            </div>
          </Link>
          <Link href="categoria/infantes">
            <div className="bg-green-700 text-center text-white transition-transform transform hover:scale-110">
              <h1 className="p-2 font-extrabold">NIÑOS</h1>
              <Image src={ninos} width={500} height={400} />
            </div>
          </Link>
          <Link href="categoria/mujeres">
            <div className="bg-zinc-500 text-center text-white transition-transform transform hover:scale-110">
              <h1 className="p-2 font-extrabold">MUJERES</h1>
              <Image src={mujer} width={500} height={400} />
            </div>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;

"use client";

import Header from "../components/navbar/Navbar";
import image1 from "../../public/images/about/imagen1.jpg";
import image2 from "../../public/images/about/imagen2.png";
import Image from "next/image";
import { BackArrowButton } from "../components/buttons/back/BackButton";
const AboutPage = () => {
  return (
    <div>
      <Header />
      <div className="m-8">
        {" "}
        <BackArrowButton />
      </div>

      <div className="flex flex-col justify-center align-middle items-center m-14 gap-6">
        <h1 className="text-5xl text-bold text-center">About The closet</h1>
        <div className="flex flex-row">
          <Image src={image1} alt="people" width={500} height={300} />
          <p className="text-2xl m-10 text-pretty">
            <strong>The closet</strong>, nos enorgullece ser más que una tienda:
            somos un destino para los amantes de la moda que buscan lo último en
            tendencias, calidad y diversidad. Nos dedicamos a potenciar tanto
            marcas locales como internacionales, ofreciendo a nuestros clientes
            una amplia gama de productos para satisfacer sus necesidades y
            gustos. Somos una tienda comprometida con la excelencia y la
            diversidad en la moda. Nuestro equipo está formado por apasionados
            del estilo y la innovación, siempre listos para brindarte la mejor
            experiencia de compra.
            <br />
            <br />
            Acá, encontrarás una cuidadosa selección de productos que reflejan
            las últimas tendencias tanto a nivel local como internacional. Desde
            marcas emergentes hasta reconocidas firmas internacionales, nuestro
            objetivo es ofrecerte lo mejor de ambos mundos. Desde ropa y hasta
            calzado, tenemos todo lo que necesitas para expresar tu estilo único
            y original
          </p>
        </div>
        <div className="flex gap-5">
          <p className="font-medium text-2xl text-pretty">
            Hace no mucho tiempo atrás, The closet con una clara visión y un
            gusto exquisito, abrió sus puertas al mundo de la moda en un vasto
            mundo digital. Un lugar donde puedes encontrar últimas novedades de
            marcas reconocidas, tanto nacionales como internacionales. Desde sus
            inicios The closet se destacó por su cuidadosa selección de prendas
            de alta calidad y diseño vanguardista. Entre sus estantes virtuales
            se puedenn encontrar marcas icónicas como Batistella, Taverniti
            Mambo, Adidas y Falabella, que no solo ofrecían estilo, sino también
            comodidad y durabilidad.
          </p>
          <Image src={image2} width={500} height={500} />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

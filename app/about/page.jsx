import React from "react";
import Header from "../components/navbar/Navbar";
import image1 from "../../public/images/imagen1.jpg";
import Image from "next/image";
const AboutPage = () => {
  return (
    <div>
      <Header />
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
      </div>
    </div>
  );
};

export default AboutPage;

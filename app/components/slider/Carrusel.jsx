import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import adidas from "../../../public/images/marcas/adidas2.svg";
import bati from "../../../public/images/marcas/batistella.jpg";
import eyelit from "../../../public/images/marcas/eyelit.png";
import fala from "../../../public/images/marcas/falabela.png";
import jarvec from "../../../public/images/marcas/jarvec.png";
import mambo from "../../../public/images/marcas/mambikids.svg";
import taver from "../../../public/images/marcas/taver.jpeg";
import topper from "../../../public/images/marcas/topper.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Carrusel = () => {
  return (
    <div>
      <div
        className="swiper-container custom-swiper-container"
        style={{
          maxWidth: "1600px",
          justifyItems: "center",
          alignItems: "center",
          placeContent: "center",
        }}
      >
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 1000 }}
          loop={true}
          speed={900}
          style={{
            overflow: "hidden",
            margin: "auto 0",
          }}
          slidesPerView={4}
          spaceBetween={10}
          centeredSlides={true}
          navigation={{
            // Configuración de las flechas de navegación
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
        >
          <SwiperSlide>
            <Image
              src={taver}
              alt="taver"
              width={200}
              height={200}
              // style={{ width: "auto", height: "auto" }}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src={bati}
              alt="bati"
              width={200}
              height={200}
              // style={{ width: "auto", height: "auto" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={eyelit}
              alt="eyelit"
              width={200}
              height={200}
              // style={{ width: "auto", height: "auto" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={fala}
              alt="fala"
              width={200}
              height={200}
              // style={{ width: "auto", height: "auto" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={adidas}
              alt="adidas"
              width={200}
              height={200}
              // style={{ width: "auto", height: "auto" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={jarvec}
              alt="jarvec"
              width={200}
              height={200}
              // style={{ width: "auto", height: "auto" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={mambo}
              alt="mambo"
              width={200}
              height={200}
              className="justify-center align-middle items-center"
              // style={{ width: "auto", height: "auto" }}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src={topper}
              alt="topper"
              width={200}
              height={200}
              // style={{ width: "auto", height: "auto" }}
            />
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button-prev-custom"></div>
        <div className="swiper-button-next-custom"></div>
      </div>
    </div>
  );
};

export default Carrusel;

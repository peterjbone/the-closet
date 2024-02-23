"use client";

import "./HeroSection.css";
import { FaShoppingBag } from "react-icons/fa";

function HeroSection() {
	let counter = 1;

	setInterval(() => {
		document.getElementById("radio" + counter).checked = true;
		counter++;
		if (counter > 4) {
			counter = 1;
		}
	}, 6000);

	/* prettier-ignore */
	return (
		<div className="mb-10 bg-purple-500 slider">
			<div className="hero-content">
        <h1 className="text-7xl font-black text-white">All stock 🔥</h1>
        <p className="text-3xl text-white">
          Descubre todas nuestras categorías en solo lugar.
        </p>
        <button className="hero-btn">
          Comprar ahora <FaShoppingBag size={30}/>
        </button>
			</div>

			<div className="slides">
				{/* Radio buttons */}
				<input type="radio" name="radio-btn" id="radio1" />
				<input type="radio" name="radio-btn" id="radio2" />
				<input type="radio" name="radio-btn" id="radio3" />
				<input type="radio" name="radio-btn" id="radio4" />

				{/* Images slides */}
				<div className="slide first">
					<img src="/images/banner-9.jpg" alt="banner" />
				</div>
				<div className="slide">
					<img src="/images/banner-7.jpg" alt="banner" />
				</div>
				<div className="slide">
					<img src="/images/banner-10.jpg" alt="banner" />
				</div>
				<div className="slide">
					<img src="/images/banner-6.jpg" alt="banner" />
				</div>

				{/* Auto navigation */}
				<div className="navigation-auto">
					<div className="auto-btn1"></div>
					<div className="auto-btn2"></div>
					<div className="auto-btn3"></div>
					<div className="auto-btn4"></div>
				</div>
			</div>

			{/* Manual navigation */}
			<div className="navigation-manual">
				<label htmlFor="radio1" className="manual-btn"></label>
				<label htmlFor="radio2" className="manual-btn"></label>
				<label htmlFor="radio3" className="manual-btn"></label>
				<label htmlFor="radio4" className="manual-btn"></label>
			</div>
		</div>
	);
}

export default HeroSection;

// CONTENIDO ANTERIOR
/*

<div className="flex flex-row justify-between items-center h-[60vh]">
				<div className="flex flex-col flex-1">
					<h1 className="text-[3.7rem] font-bold">Trend collection 🔥</h1>
					<p
						className="
          text-[2rem]
          text-gray-800
          font-semibold
          pl-4
          mt-4
          border-l-8
          border-cyan-500">
						En esta colección veras los <br />
						productos más populares actualmente.
          </p>
          <button className="mt-10 w-[10rem] mx-auto font-semibold text-[1.3rem] border-[3px] border-black transition hover:bg-black hover:text-white">
            COMPRAR AHORA
          </button>
				</div>
				<div className="flex-1">
					<img src="https://i.postimg.cc/Y01FHGf8/hero-woman.jpg" alt="hero-image"/>
				</div>
</div>

*/

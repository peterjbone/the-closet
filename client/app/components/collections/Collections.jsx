"use client";

import "./Collections.css";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaShoppingBag } from "react-icons/fa";

function Collections() {
	const layerRef = useRef(null);
	function showOverlayOne() {
		layerRef.current.style.opacity = "1";
	}
	function hideOverlayOne() {
		layerRef.current.style.opacity = "0";
	}

	const layerRef2 = useRef(null);
	function showOverlayTwo() {
		layerRef2.current.style.opacity = "1";
	}
	function hideOverlayTwo() {
		layerRef2.current.style.opacity = "0";
	}

	const layerRef3 = useRef(null);
	function showOverlayThree() {
		layerRef3.current.style.opacity = "1";
	}
	function hideOverlayThree() {
		layerRef3.current.style.opacity = "0";
	}

	/* prettier-ignore */
	return (
    <div className="flex-collections">
      {/* Primer contenedor */}
				<div className="container" onMouseOver={showOverlayOne} onMouseOut={hideOverlayOne}>
					<div className="layer" ref={layerRef}>
            <h2 className="text-7xl font-black text-white">Hoodies</h2>
            <Link href={"/categoria/hoodies"}>
              <button className="collection-btn">
                COMPRAR AHORA <FaShoppingBag size={30} />
              </button>
            </Link>
					</div>
					<img src="/images/hoodies.jpeg" alt="hoodies" />
				</div>
				<div className="container" onMouseOver={showOverlayTwo} onMouseOut={hideOverlayTwo}>
					<div className="layer" ref={layerRef2}>
            <h2 className="text-7xl font-black text-white">Camisetas</h2>
            <Link href={"/categoria/camisetas"}>
              <button className="collection-btn">
                COMPRAR AHORA <FaShoppingBag size={30} />
              </button>
            </Link>
					</div>
					<img src="/images/camisas.jpg" alt="hoodies" />
				</div>
			<div className="container" onMouseOver={showOverlayThree} onMouseOut={hideOverlayThree}>
				<div className="layer" ref={layerRef3}>
          <h2 className="text-7xl font-black text-white">Joggers</h2>
          <Link href={"/categoria/joggers"}>
            <button className="collection-btn">
              COMPRAR AHORA <FaShoppingBag size={30} />
            </button>
          </Link>
				</div>
				<img src="/images/joggers.jpg" alt="hoodies" />
			</div>
		</div>
	);
}

export default Collections;

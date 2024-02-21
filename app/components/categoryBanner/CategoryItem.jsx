"use client";

import "./CategoryItem.css";
import Link from "next/link";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useRef } from "react";

function CategoryItem({ link, src, alt, label }) {
	const layerRef = useRef(null);
	function showOverlay() {
		layerRef.current.style.opacity = "1";
	}
	function hideOverlay() {
		layerRef.current.style.opacity = "0";
	}

	/* prettier-ignore */
	return (
    <Link href={link}>
      
			<div className="relative block" onMouseOver={showOverlay} onMouseOut={hideOverlay}>
				<img src={src} alt={alt} />
				<div
					ref={layerRef}
					className="flex flex-row items-center justify-center overlay-layer">
					<p>Ver todo</p>
					<MdOutlineArrowForwardIos size={24} />
				</div>
      </div>
      
			<p className="font-medium text-2xl underline decoration-black decoration-4 text-center py-5">
				{label}
      </p>
      
		</Link>
	);
}

export default CategoryItem;

"use client";

import Image from "next/image";

const Avatar = ({ src }) => {
	return (
		<div>
			<Image
				className="rounded-full border-[3px] border-black"
				height="40"
				width="40"
				alt="Avatar"
				src={src || "/images/placeholder.jpg"}
			/>
		</div>
	);
};

export default Avatar;

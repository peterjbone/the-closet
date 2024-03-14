"use client";

const MenuItem = ({ onClick, label }) => {
	return (
		<div
			onClick={onClick}
			className="py-3 px-4 bg-white text-black transition font-semibold text-xl text-center hover:bg-slate-300 min-w-[125px] border-b-2 border-b-slate-600">
			{label}
		</div>
	);
};

export default MenuItem;

"use client";

function TallaInput({
	label,
	stock,
	value,
	handleProductChange,
	valueChecked
}) {
	/* prettier-ignore */
	return (
    <div className="flex flex-col items-center">
      {/* TALLA */}
      <button
        name="talla"
				value={value}
				onClick={handleProductChange}
        className={`
         flex
         items-center
         justify-center
         rounded-full 
         p-1 
         w-[4rem]
         h-[4rem] 
         mb-2
         text-center
         text-xl
         font-semibold 
         transition
         border-[3px]
       border-gray-500 
         hover:border-[3px]
       hover:border-gray-800 
       hover:bg-gray-300 
         cursor-pointer
         ${value === valueChecked ? "bg-black text-white" : ""}
        `}>
				{label}
      </button>
      {/* STOCK */}
      <div className="font-semibold text-lg">
        stock: {stock}
      </div>
		</div>
	);
}

export default TallaInput;

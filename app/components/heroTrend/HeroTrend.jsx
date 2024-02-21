import "./HeroTrend.css";

function HeroTrend() {
	/* prettier-ignore */
	return (
		<div
			className="
        max-w-screen-xl
        mx-auto
        pb-5
        ">
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
		</div>
	);
}

export default HeroTrend;

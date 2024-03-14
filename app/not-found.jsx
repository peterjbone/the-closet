import Link from "next/link";

export default function NotFound() {
	return (
		<div className="w-full min-h-screen bg-red-600 text-black flex flex-col justify-center items-center">
			<h2 className="font-bold text-8xl mb-4">Error 404</h2>
			<p className="font-semibold text-4xl mb-6">Página no encontrada :&#40;</p>
			<Link href="/">
				<button className="bg-white py-2 px-3 rounded-md hover:brightness-75 transition text-xl">
					Regresar
				</button>
			</Link>
		</div>
	);
}

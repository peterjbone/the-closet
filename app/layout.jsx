import "./globals.css";
import { Lato } from "next/font/google";
import Footer from "./components/footer/Footer";
import { Toaster } from "react-hot-toast";
import Providers from "./Providers";

//? Main font
const lato = Lato({
	subsets: ["latin"],
	weight: ["300", "400", "700", "900"],
	style: ["normal", "italic"]
});

//? Metadata
export const metadata = {
	title: "The closet"
};

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<body className={lato.className}>
				<Providers>
					<Toaster />
					{children}
					{/* <Footer /> */}
				</Providers>
			</body>
		</html>
	);
}

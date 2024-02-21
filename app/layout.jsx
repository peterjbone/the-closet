import "./globals.css";
import { Lato } from "next/font/google";

import Header from "./components/header/Header";

//? Main font
const lato = Lato({
	subsets: ["latin"],
	weight: ["300", "400", "700"],
	style: ["normal", "italic"]
});

//? Metadata
export const metadata = {
	title: "The closet"
};

export default function RootLayout({ children }) {
	/* prettier-ignore*/
	return (
		<html lang="es">
      <body className={lato.className}>
        <Header/>
        {children}
      </body>
		</html>
	);
}

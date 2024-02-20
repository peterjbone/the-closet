import "./globals.css";
import { Lato } from "next/font/google";

import Navbar from "@/components/navbar/Navbar.jsx";

// Main font
const lato = Lato({
	subsets: ["latin"],
	style: ["normal", "italic"],
	weight: ["300", "400", "700", "900"]
});

// Metadata
export const metadata = {
	title: "The closet"
};

export default function RootLayout({ children }) {
	/* prettier-ignore */
	return (
		<html lang="en">
      <body className={lato.className}>
        <Navbar/>
        {children}
      </body>
		</html>
	);
}

import "./globals.css";
import { Lato } from "next/font/google";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import { Provider } from "react-redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./redux/reducer";

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

//? Creating the store
const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

export default function RootLayout({ children }) {
	/* prettier-ignore*/
	return (
    <html lang="es">
        <body className={lato.className}>
          <Provider store={store}>
            <Header/>
            {children}
            <Footer />
          </Provider>
        </body>
      </html>
	);
}

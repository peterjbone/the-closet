import axios from "axios";
import { GET_ALL_PRODUCTS, REMOVE_ALL_PRODUCTS } from "./action-types";

export function getAllProducts() {
	const endpoint = "http://localhost:3001/productos";
	return async (dispatch) => {
		const { data } = await axios.get(`${endpoint}`);
		return dispatch({
			type: GET_ALL_PRODUCTS,
			payload: data
		});
	};
}

export function removeAllProducts() {
	return {
		type: REMOVE_ALL_PRODUCTS,
		payload: null
	};
}

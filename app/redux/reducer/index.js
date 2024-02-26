import { GET_ALL_PRODUCTS, REMOVE_ALL_PRODUCTS } from "../actions/action-types";

let initialState = {
	selectedProducts: [],
	allproducts: []
};

function rootReducer(state = initialState, { type, payload }) {
	switch (type) {
		case GET_ALL_PRODUCTS:
			return {
				...state,
				selectedProducts: [...payload],
				allproducts: [...payload]
			};

		case REMOVE_ALL_PRODUCTS:
			return {
				...state,
				selectedProducts: [],
				allproducts: []
			};

		default:
			return { ...state };
	}
}

export default rootReducer;

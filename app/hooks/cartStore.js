import { create } from "zustand";

export const useCartStore = create((set) => ({
	productsCart: [],
	total: 0,
	addToCart: async (product) => {
		set((state) => ({
			...state,
			selectedProducts: [product, ...state.productsCart]
		}));
	},
	removeFromCart: async (id) => {
		set((state) => ({
			...state,
			productsCart: [
				...state.productsCart.filter((product) => product.id !== id)
			]
		}));
	},
	clearCart: async () => {
		set((state) => ({
			...state,
			productsCart: []
		}));
	},
	getTotals: async () => {
		set((state) => ({
			...state,
			total: state.productsCart.reduce(
				(prevProduct, product) => prevProduct.precio + product.precio,
				0
			)
		}));
	}
}));

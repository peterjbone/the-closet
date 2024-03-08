import { create } from "zustand";

export const useCartStore = create((set) => ({
	cartItems: [],
	cartTotalQuantity: 0,
	cartTotalAmount: 0,
	addToCart: async (product) => {
		set((state) => ({
			...state,
			cartItems: [product, ...state.cartItems]
		}));
	},
	removeFromCart: async (product) => {
		set((state) => ({
			...state,
			cartItems: [...state.cartItems.filter((cartItem) => product.id !== id)]
		}));
	},
	decreaseCart: async (product) => {
		set((state) => ({
			...state
		}));
	},
	clearCart: async () => {
		set((state) => ({
			...state,
			cartItems: []
		}));
	},
	getTotals: async () => {
		set((state) => ({
			...state,
			cartTotalAmount: state.cartItems.reduce(
				(prevProduct, product) => prevProduct.precio + product.precio,
				0
			)
		}));
	}
}));

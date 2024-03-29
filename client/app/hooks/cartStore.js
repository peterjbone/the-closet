import { create } from "zustand";
import { toast } from "react-hot-toast";

export const useCartStore = create((set, get) => ({
	cartItems:
		typeof localStorage !== "undefined" && localStorage.getItem("cartItems")
			? JSON.parse(localStorage.getItem("cartItems"))
			: [],
	cartTotalQuantity: 0,
	cartTotalAmount: 0,
	addToCart: (product) => {
		let cartItems = get().cartItems;
		const existingIndex = cartItems.findIndex(
			(item) =>
				item.color === product.color &&
				item._id === product._id &&
				item.talla === product.talla
		);
		if (existingIndex >= 0) {
			//? copia del estado
			const updatedCartItems = [...cartItems];
			//? modificando el producto en especifico
			updatedCartItems[existingIndex] = {
				...updatedCartItems[existingIndex],
				cartQuantity: updatedCartItems[existingIndex].cartQuantity + 1
			};
			set((state) => ({
				...state,
				cartItems: [...updatedCartItems]
			}));
			toast.success("Se ha incrementado la cantidad del producto");
		} else {
			let tempProductItem = { ...product, cartQuantity: 1 };
			set((state) => ({
				...state,
				cartItems: [...state.cartItems, tempProductItem]
			}));
			toast.success("Producto añadido al carrito");
		}
		cartItems = get().cartItems;
		localStorage.setItem("cartItems", JSON.stringify(cartItems));
	},
	decreaseCart: (product) => {
		let cartItems = get().cartItems;
		const itemIndex = cartItems.findIndex(
			(item) => item.cartId === product.cartId
		);

		if (cartItems[itemIndex].cartQuantity > 1) {
			const decreaseCartItems = [...cartItems];
			decreaseCartItems[itemIndex].cartQuantity -= 1;
			set((state) => ({
				...state,
				cartItems: [...decreaseCartItems]
			}));
			toast.success("Se disminuyó la cantidad del producto");
		} else if (cartItems[itemIndex].cartQuantity === 1) {
			const nextCartItems = cartItems.filter(
				(item) => item.cartId !== product.cartId
			);
			set((state) => ({
				...state,
				cartItems: [...nextCartItems]
			}));
			toast.success("El producto fue removido del carrito");
		}
		cartItems = get().cartItems;
		localStorage.setItem("cartItems", JSON.stringify(cartItems));
	},
	removeFromCart: (product) => {
		let cartItems = get().cartItems;
		let nextCartItems = [];

		cartItems.forEach((cartItem) => {
			if (cartItem.cartId === product.cartId) {
				nextCartItems = cartItems.filter(
					(item) => item.cartId !== cartItem.cartId
				);

				set((state) => ({
					...state,
					cartItems: [...nextCartItems]
				}));

				toast.success("El producto fue removido del carrito");
			}
			cartItems = get().cartItems;
			localStorage.setItem("cartItems", JSON.stringify(cartItems));
		});
	},
	getTotals: () => {
		let cartItems = get().cartItems;
		let { total, quantity } = cartItems.reduce(
			(cartTotal, cartItem) => {
				const { precio, cartQuantity } = cartItem;
				const itemTotal = precio * cartQuantity;

				cartTotal.total += itemTotal;
				cartTotal.quantity += cartQuantity;

				return cartTotal;
			},
			{
				total: 0,
				quantity: 0
			}
		);
		total = parseFloat(total.toFixed(2));

		set((state) => ({
			...state,
			cartTotalQuantity: quantity,
			cartTotalAmount: total
		}));
	},
	clearCart: () => {
		set((state) => ({
			...state,
			cartItems: []
		}));
		const cartItems = get().cartItems;
		localStorage.setItem("cartItems", JSON.stringify(cartItems));
		toast.success("Carrito limpieado 🛒");
	}
}));

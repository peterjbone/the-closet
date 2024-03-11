import { create } from "zustand";

export const useWishlistStore = create((set, get) => ({
	favorites: [],
	addFavorite: (product) => {
		//! Abril asi se puede acceder a un estado global dentro de una funcion action
		//! Asi puedes manipularlo antes de setearlo.
		const favorites = get().favorites;
	},
	deleteFavorite: (product) => {},
	clearFavorite: () => {}
}));

import axios from "axios";
import { create } from "zustand";

export const useFavoritesStore = create((set, get) => ({
	favorites: [],
	favoriteTotalQuantity: 0,
	//* DEFINIENDO SI HAY FAVORITOS GUARDADOS EN BD (si es así los guarda en base de datos)
	defaultUserFavorites: async (userId) => {
		const endpoint = `${process.env.BACK_URL}/getfavorites`;
		const { data } = await axios.get(`${endpoint}?userid=${userId}`);

		if (data.length === 0) {
			set((state) => ({
				...state,
				favorites: [],
				favoriteTotalQuantity: 0
			}));
		} else {
			set((state) => ({
				...state,
				favorites: [...data],
				favoriteTotalQuantity: data.length
			}));
		}
	},
	//* AÑADIENDO UN PRODUCTO A FAVORITOS (en estado global y en BD)
	addFavorite: async (_id, product) => {
		// Guardando en base de datos
		const endpoint = `${process.env.BACK_URL}/postfavorite`;
		const info = { _id, product };
		await axios.post(`${endpoint}`, info);
		// Guardando en estado global
		const currentFavorites = get().favorites;
		const currentQuantity = get().favorites.length + 1;
		set((state) => ({
			...state,
			favorites: [...currentFavorites, product],
			favoriteTotalQuantity: currentQuantity
		}));
	},
	//* ELIMINANDO UN PRODUCTO DE FAVORITOS (en estado global y en BD)
	removeFavorite: async (userId, productId) => {
		// Eliminando en base de datos
		const endpoint = `${process.env.BACK_URL}/removefavorite`;
		await axios.delete(`${endpoint}?userid=${userId}&productid=${productId}`);
		// Eliminando en estado global
		const currentFavorites = get().favorites;
		const updatedFavorites = currentFavorites.filter(
			(item) => item._id !== productId
		);
		set((state) => ({
			...state,
			favorites: [...updatedFavorites],
			favoriteTotalQuantity: updatedFavorites.length
		}));
	}
}));

import axios from "axios";
import { create } from "zustand";

export const useProductsStore = create((set) => ({
	allProducts: [],
	featured: [],
	trendy: [],
	getAllProducts: async () => {
		const endpoint = `${process.env.BACK_URL}/allproducts`;
		const { data } = await axios.get(`${endpoint}`);
		set((state) => ({
			...state,
			allProducts: [...data]
		}));
	},
	getMenProducts: async () => {
		const endpoint = `${process.env.BACK_URL}/menproducts`;
		const { data } = await axios.get(`${endpoint}`);
		set((state) => ({
			...state,
			allProducts: [...data]
		}));
	},
	getWomenProducts: async () => {
		const { data } = await axios.get(`${process.env.BACK_URL}/womenproducts`);
		set((state) => ({
			...state,
			allProducts: [...data]
		}));
	},
	getChildrenProducts: async () => {
		const { data } = await axios.get(
			`${process.env.BACK_URL}/childrenproducts`
		);
		set((state) => ({
			...state,
			allProducts: [...data]
		}));
	},
	getNewProducts: async () => {
		const { data } = await axios.get(`${process.env.BACK_URL}/newproducts`);
		set((state) => ({
			...state,
			allProducts: [...data]
		}));
	},
	getHoodiesProducts: async () => {
		const { data } = await axios.get(`${process.env.BACK_URL}/hoodies`);
		set((state) => ({
			...state,
			allProducts: [...data]
		}));
	},
	getTshirtsProducts: async () => {
		const { data } = await axios.get(`${process.env.BACK_URL}/t-shirts`);
		set((state) => ({
			...state,
			allProducts: [...data]
		}));
	},
	getJoggersProducts: async () => {
		const { data } = await axios.get(`${process.env.BACK_URL}/joggers`);
		set((state) => ({
			...state,
			allProducts: [...data]
		}));
	},
	getShoes: async () => {
		const { data } = await axios.get(`${process.env.BACK_URL}/zapatos`);
		set((state) => ({
			...state,
			allProducts: [...data]
		}));
	},
	getJeans: async () => {
		const { data } = await axios.get(`${process.env.BACK_URL}/jeans`);
		set((state) => ({
			...state,
			allProducts: [...data]
		}));
	},
	getShorts: async () => {
		const { data } = await axios.get(`${process.env.BACK_URL}/shorts`);
		set((state) => ({
			...state,
			allProducts: [...data]
		}));
	},
	getTrendyProducts: async () => {
		const { data } = await axios.get(`${process.env.BACK_URL}/tendencia`);
		set((state) => ({
			...state,
			trendy: [...data]
		}));
	},
	getFeaturedProducts: async () => {
		const { data } = await axios.get(`${process.env.BACK_URL}/destacados`);
		set((state) => ({
			...state,
			featured: [...data]
		}));
	},
	removeAllProducts: () => {
		set((state) => ({
			...state,
			allProducts: []
		}));
	},
	removeAllTrendy: () => {
		set((state) => ({
			...state,
			trendy: []
		}));
	},
	removeAllFeatured: () => {
		set((state) => ({
			...state,
			featured: []
		}));
	}
}));

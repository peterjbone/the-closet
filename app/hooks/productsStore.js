import { create } from "zustand";
import axios from "axios";

export const useProductsStore = create((set) => ({
  selectedProducts: [],
  allProducts: [],
  trendy: [],
  getAllProducts: async () => {
    const endpoint = "http://localhost:3001/allproducts";
    const { data } = await axios.get(`${endpoint}`);
    set((state) => ({
      ...state,
      selectedProducts: [...data],
      allProducts: [...data],
    }));
  },
  getMenProducts: async () => {
    const endpoint = "http://localhost:3001/menproducts";
    const { data } = await axios.get(`${endpoint}`);
    set((state) => ({
      ...state,
      selectedProducts: [...data],
      allProducts: [...data],
    }));
  },
  getWomenProducts: async () => {
    const { data } = await axios.get("http://localhost:3001/womenproducts");
    set((state) => ({
      ...state,
      selectedProducts: [...data],
      allProducts: [...data],
    }));
  },
  getChildrenProducts: async () => {
    const { data } = await axios.get("http://localhost:3001/childrenproducts");
    set((state) => ({
      ...state,
      selectedProducts: [...data],
      allProducts: [...data],
    }));
  },
  getNewProducts: async () => {
    const { data } = await axios.get("http://localhost:3001/newproducts");
    set((state) => ({
      ...state,
      selectedProducts: [...data],
      allProducts: [...data],
    }));
  },
  getHoodiesProducts: async () => {
    const { data } = await axios.get("http://localhost:3001/hoodies");
    set((state) => ({
      ...state,
      selectedProducts: [...data],
      allProducts: [...data],
    }));
  },
  getTshirtsProducts: async () => {
    const { data } = await axios.get("http://localhost:3001/t-shirts");
    set((state) => ({
      ...state,
      selectedProducts: [...data],
      allProducts: [...data],
    }));
  },
  getJoggersProducts: async () => {
    const { data } = await axios.get("http://localhost:3001/joggers");
    set((state) => ({
      ...state,
      selectedProducts: [...data],
      allProducts: [...data],
    }));
  },
  getShoes: async () => {
    const { data } = await axios.get("http://localhost:3001/zapatos");
    set((state) => ({
      ...state,
      selectedProducts: [...data],
      allProducts: [...data],
    }));
  },
  getJeans: async () => {
    const { data } = await axios.get("http://localhost:3001/jeans");
    set((state) => ({
      ...state,
      selectedProducts: [...data],
      allProducts: [...data],
    }));
  },
  getShorts: async () => {
    const { data } = await axios.get("http://localhost:3001/shorts");
    set((state) => ({
      ...state,
      selectedProducts: [...data],
      allProducts: [...data],
    }));
  },
  getTrendyProducts: async () => {
    const { data } = await axios.get("http://localhost:3001/tendencia");
    set((state) => ({
      ...state,
      selectedProducts: [...data],
      trendy: [...data],
      //allProducts: [...data],
    }));
  },
  getFeaturedProducts: async () => {
    const { data } = await axios.get("http://localhost:3001/destacados");
    set((state) => ({
      ...state,
      selectedProducts: [...data],
      allProducts: [...data],
    }));
  },

  removeAllProducts: () => {
    set((state) => ({
      ...state,
      selectedProducts: [],
      allProducts: [],
    }));
  },
}));

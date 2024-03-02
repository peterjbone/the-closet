import { create } from "zustand";
import axios from "axios";

export const useProductsStore = create((set) => ({
  selectedProducts: [],
  allProducts: [],
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
  removeAllProducts: () => {
    set((state) => ({
      ...state,
      selectedProducts: [],
      allProducts: [],
    }));
  },
}));

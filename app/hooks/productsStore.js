import { create } from "zustand";
import axios from "axios";

export const useProductsStore = create((set) => ({
  selectedProducts: [],
  allProducts: [],
  getAllProducts: async () => {
    const endpoint = "http://localhost:3001/allproducts";
    const { data } = await axios.get(`${endpoint}`);
    console.log(data);
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
  removeAllProducts: () => {
    set((state) => ({
      ...state,
      selectedProducts: [],
      allProducts: [],
    }));
  },
}));

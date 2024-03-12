import { create } from "zustand";
//import { persist } from "zustand/middleware";

export const useFavoritesStore = create(
  // persist(
  (set, getState) => ({
    favorites: [],
    addFavorites: (_id) => {
      const currentFavorites = getState().favorites;
      set({ favorites: [...currentFavorites, _id] });
      console.log(getState().favorites);
    },

    removeFavorites: (_id) => {
      const currentFavorites = getState().favorites;
      set({ favorites: currentFavorites.filter((id) => id !== _id) });
      console.log(getState().favorites);
    },
  })
  //{ name: "fav-storage" }
);

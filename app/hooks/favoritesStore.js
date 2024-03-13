import { create } from "zustand";

export const useFavoritesStore = create((set, getState) => ({
  favorites: [],
  addFavorites: (product) => {
    const currentFavorites = getState().favorites;
    //Verificar si ya esta en favoritos:
    if (!currentFavorites.find((item) => item._id === product._id)) {
      set({ favorites: [...currentFavorites, product] });
      console.log("Producto agregado a favoritos:", product);
    } else {
      console.log("El producto ya está en favoritos:", product);
    }
  },
  removeFavorites: (productId, name) => {
    const currentFavorites = getState().favorites;
    console.log("Productos antes de eliminar por ID: ", currentFavorites);
    // Filtrar por ID y nombre
    const updatedFavorites = currentFavorites.filter(
      (item) => item._id !== productId || item.nombre !== name
    );
    console.log("Lista de favoritos después de eliminar:", updatedFavorites);

    set({ favorites: updatedFavorites });

    console.log("Producto quitado de favoritos: ", productId);
    console.log(getState().favorites);
  },
}));

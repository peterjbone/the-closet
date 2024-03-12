"use client";
import { Heart } from "../heart/Heart";
import { useState } from "react";
import { useCounterStore } from "../../../hooks/counterStore";
import { useFavoritesStore } from "../../../hooks/favoritesStore";

const Hearts = (
  nombre,
  marca,
  precio,
  _id,
  imagen,
  categoria,
  genero,
  colores,
  productoNuevo
) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const addToFavorites = useFavoritesStore((state) => state.addFavorites);
  const removeFromFavorites = useFavoritesStore(
    (state) => state.removeFavorites
  );

  const [state, setState] = useState({
    black: true,
  });

  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  const handleClick = () => {
    setState({
      ...state,
      black: !state.black,
    });
    setIsFavorite(!isFavorite);

    if (!isFavorite) {
      addToFavorites(
        nombre,
        marca,
        precio,
        _id,
        imagen,
        categoria,
        genero,
        colores,
        productoNuevo
      );
    } else {
      removeFromFavorites(
        nombre,
        marca,
        precio,
        _id,
        imagen,
        categoria,
        genero,
        colores,
        productoNuevo
      );
    }

    //Manejo el contador en base al color del ❤️.
    state.black ? increment() : decrement();
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-3">
        <div>
          <Heart black={!isFavorite} onClick={handleClick} />
        </div>
      </div>
    </>
  );
};
export default Hearts;

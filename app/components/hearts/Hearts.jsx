"use client";

import { useSession } from "next-auth/react";
import { toast } from "react-hot-toast";

import { Heart } from "../wishlist/heart/Heart";
import { useState } from "react";
import { useCounterStore } from "../../hooks/counterStore";
import { useFavoritesStore } from "../../hooks/favoritesStore";

const Hearts = (product) => {
  const { data: session, status } = useSession();

  const [isFavorite, setIsFavorite] = useState(false);
  const addToFavorites = useFavoritesStore((state) => state.addFavorites);
  const removeFromFavorites = useFavoritesStore(
    (state) => state.removeFavorites
  );
  const isAuthenticated = status === "authenticated";

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

    if (isAuthenticated) {
      if (!isFavorite) {
        addToFavorites(product);
      } else {
        removeFromFavorites(product._id, product.nombre);
      }
    } else {
      toast.error("Debes iniciar sesión para ver tus favoritos.");
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

"use client";

import CategoryNav from "../../components/categoryNav/CategoryNav";
import Footer from "../../components/footer/Footer";
import ProductCard from "../../components/productCard/ProductCard";
import { useFavoritesStore } from "../../hooks/favoritesStore";
import { useRouter } from "next/navigation";

function WishListPage() {
  const favorites = useFavoritesStore((state) => state.favorites);
  console.log("Estado inicial de favorites:", favorites);

  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };

  return (
    <div>
      <CategoryNav />
      <div>
        <div className="flex justify-center p-4 mr-10">
          <button
            onClick={handleGoBack}
            className="bg-black text-white font-bold p-4 rounded"
          >
            BACK
          </button>
        </div>

        <div className="grid grid-cols-5 gap-10 m-7 place-content-center items-center align-middle justify-center">
          {favorites.map(
            (
              {
                imagen,
                nombre,
                precio,
                colores,
                categoria,
                genero,
                marca,
                productoNuevo,
                _id,
              },
              index
            ) =>
              imagen && (
                <ProductCard
                  key={index}
                  _id={_id}
                  nombre={nombre}
                  imagen={imagen}
                  precio={precio}
                  colores={colores}
                  categoria={categoria}
                  genero={genero}
                  marca={marca}
                  productoNuevo={productoNuevo}
                  isFavoritesScreen={true}
                />
              )
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default WishListPage;

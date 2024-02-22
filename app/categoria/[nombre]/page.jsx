import data from "@/app/utils/db.json";
import ProductCard from "@/app/components/productCard/ProductCard";

function Page({ params }) {
	const { nombre } = params;

	const currentCategory = data.find((item) => item.categoria === nombre);
	const { categoria, productos } = currentCategory;

	/* prettier-ignore */
	return (
    <div className="text-center font-bold text-5xl">
      <h1>Categoria de {categoria}</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6">
        {
          productos.map(item => (
            <ProductCard
              key={item.nombre}
              id={item.id}
              nombre={item.nombre}
              marca={item.marca}
              descripcion={item.descripcion}
              precio={item.precio}
              inOferta={item.inOferta}
              oferta={item.oferta}
              categoria={item.categoria}
              genero={item.genero}
              imagen={item.imagen}
              tallas={item.tallas}
              colores={item.colores}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Page;

import { productos } from "./kidsData";
import Card from "./Card";

const Kidspage = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        {" "}
        <h1 className="text-3xl text-center m-2 pt-9 font-bold">
          {" "}
          CATEGORÍA: NIÑOS
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 m-10 p-10 mt-8">
          {productos.map((producto) => (
            <Card key={producto.id} producto={producto} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Kidspage;

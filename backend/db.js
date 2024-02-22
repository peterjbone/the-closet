const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/thecloset", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conexion establecida"))
  .catch((err) => console.log("Error", err));

const productoSchema = new mongoose.Schema({
  name: String,
  brand: String,
  description: String,
  price: Number,
  onSale: Boolean,
  sale: Number,
  category: String,
  gender: String,
  subCategory: String,
  image: [String],
  size: [String],
  // colores: [String],
  // stock: {
  //   S: { negro: Number, blanco: Number },
  //   M: { negro: Number, blanco: Number },
  //   L: { negro: Number, blanco: Number },
  //   XL: { negro: Number, blanco: Number },

  // },
  options: [Object],
  isActive: {type: Boolean, default: false},
  newArrival: {type: Boolean, default: false},
});

const Producto = mongoose.model("Products", productoSchema);

// const productos = [
//   {
//     id: 17,
//     nombre: "remera steps",
//     marca: "taverniti",
//     descripcion: "algo hay que poner",
//     precio: 10.5,
//     inOferta: false,
//     oferta: 0,
//     categoria: "adulto",
//     genero: "femenino",
//     subcategoria: "prendaSuperior",
//     imagen: [
//       "https://taverniti.vtexassets.com/arquivos/ids/283174-1200-1440?v=638429231594330000&width=1200&height=1440&aspect=true",
//       "https://taverniti.vtexassets.com/arquivos/ids/283170-1200-1440?v=638429230288800000&width=1200&height=1440&aspect=true",
//       "https://taverniti.vtexassets.com/arquivos/ids/283172-1200-1440?v=638429230540270000&width=1200&height=1440&aspect=true",
//     ],
//     tallas: ["S", "M", "L", "XL"],
//     colores: ["negro", "blanco"],
//     stock: {
//       S: { negro: 10, blanco: 15 },
//       M: { negro: 10, blanco: 15 },
//       L: { negro: 10, blanco: 15 },
//       XL: { negro: 10, blanco: 15 },
//     },
//   },
//   {
//     id: 18,
//     nombre: "Remera kori",
//     marca: "taverniti",
//     descripcion: "algo hay que poner",
//     precio: 15.5,
//     inOferta: false,
//     oferta: 0,
//     categoria: "adulto",
//     genero: "femenino",
//     subcategoria: "prendaSuperior",
//     imagen: [
//       "https://taverniti.vtexassets.com/arquivos/ids/281952-1200-1440?v=638388477253230000&width=1200&height=1440&aspect=true",
//       "https://taverniti.vtexassets.com/arquivos/ids/281989-1200-1440?v=638388477767600000&width=1200&height=1440&aspect=true",
//       "https://taverniti.vtexassets.com/arquivos/ids/282026-1200-1440?v=638388478310100000&width=1200&height=1440&aspect=true",
//     ],
//     tallas: ["S", "M", "L", "XL"],
//     colores: ["negro", "blanco"],
//     stock: {
//       S: { negro: 10, blanco: 15 },
//       M: { negro: 10, blanco: 15 },
//       L: { negro: 10, blanco: 15 },
//       XL: { negro: 10, blanco: 15 },
//     },
//   },
//   {
//     id: 19,
//     nombre: "camisa lissa",
//     marca: "taverniti",
//     descripcion: "algo hay que poner",
//     precio: 20.5,
//     inOferta: false,
//     oferta: 0,
//     categoria: "adulto",
//     genero: "femenino",
//     subcategoria: "prendaSuperior",
//     imagen: [
//       "https://taverniti.vtexassets.com/arquivos/ids/279625-1200-1440?v=638343707657400000&width=1200&height=1440&aspect=true",
//       "https://taverniti.vtexassets.com/arquivos/ids/279626-1200-1440?v=638343707791100000&width=1200&height=1440&aspect=true",
//       "https://taverniti.vtexassets.com/arquivos/ids/279628-1200-1440?v=638343708267800000&width=1200&height=1440&aspect=true",
//     ],
//     tallas: ["S", "M", "L", "XL"],
//     colores: ["negro", "blanco"],
//     stock: {
//       S: { negro: 10, blanco: 15 },
//       M: { negro: 10, blanco: 15 },
//       L: { negro: 10, blanco: 15 },
//       XL: { negro: 10, blanco: 15 },
//     },
//   },
// ];

// // Insertar documentos en la colección
// Producto.insertMany(productos)
//   .then(() => console.log("Documentos insertados correctamente"))
//   .catch((err) => console.error("Error al insertar documentos:", err));

module.exports = Producto

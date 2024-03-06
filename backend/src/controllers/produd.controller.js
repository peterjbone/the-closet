const prodCtrl = {};

const Prod = require('../models/Product');

// CREAR UN PRODUCTO NUEVO
prodCtrl.renderProdForm = (req, res) => {
    const ListColores = [{"codHexadecimal": "#000000","nombreColor": "negro"},{"codHexadecimal": "#FFFFFF","nombreColor": "blanco"},{"codHexadecimal": "#FF0000",
    "nombreColor": "rojo"}];
    const ListaMarcas = [{"nombre":"falabela"},{"nombre":"taverniti"},{"nombre":"batistella"},{"nombre":"mambo"},{"nombre":"adidas"},{"nombre":"copmlot"}];
    const ListaSubCategorias = [{"nombre":"Camisetas y Polos"},{"id": "sc01","nombre":"Camisas"},{"nombre":"Sudaderas y Hoodies"},{"nombre":"Chaquetas y Abrigos"},{"nombre":"Chalecos"},{"nombre":"Blusas y Tops"},{"nombre":"Cardigans y Suéteres"},{"nombre":"Camisetas de Deporte"}]
    
    data = {ListColores, ListaMarcas, ListaSubCategorias};
    res.render('products/new-prod', data);
    //res.send('nuevo producto')
};

prodCtrl.createNewProd = async (req, res) => {
    const {nombre, marca, descripcion, genero, categoria, subcategoria, prod1} = req.body;
    const newProd = new Prod({nombre, marca, descripcion, prod1});
    //console.log(newProd);
    console.log(req.body);
    //await newProd.save()

    res.send('/products/add');
};


// MODIFICAR UN PRODUCTO
prodCtrl.renderEditForm = async (req, res) => {
    res.send('modificar un producto')
};
prodCtrl.updateProd = async (req, res) => {

};


// CAMBIAR ACT - NOACT
prodCtrl.actDesProd = async (req, res) => {

};

// BORRAR PRODUCTO
prodCtrl.borrarProd = async (req, res) => {

};


// REND TODOS LOS PRODUCTOS
prodCtrl.renderProducts = async (req, res) => {
    const prod = await Prod.find().lean();
    res.render('products/all-prod', {prod})
};


module.exports = prodCtrl;
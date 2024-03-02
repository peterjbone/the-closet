//? Aquí estan "todos los productos" hasta el momento
//? hay 61 productos
//? Esto sirve para insertarlo en la base de datos "thecloset" en la colección "productos"

const productos = [
	{
		id: 1,
		nombre: "chomba falabe",
		marca: "falabela",
		descripcion: "algo hay que poner",
		precio: 10.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: true,
		categoria: "adulto",
		genero: "masculino",
		subcategoria: "prendaSuperior",
		imagen: [
			"https://taverniti.vtexassets.com/arquivos/ids/250819/04478_603X3.jpg?v=637989524558130000",
			"https://acdn.mitiendanube.com/stores/001/160/124/products/southfox_dic-451-567bef1aba1a1eb47b16910779498511-1024-1024.jpg",
			"https://chombas.com.ar/wp-content/uploads/2016/02/chombas-con-logo-5-4.jpg"
		],
		tallas: ["S", "M", "L", "XL"],
		colores: ["rojo", "negro", "blanco"],
		opcion: [
			{
				color: {
					codHexadecimal: "#FF0000",
					nombreColor: "rojo"
				},
				talles: [
					{
						talla: "S",
						stock: 10
					},
					{
						talla: "L",
						stock: 10
					},
					{
						talla: "M",
						stock: 10
					},
					{
						talla: "XL",
						stock: 10
					}
				]
			},
			{
				color: {
					codHexadecimal: "#000000",
					nombreColor: "negro"
				},
				talles: [
					{
						talla: "S",
						stock: 15
					},
					{
						talla: "L",
						stock: 15
					},
					{
						talla: "M",
						stock: 15
					},
					{
						talla: "XL",
						stock: 15
					}
				]
			},
			{
				color: {
					codHexadecimal: "#FFFFFF",
					nombreColor: "blanco"
				},
				talles: [
					{
						talla: "S",
						stock: 15
					},
					{
						talla: "L",
						stock: 15
					},
					{
						talla: "M",
						stock: 15
					},
					{
						talla: "XL",
						stock: 15
					}
				]
			}
		]
	},
	{
		id: 2,
		nombre: "campera invierno",
		marca: "falabela",
		descripcion: "algo hay que poner",
		precio: 20.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: true,
		categoria: "adulto",
		genero: "masculino",
		subcategoria: "prendaSuperior",
		imagen: [
			"https://taverniti.vtexassets.com/arquivos/ids/243475-1200-1440?v=637934911423800000&width=1200&height=1440&aspect=true",
			"https://taverniti.vtexassets.com/arquivos/ids/243476-1200-1440?v=637934911902700000&width=1200&height=1440&aspect=true",
			"https://taverniti.vtexassets.com/arquivos/ids/243477-1200-1440?v=637934912260670000&width=1200&height=1440&aspect=true"
		],
		tallas: ["S", "M", "L", "XL"],
		colores: ["negro", "blanco"],
		opcion: [
			{
				color: {
					codHexadecimal: "#000000",
					nombreColor: "negro"
				},
				talles: [
					{
						talla: "S",
						stock: 10
					},
					{
						talla: "M",
						stock: 10
					},
					{
						talla: "L",
						stock: 10
					},
					{
						talla: "XL",
						stock: 10
					}
				]
			},
			{
				color: {
					codHexadecimal: "#FFFFFF",
					nombreColor: "blanco"
				},
				talles: [
					{
						talla: "S",
						stock: 15
					},
					{
						talla: "M",
						stock: 15
					},
					{
						talla: "L",
						stock: 15
					},
					{
						talla: "XL",
						stock: 15
					}
				]
			}
		]
	},
	{
		id: 3,
		nombre: "campera fenix",
		marca: "taverniti",
		descripcion: "algo hay que poner",
		precio: 15.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "adulto",
		genero: "masculino",
		subcategoria: "prendaSuperior",
		imagen: [
			"https://taverniti.vtexassets.com/arquivos/ids/268925-1200-1440?v=638224393555230000&width=1200&height=1440&aspect=true",
			"https://taverniti.vtexassets.com/arquivos/ids/268926-1200-1440?v=638224394288900000&width=1200&height=1440&aspect=true",
			"https://taverniti.vtexassets.com/arquivos/ids/268927-1200-1440?v=638224396646130000&width=1200&height=1440&aspect=true"
		],
		tallas: ["S", "M", "L", "XL"],
		colores: ["negro", "blanco"],
		opcion: [
			{
				color: {
					codHexadecimal: "#000000",
					nombreColor: "negro"
				},
				talles: [
					{
						talla: "S",
						stock: 10
					},
					{
						talla: "M",
						stock: 15
					},
					{
						talla: "L",
						stock: 20
					},
					{
						talla: "XL",
						stock: 10
					}
				]
			},
			{
				color: {
					codHexadecimal: "#FFFFFF",
					nombreColor: "blanco"
				},
				talles: [
					{
						talla: "S",
						stock: 15
					},
					{
						talla: "M",
						stock: 10
					},
					{
						talla: "L",
						stock: 15
					},
					{
						talla: "XL",
						stock: 20
					}
				]
			}
		]
	},
	{
		id: 4,
		nombre: "campera pablo",
		marca: "taverniti",
		descripcion: "algo hay que poner",
		precio: 12.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "adulto",
		genero: "masculino",
		subcategoria: "prendaSuperior",
		imagen: [
			"https://taverniti.vtexassets.com/arquivos/ids/279725-1200-1440?v=638345443183630000&width=1200&height=1440&aspect=true",
			"https://taverniti.vtexassets.com/arquivos/ids/279726-1200-1440?v=638345443304900000&width=1200&height=1440&aspect=true",
			"https://taverniti.vtexassets.com/arquivos/ids/279728-1200-1440?v=638345443703100000&width=1200&height=1440&aspect=true"
		],
		tallas: ["S", "M", "L", "XL"],
		colores: ["negro", "blanco"],
		opcion: [
			{
				color: {
					codHexadecimal: "#000000",
					nombreColor: "negro"
				},
				talles: [
					{
						talla: "S",
						stock: 10
					},
					{
						talla: "M",
						stock: 15
					},
					{
						talla: "L",
						stock: 20
					},
					{
						talla: "XL",
						stock: 10
					}
				]
			},
			{
				color: {
					codHexadecimal: "#FFFFFF",
					nombreColor: "blanco"
				},
				talles: [
					{
						talla: "S",
						stock: 15
					},
					{
						talla: "M",
						stock: 10
					},
					{
						talla: "L",
						stock: 15
					},
					{
						talla: "XL",
						stock: 20
					}
				]
			}
		]
	},
	{
		id: 5,
		nombre: "remera owen",
		marca: "taverniti",
		descripcion: "algo hay que poner",
		precio: 7.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "adulto",
		genero: "masculino",
		subcategoria: "prendaSuperior",
		imagen: [
			"https://taverniti.vtexassets.com/arquivos/ids/274382-1200-1440?v=638294376572800000&width=1200&height=1440&aspect=true",
			"https://taverniti.vtexassets.com/arquivos/ids/274418-1200-1440?v=638294377121030000&width=1200&height=1440&aspect=true",
			"https://taverniti.vtexassets.com/arquivos/ids/274454-1200-1440?v=638294377695500000&width=1200&height=1440&aspect=true"
		],
		tallas: ["S", "M", "L", "XL"],
		colores: ["negro", "blanco"],
		opcion: [
			{
				color: {
					codHexadecimal: "#000000",
					nombreColor: "negro"
				},
				talles: [
					{
						talla: "S",
						stock: 10
					},
					{
						talla: "M",
						stock: 15
					},
					{
						talla: "L",
						stock: 20
					},
					{
						talla: "XL",
						stock: 10
					}
				]
			},
			{
				color: {
					codHexadecimal: "#FFFFFF",
					nombreColor: "blanco"
				},
				talles: [
					{
						talla: "S",
						stock: 15
					},
					{
						talla: "M",
						stock: 10
					},
					{
						talla: "L",
						stock: 15
					},
					{
						talla: "XL",
						stock: 20
					}
				]
			}
		]
	},
	{
		id: 6,
		nombre: "remera christian",
		marca: "taverniti",
		descripcion: "algo hay que poner",
		precio: 5.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "adulto",
		genero: "masculino",
		subcategoria: "prendaSuperior",
		imagen: [
			"https://taverniti.vtexassets.com/arquivos/ids/281584-1200-1440?v=638370386851570000&width=1200&height=1440&aspect=true",
			"https://taverniti.vtexassets.com/arquivos/ids/281585-1200-1440?v=638370386970500000&width=1200&height=1440&aspect=true",
			"https://taverniti.vtexassets.com/arquivos/ids/281586-1200-1440?v=638370387102100000&width=1200&height=1440&aspect=true"
		],
		tallas: ["S", "M", "L", "XL"],
		colores: ["negro", "blanco"],
		opcion: [
			{
				color: {
					codHexadecimal: "#000000",
					nombreColor: "negro"
				},
				talles: [
					{
						talla: "S",
						stock: 10
					},
					{
						talla: "M",
						stock: 15
					},
					{
						talla: "L",
						stock: 20
					},
					{
						talla: "XL",
						stock: 10
					}
				]
			},
			{
				color: {
					codHexadecimal: "#FFFFFF",
					nombreColor: "blanco"
				},
				talles: [
					{
						talla: "S",
						stock: 15
					},
					{
						talla: "M",
						stock: 10
					},
					{
						talla: "L",
						stock: 15
					},
					{
						talla: "XL",
						stock: 20
					}
				]
			}
		]
	},
	{
		id: 7,
		nombre: "jean bates",
		marca: "taverniti",
		descripcion: "algo hay que poner",
		precio: 20.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "adulto",
		genero: "masculino",
		subcategoria: "prendaInferior",
		imagen: [
			"https://taverniti.vtexassets.com/arquivos/ids/282841-1200-1440?v=638425000292130000&width=1200&height=1440&aspect=true",
			"https://taverniti.vtexassets.com/arquivos/ids/282930-1200-1440?v=638425001523970000&width=1200&height=1440&aspect=true",
			"https://taverniti.vtexassets.com/arquivos/ids/283012-1200-1440?v=638425002891470000&width=1200&height=1440&aspect=true"
		],
		tallas: ["30", "34", "38", "40"],
		colores: ["azul", "negro"],
		opcion: [
			{
				color: {
					codHexadecimal: "#0000FF",
					nombreColor: "azul"
				},
				talles: [
					{
						talla: "30",
						stock: 10
					},
					{
						talla: "34",
						stock: 15
					},
					{
						talla: "38",
						stock: 20
					},
					{
						talla: "40",
						stock: 10
					}
				]
			},
			{
				color: {
					codHexadecimal: "#000000",
					nombreColor: "negro"
				},
				talles: [
					{
						talla: "30",
						stock: 15
					},
					{
						talla: "34",
						stock: 10
					},
					{
						talla: "38",
						stock: 15
					},
					{
						talla: "40",
						stock: 20
					}
				]
			}
		]
	},
	{
		id: 8,
		nombre: "jean mastergold",
		marca: "taverniti",
		descripcion: "algo hay que poner",
		precio: 15.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "adulto",
		genero: "masculino",
		subcategoria: "prendaInferior",
		imagen: [
			"https://taverniti.vtexassets.com/arquivos/ids/282812-1200-1440?v=638424999896170000&width=1200&height=1440&aspect=true",
			"https://taverniti.vtexassets.com/arquivos/ids/282901-1200-1440?v=638425001081200000&width=1200&height=1440&aspect=true",
			"https://taverniti.vtexassets.com/arquivos/ids/282983-1200-1440?v=638425002326900000&width=1200&height=1440&aspect=true"
		],
		tallas: ["30", "34", "38", "40"],
		colores: ["azul", "blanco"],
		opcion: [
			{
				color: {
					codHexadecimal: "#0000FF",
					nombreColor: "azul"
				},
				talles: [
					{
						talla: "30",
						stock: 10
					},
					{
						talla: "34",
						stock: 15
					},
					{
						talla: "38",
						stock: 20
					},
					{
						talla: "40",
						stock: 10
					}
				]
			},
			{
				color: {
					codHexadecimal: "#FFFFFF",
					nombreColor: "blanco"
				},
				talles: [
					{
						talla: "30",
						stock: 15
					},
					{
						talla: "34",
						stock: 10
					},
					{
						talla: "38",
						stock: 15
					},
					{
						talla: "40",
						stock: 20
					}
				]
			}
		]
	},
	{
		id: 9,
		nombre: "jean zarar",
		marca: "taverniti",
		descripcion: "algo hay que poner",
		precio: 30.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "adulto",
		genero: "masculino",
		subcategoria: "prendaInferior",
		imagen: [
			"https://taverniti.vtexassets.com/arquivos/ids/281789-1200-1440?v=638380948476100000&width=1200&height=1440&aspect=true",
			"https://taverniti.vtexassets.com/arquivos/ids/281790-1200-1440?v=638380948611100000&width=1200&height=1440&aspect=true",
			"https://taverniti.vtexassets.com/arquivos/ids/281791-1200-1440?v=638380948759370000&width=1200&height=1440&aspect=true"
		],
		tallas: ["30", "34", "38", "40"],
		colores: ["negro", "marron"],
		opcion: [
			{
				color: {
					codHexadecimal: "#000000",
					nombreColor: "negro"
				},
				talles: [
					{
						talla: "30",
						stock: 10
					},
					{
						talla: "34",
						stock: 15
					},
					{
						talla: "38",
						stock: 20
					},
					{
						talla: "40",
						stock: 10
					}
				]
			},
			{
				color: {
					codHexadecimal: "#8B4513",
					nombreColor: "marron"
				},
				talles: [
					{
						talla: "30",
						stock: 15
					},
					{
						talla: "34",
						stock: 10
					},
					{
						talla: "38",
						stock: 15
					},
					{
						talla: "40",
						stock: 20
					}
				]
			}
		]
	},
	{
		id: 10,
		nombre: "bermuda zlin",
		marca: "taverniti",
		descripcion: "algo hay que poner",
		precio: 20.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "adulto",
		genero: "masculino",
		subcategoria: "prendaInferior",
		imagen: [
			"https://taverniti.vtexassets.com/arquivos/ids/235474-1200-1440?v=637685380288230000&width=1200&height=1440&aspect=true",
			"https://taverniti.vtexassets.com/arquivos/ids/235508-1200-1440?v=637685380780900000&width=1200&height=1440&aspect=true",
			"https://taverniti.vtexassets.com/arquivos/ids/235542-1200-1440?v=637685381313700000&width=1200&height=1440&aspect=true"
		],
		tallas: ["30", "34", "38", "40"],
		colores: ["azul", "gris"],
		opcion: [
			{
				color: {
					codHexadecimal: "#0000FF",
					nombreColor: "azul"
				},
				talles: [
					{
						talla: "30",
						stock: 10
					},
					{
						talla: "34",
						stock: 15
					},
					{
						talla: "38",
						stock: 20
					},
					{
						talla: "40",
						stock: 10
					}
				]
			},
			{
				color: {
					codHexadecimal: "#808080",
					nombreColor: "gris"
				},
				talles: [
					{
						talla: "30",
						stock: 15
					},
					{
						talla: "34",
						stock: 10
					},
					{
						talla: "38",
						stock: 15
					},
					{
						talla: "40",
						stock: 20
					}
				]
			}
		]
	},
	{
		id: 11,
		nombre: "bermuda brand",
		marca: "taverniti",
		descripcion: "algo hay que poner",
		precio: 55.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "adulto",
		genero: "masculino",
		subcategoria: "prendaInferior",
		imagen: [
			"https://taverniti.vtexassets.com/arquivos/ids/281883-1200-1440?v=638386855039200000&width=1200&height=1440&aspect=true",
			"https://taverniti.vtexassets.com/arquivos/ids/281902-1200-1440?v=638386855315770000&width=1200&height=1440&aspect=true",
			"https://taverniti.vtexassets.com/arquivos/ids/281921-1200-1440?v=638386855619730000&width=1200&height=1440&aspect=true"
		],
		tallas: ["30", "34", "38", "40"],
		colores: ["negro", "marron"],
		opcion: [
			{
				color: {
					codHexadecimal: "#000000",
					nombreColor: "negro"
				},
				talles: [
					{
						talla: "30",
						stock: 10
					},
					{
						talla: "34",
						stock: 15
					},
					{
						talla: "38",
						stock: 20
					},
					{
						talla: "40",
						stock: 10
					}
				]
			},
			{
				color: {
					codHexadecimal: "#8B4513",
					nombreColor: "marron"
				},
				talles: [
					{
						talla: "30",
						stock: 15
					},
					{
						talla: "34",
						stock: 10
					},
					{
						talla: "38",
						stock: 15
					},
					{
						talla: "40",
						stock: 20
					}
				]
			}
		]
	},
	{
		id: 12,
		nombre: "zapatillas clásicas",
		marca: "batistella",
		descripcion: "algo hay que poner",
		precio: 15.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "adulto",
		genero: "masculino",
		subcategoria: "calsado",
		imagen: [
			"https://calzadosbatistella.com.ar/shop/85715-superlarge_default/zapatillas-clasicas-de-cuero-en-azul.jpg",
			"https://calzadosbatistella.com.ar/shop/85711-superlarge_default/zapatillas-clasicas-de-cuero-en-azul.jpg",
			"https://calzadosbatistella.com.ar/shop/85712-superlarge_default/zapatillas-clasicas-de-cuero-en-azul.jpg"
		],
		tallas: ["39", "41", "43", "45"],
		colores: ["negro", "blanco"],
		opcion: [
			{
				color: {
					codHexadecimal: "#000000",
					nombreColor: "negro"
				},
				talles: [
					{
						talla: "39",
						stock: 10
					},
					{
						talla: "41",
						stock: 15
					},
					{
						talla: "43",
						stock: 20
					},
					{
						talla: "45",
						stock: 10
					}
				]
			},
			{
				color: {
					codHexadecimal: "#FFFFFF",
					nombreColor: "blanco"
				},
				talles: [
					{
						talla: "39",
						stock: 15
					},
					{
						talla: "41",
						stock: 10
					},
					{
						talla: "43",
						stock: 15
					},
					{
						talla: "45",
						stock: 20
					}
				]
			}
		]
	},
	{
		id: 13,
		nombre: "Borcegos clásicos",
		marca: "batistella",
		descripcion: "algo hay que poner",
		precio: 30.6,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "adulto",
		genero: "masculino",
		subcategoria: "calsado",
		imagen: [
			"https://calzadosbatistella.com.ar/shop/83106-superlarge_default/borcegos-clasicos-de-cuero-en-habano.jpg",
			"https://calzadosbatistella.com.ar/shop/83107-superlarge_default/borcegos-clasicos-de-cuero-en-habano.jpg",
			"https://calzadosbatistella.com.ar/shop/83108-superlarge_default/borcegos-clasicos-de-cuero-en-habano.jpg"
		],
		tallas: ["39", "41", "43", "45"],
		colores: ["marron"],
		opcion: [
			{
				color: {
					codHexadecimal: "#8B4513",
					nombreColor: "marron"
				},
				talles: [
					{
						talla: "39",
						stock: 10
					},
					{
						talla: "41",
						stock: 15
					},
					{
						talla: "43",
						stock: 20
					},
					{
						talla: "45",
						stock: 10
					}
				]
			}
		]
	},
	{
		id: 14,
		nombre: "Borcegos de cuero en habano",
		marca: "batistella",
		descripcion: "algo hay que poner",
		precio: 10.4,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "adulto",
		genero: "masculino",
		subcategoria: "calsado",
		imagen: [
			"https://calzadosbatistella.com.ar/shop/88875-superlarge_default/borcegos-clasicos-de-cuero-en-habano.jpg",
			"https://calzadosbatistella.com.ar/shop/88870-superlarge_default/borcegos-clasicos-de-cuero-en-habano.jpg",
			"https://calzadosbatistella.com.ar/shop/88871-superlarge_default/borcegos-clasicos-de-cuero-en-habano.jpg"
		],
		tallas: ["39", "41", "43", "45"],
		colores: ["habano"],
		opcion: [
			{
				color: {
					codHexadecimal: "#987654",
					nombreColor: "habano"
				},
				talles: [
					{
						talla: "39",
						stock: 10
					},
					{
						talla: "41",
						stock: 15
					},
					{
						talla: "43",
						stock: 20
					},
					{
						talla: "45",
						stock: 10
					}
				]
			}
		]
	},
	{
		id: 15,
		nombre: "Franciscanas de cuero negro",
		marca: "batistella",
		descripcion: "algo hay que poner",
		precio: 27.4,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "adulto",
		genero: "masculino",
		subcategoria: "calsado",
		imagen: [
			"https://calzadosbatistella.com.ar/shop/80952-superlarge_default/sandalias-de-cuero-para-hombre.jpg",
			"https://calzadosbatistella.com.ar/shop/80954-superlarge_default/sandalias-de-cuero-para-hombre.jpg",
			"https://calzadosbatistella.com.ar/shop/80955-superlarge_default/sandalias-de-cuero-para-hombre.jpg"
		],
		tallas: ["39", "41", "43", "45"],
		colores: ["negro"],
		opcion: [
			{
				color: {
					codHexadecimal: "#000000",
					nombreColor: "negro"
				},
				talles: [
					{
						talla: "39",
						stock: 10
					},
					{
						talla: "41",
						stock: 15
					},
					{
						talla: "43",
						stock: 20
					},
					{
						talla: "45",
						stock: 10
					}
				]
			}
		]
	},
	{
		id: 16,
		nombre: "Zapatillas urbanas",
		marca: "batistella",
		descripcion: "algo hay que poner",
		precio: 10.44,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "adulto",
		genero: "masculino",
		subcategoria: "calsado",
		imagen: [
			"https://calzadosbatistella.com.ar/shop/94628-superlarge_default/zapatillas-urbanas-de-cuero-en-blanco-combinado.jpg",
			"https://calzadosbatistella.com.ar/shop/94624-superlarge_default/zapatillas-urbanas-de-cuero-en-blanco-combinado.jpg",
			"https://calzadosbatistella.com.ar/shop/94626-superlarge_default/zapatillas-urbanas-de-cuero-en-blanco-combinado.jpg"
		],
		tallas: ["39", "41", "43", "45"],
		colores: ["blanco"],
		opcion: [
			{
				color: {
					codHexadecimal: "#FFFFFF",
					nombreColor: "blanco"
				},
				talles: [
					{
						talla: "39",
						stock: 10
					},
					{
						talla: "41",
						stock: 15
					},
					{
						talla: "43",
						stock: 20
					},
					{
						talla: "45",
						stock: 10
					}
				]
			}
		]
	},
	{
		id: 17,
		nombre: "remera steps",
		marca: "taverniti",
		descripcion: "algo hay que poner",
		precio: 10.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: true,
		categoria: "adulto",
		genero: "femenino",
		subcategoria: "prendaSuperior",
		imagen: [
			"https://taverniti.vtexassets.com/arquivos/ids/283174-1200-1440?v=638429231594330000&width=1200&height=1440&aspect=true",
			"https://taverniti.vtexassets.com/arquivos/ids/283170-1200-1440?v=638429230288800000&width=1200&height=1440&aspect=true",
			"https://taverniti.vtexassets.com/arquivos/ids/283172-1200-1440?v=638429230540270000&width=1200&height=1440&aspect=true"
		],
		tallas: ["S", "M", "L", "XL"],
		colores: ["negro", "blanco"],
		opcion: [
			{
				color: {
					codHexadecimal: "#000000",
					nombreColor: "negro"
				},
				talles: [
					{
						talla: "S",
						stock: 10
					},
					{
						talla: "M",
						stock: 15
					},
					{
						talla: "L",
						stock: 20
					},
					{
						talla: "XL",
						stock: 10
					}
				]
			},
			{
				color: {
					codHexadecimal: "#FFFFFF",
					nombreColor: "blanco"
				},
				talles: [
					{
						talla: "S",
						stock: 15
					},
					{
						talla: "M",
						stock: 20
					},
					{
						talla: "L",
						stock: 15
					},
					{
						talla: "XL",
						stock: 10
					}
				]
			}
		]
	},
	{
		id: 18,
		nombre: "Remera kori",
		marca: "taverniti",
		descripcion: "algo hay que poner",
		precio: 15.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: true,
		categoria: "adulto",
		genero: "femenino",
		subcategoria: "prendaSuperior",
		imagen: [
			"https://taverniti.vtexassets.com/arquivos/ids/281952-1200-1440?v=638388477253230000&width=1200&height=1440&aspect=true",
			"https://taverniti.vtexassets.com/arquivos/ids/281989-1200-1440?v=638388477767600000&width=1200&height=1440&aspect=true",
			"https://taverniti.vtexassets.com/arquivos/ids/282026-1200-1440?v=638388478310100000&width=1200&height=1440&aspect=true"
		],
		tallas: ["S", "M", "L", "XL"],
		colores: ["negro", "blanco"],
		opcion: [
			{
				color: {
					codHexadecimal: "#000000",
					nombreColor: "negro"
				},
				talles: [
					{
						talla: "S",
						stock: 10
					},
					{
						talla: "M",
						stock: 15
					},
					{
						talla: "L",
						stock: 20
					},
					{
						talla: "XL",
						stock: 10
					}
				]
			},
			{
				color: {
					codHexadecimal: "#FFFFFF",
					nombreColor: "blanco"
				},
				talles: [
					{
						talla: "S",
						stock: 15
					},
					{
						talla: "M",
						stock: 20
					},
					{
						talla: "L",
						stock: 15
					},
					{
						talla: "XL",
						stock: 10
					}
				]
			}
		]
	},
	{
		id: 19,
		nombre: "camisa lissa",
		marca: "taverniti",
		descripcion: "algo hay que poner",
		precio: 20.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "adulto",
		genero: "femenino",
		subcategoria: "prendaSuperior",
		imagen: [
			"https://taverniti.vtexassets.com/arquivos/ids/279625-1200-1440?v=638343707657400000&width=1200&height=1440&aspect=true",
			"https://taverniti.vtexassets.com/arquivos/ids/279626-1200-1440?v=638343707791100000&width=1200&height=1440&aspect=true",
			"https://taverniti.vtexassets.com/arquivos/ids/279628-1200-1440?v=638343708267800000&width=1200&height=1440&aspect=true"
		],
		tallas: ["S", "M", "L", "XL"],
		colores: ["negro", "blanco"],
		opcion: [
			{
				color: {
					codHexadecimal: "#000000",
					nombreColor: "negro"
				},
				talles: [
					{
						talla: "S",
						stock: 8
					},
					{
						talla: "M",
						stock: 12
					},
					{
						talla: "L",
						stock: 16
					},
					{
						talla: "XL",
						stock: 9
					}
				]
			},
			{
				color: {
					codHexadecimal: "#FFFFFF",
					nombreColor: "blanco"
				},
				talles: [
					{
						talla: "S",
						stock: 10
					},
					{
						talla: "M",
						stock: 14
					},
					{
						talla: "L",
						stock: 18
					},
					{
						talla: "XL",
						stock: 11
					}
				]
			}
		]
	},
	{
		id: 20,
		nombre: "campera palmas",
		marca: "taverniti",
		descripcion: "algo hay que poner",
		precio: 25.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "adulto",
		genero: "femenino",
		subcategoria: "prendaSuperior",
		imagen: [
			"https://taverniti.vtexassets.com/arquivos/ids/274616-1200-1440?v=638297098426700000&width=1200&height=1440&aspect=true",
			"https://taverniti.vtexassets.com/arquivos/ids/281231-1200-1440?v=638368671019970000&width=1200&height=1440&aspect=true",
			"https://taverniti.vtexassets.com/arquivos/ids/281234-1200-1440?v=638368680248400000&width=1200&height=1440&aspect=true"
		],
		tallas: ["S", "M", "L", "XL"],
		colores: ["rojo", "amarillo", "verde"],
		opcion: [
			{
				color: {
					codHexadecimal: "#FF0000",
					nombreColor: "rojo"
				},
				talles: [
					{
						talla: "S",
						stock: 10
					},
					{
						talla: "M",
						stock: 15
					},
					{
						talla: "L",
						stock: 20
					},
					{
						talla: "XL",
						stock: 10
					}
				]
			},
			{
				color: {
					codHexadecimal: "#FFFF00",
					nombreColor: "amarillo"
				},
				talles: [
					{
						talla: "S",
						stock: 12
					},
					{
						talla: "M",
						stock: 17
					},
					{
						talla: "L",
						stock: 22
					},
					{
						talla: "XL",
						stock: 12
					}
				]
			},
			{
				color: {
					codHexadecimal: "#008000",
					nombreColor: "verde"
				},
				talles: [
					{
						talla: "S",
						stock: 14
					},
					{
						talla: "M",
						stock: 19
					},
					{
						talla: "L",
						stock: 24
					},
					{
						talla: "XL",
						stock: 14
					}
				]
			}
		]
	},
	{
		id: 21,
		nombre: "campera ambre",
		marca: "taverniti",
		descripcion: "algo hay que poner",
		precio: 30.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "adulto",
		genero: "femenino",
		subcategoria: "prendaSuperior",
		imagen: [
			"https://taverniti.vtexassets.com/arquivos/ids/280452-1200-1440?v=638356749977970000&width=1200&height=1440&aspect=true",
			"https://taverniti.vtexassets.com/arquivos/ids/280625-1200-1440?v=638356750547600000&width=1200&height=1440&aspect=true",
			"https://taverniti.vtexassets.com/arquivos/ids/280840-1200-1440?v=638356751707570000&width=1200&height=1440&aspect=true"
		],
		tallas: ["S", "M", "L", "XL"],
		colores: ["blanco"],
		opcion: [
			{
				color: {
					codHexadecimal: "#FFFFFF",
					nombreColor: "blanco"
				},
				talles: [
					{
						talla: "S",
						stock: 10
					},
					{
						talla: "M",
						stock: 15
					},
					{
						talla: "L",
						stock: 20
					},
					{
						talla: "XL",
						stock: 10
					}
				]
			}
		]
	},
	{
		id: 22,
		nombre: "pantalón kenia",
		marca: "taverniti",
		descripcion: "algo hay que poner",
		precio: 10.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "adulto",
		genero: "femenino",
		subcategoria: "prendaInferior",
		imagen: [
			"https://taverniti.vtexassets.com/arquivos/ids/249518-1200-1440?v=637971115599930000&width=1200&height=1440&aspect=true",
			"https://taverniti.vtexassets.com/arquivos/ids/281472-1200-1440?v=638370292502300000&width=1200&height=1440&aspect=true",
			"https://taverniti.vtexassets.com/arquivos/ids/283162-1200-1440?v=638429225674200000&width=1200&height=1440&aspect=true"
		],
		tallas: ["004", "010", "014", "020"],
		colores: ["negro", "blanco", "azul"],
		opcion: [
			{
				color: {
					codHexadecimal: "#000000",
					nombreColor: "negro"
				},
				talles: [
					{
						talla: "004",
						stock: 10
					},
					{
						talla: "010",
						stock: 15
					},
					{
						talla: "014",
						stock: 20
					},
					{
						talla: "020",
						stock: 10
					}
				]
			},
			{
				color: {
					codHexadecimal: "#FFFFFF",
					nombreColor: "blanco"
				},
				talles: [
					{
						talla: "004",
						stock: 12
					},
					{
						talla: "010",
						stock: 17
					},
					{
						talla: "014",
						stock: 22
					},
					{
						talla: "020",
						stock: 12
					}
				]
			},
			{
				color: {
					codHexadecimal: "#0000FF",
					nombreColor: "azul"
				},
				talles: [
					{
						talla: "004",
						stock: 14
					},
					{
						talla: "010",
						stock: 19
					},
					{
						talla: "014",
						stock: 24
					},
					{
						talla: "020",
						stock: 14
					}
				]
			}
		]
	},
	{
		id: 23,
		nombre: "pantalón jagger",
		marca: "taverniti",
		descripcion: "algo hay que poner",
		precio: 15.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "adulto",
		genero: "femenino",
		subcategoria: "prendaInferior",
		imagen: [
			"https://taverniti.vtexassets.com/arquivos/ids/282450-1200-1440?v=638417825131430000&width=1200&height=1440&aspect=true",
			"https://taverniti.vtexassets.com/arquivos/ids/282452-1200-1440?v=638417828304030000&width=1200&height=1440&aspect=true",
			"https://taverniti.vtexassets.com/arquivos/ids/282453-1200-1440?v=638417828744370000&width=1200&height=1440&aspect=true"
		],
		tallas: ["004", "010", "014", "020"],
		colores: ["cobre"],
		opcion: [
			{
				color: {
					codHexadecimal: "#B87333",
					nombreColor: "cobre"
				},
				talles: [
					{
						talla: "004",
						stock: 10
					},
					{
						talla: "010",
						stock: 15
					},
					{
						talla: "014",
						stock: 20
					},
					{
						talla: "020",
						stock: 10
					}
				]
			}
		]
	},
	{
		id: 24,
		nombre: "pantalón kirvi",
		marca: "taverniti",
		descripcion: "algo hay que poner",
		precio: 20.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "adulto",
		genero: "femenino",
		subcategoria: "prendaInferior",
		imagen: [
			"https://taverniti.vtexassets.com/arquivos/ids/259677-1200-1440?v=638138786681900000&width=1200&height=1440&aspect=true",
			"https://taverniti.vtexassets.com/arquivos/ids/261880-1200-1440?v=638170116071070000&width=1200&height=1440&aspect=true",
			"https://taverniti.vtexassets.com/arquivos/ids/262110-1200-1440?v=638170118889200000&width=1200&height=1440&aspect=true"
		],
		tallas: ["004", "010", "014", "020"],
		colores: ["negro", "mate"],
		opcion: [
			{
				color: {
					codHexadecimal: "#000000",
					nombreColor: "negro"
				},
				talles: [
					{
						talla: "004",
						stock: 10
					},
					{
						talla: "010",
						stock: 15
					},
					{
						talla: "014",
						stock: 20
					},
					{
						talla: "020",
						stock: 10
					}
				]
			},
			{
				color: {
					codHexadecimal: "#A9A9A9",
					nombreColor: "mate"
				},
				talles: [
					{
						talla: "004",
						stock: 12
					},
					{
						talla: "010",
						stock: 17
					},
					{
						talla: "014",
						stock: 22
					},
					{
						talla: "020",
						stock: 12
					}
				]
			}
		]
	},
	{
		id: 25,
		nombre: "jean supremo",
		marca: "taverniti",
		descripcion: "algo hay que poner",
		precio: 23.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "adulto",
		genero: "femenino",
		subcategoria: "prendaInferior",
		imagen: [
			"https://taverniti.vtexassets.com/arquivos/ids/282785-1200-1440?v=638424999544830000&width=1200&height=1440&aspect=true",
			"https://taverniti.vtexassets.com/arquivos/ids/282874-1200-1440?v=638425000735330000&width=1200&height=1440&aspect=true",
			"https://taverniti.vtexassets.com/arquivos/ids/249961-1200-1440?v=637974815159030000&width=1200&height=1440&aspect=true",
			"https://taverniti.vtexassets.com/arquivos/ids/243731-1200-1440?v=637938512290300000&width=1200&height=1440&aspect=true"
		],
		tallas: ["004", "010", "014", "020"],
		colores: ["negro", "gris", "azul"],
		opcion: [
			{
				color: {
					codHexadecimal: "#000000",
					nombreColor: "negro"
				},
				talles: [
					{
						talla: "004",
						stock: 10
					},
					{
						talla: "010",
						stock: 15
					},
					{
						talla: "014",
						stock: 20
					},
					{
						talla: "020",
						stock: 10
					}
				]
			},
			{
				color: {
					codHexadecimal: "#808080",
					nombreColor: "gris"
				},
				talles: [
					{
						talla: "004",
						stock: 12
					},
					{
						talla: "010",
						stock: 17
					},
					{
						talla: "014",
						stock: 22
					},
					{
						talla: "020",
						stock: 12
					}
				]
			},
			{
				color: {
					codHexadecimal: "#0000FF",
					nombreColor: "azul"
				},
				talles: [
					{
						talla: "004",
						stock: 14
					},
					{
						talla: "010",
						stock: 19
					},
					{
						talla: "014",
						stock: 24
					},
					{
						talla: "020",
						stock: 14
					}
				]
			}
		]
	},
	{
		id: 26,
		nombre: "jean reason",
		marca: "taverniti",
		descripcion: "algo hay que poner",
		precio: 30.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "adulto",
		genero: "femenino",
		subcategoria: "prendaInferior",
		imagen: [
			"https://taverniti.vtexassets.com/arquivos/ids/270730-1200-1440?v=638249436245500000&width=1200&height=1440&aspect=true",
			"https://taverniti.vtexassets.com/arquivos/ids/270928-1200-1440?v=638249437980570000&width=1200&height=1440&aspect=true",
			"https://taverniti.vtexassets.com/arquivos/ids/266144-1200-1440?v=638211598525630000&width=1200&height=1440&aspect=true",
			"https://taverniti.vtexassets.com/arquivos/ids/279143-1200-1440?v=638337568949770000&width=1200&height=1440&aspect=true",
			"https://taverniti.vtexassets.com/arquivos/ids/279178-1200-1440?v=638337569492570000&width=1200&height=1440&aspect=true"
		],
		tallas: ["004", "010", "014", "020"],
		colores: ["negro", "blanco", "azul"],
		opcion: [
			{
				color: {
					codHexadecimal: "#000000",
					nombreColor: "negro"
				},
				talles: [
					{
						talla: "004",
						stock: 10
					},
					{
						talla: "010",
						stock: 15
					},
					{
						talla: "014",
						stock: 20
					},
					{
						talla: "020",
						stock: 10
					}
				]
			},
			{
				color: {
					codHexadecimal: "#FFFFFF",
					nombreColor: "blanco"
				},
				talles: [
					{
						talla: "004",
						stock: 12
					},
					{
						talla: "010",
						stock: 17
					},
					{
						talla: "014",
						stock: 22
					},
					{
						talla: "020",
						stock: 12
					}
				]
			},
			{
				color: {
					codHexadecimal: "#0000FF",
					nombreColor: "azul"
				},
				talles: [
					{
						talla: "004",
						stock: 14
					},
					{
						talla: "010",
						stock: 19
					},
					{
						talla: "014",
						stock: 24
					},
					{
						talla: "020",
						stock: 14
					}
				]
			}
		]
	},
	{
		id: 27,
		nombre: "zuecos BATI",
		marca: "batistella",
		descripcion: "algo hay que poner",
		precio: 20.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "adulto",
		genero: "femenino",
		subcategoria: "calsado",
		imagen: [
			"https://calzadosbatistella.com.ar/shop/96833-superlarge_default/zuecos-bati-de-goma-en-ambar.jpg",
			"https://calzadosbatistella.com.ar/shop/96585-superlarge_default/zuecos-bati-de-goma-en-ambar.jpg",
			"https://calzadosbatistella.com.ar/shop/96583-superlarge_default/zuecos-bati-de-goma-en-ambar.jpg"
		],
		tallas: ["37-38", "39-40", "41-42", "43-44"],
		colores: ["marron", "blanco"],
		opcion: [
			{
				color: {
					codHexadecimal: "#8B4513",
					nombreColor: "marron"
				},
				talles: [
					{
						talla: "37-38",
						stock: 10
					},
					{
						talla: "39-40",
						stock: 15
					},
					{
						talla: "41-42",
						stock: 20
					},
					{
						talla: "43-44",
						stock: 10
					}
				]
			},
			{
				color: {
					codHexadecimal: "#FFFFFF",
					nombreColor: "blanco"
				},
				talles: [
					{
						talla: "37-38",
						stock: 12
					},
					{
						talla: "39-40",
						stock: 17
					},
					{
						talla: "41-42",
						stock: 22
					},
					{
						talla: "43-44",
						stock: 12
					}
				]
			}
		]
	},
	{
		id: 28,
		nombre: "zuecos de cuero",
		marca: "batistella",
		descripcion: "algo hay que poner",
		precio: 25.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "adulto",
		genero: "femenino",
		subcategoria: "calsado",
		imagen: [
			"https://calzadosbatistella.com.ar/shop/86579-superlarge_default/zuecos-de-cuero-reptil-en-negro.jpg",
			"https://calzadosbatistella.com.ar/shop/86580-superlarge_default/zuecos-de-cuero-reptil-en-negro.jpg",
			"https://calzadosbatistella.com.ar/shop/86582-superlarge_default/zuecos-de-cuero-reptil-en-negro.jpg"
		],
		tallas: ["37-38", "39-40", "41-42", "43-44"],
		colores: ["negro", "cobre"],
		opcion: [
			{
				color: {
					codHexadecimal: "#000000",
					nombreColor: "negro"
				},
				talles: [
					{
						talla: "37-38",
						stock: 10
					},
					{
						talla: "39-40",
						stock: 15
					},
					{
						talla: "41-42",
						stock: 20
					},
					{
						talla: "43-44",
						stock: 10
					}
				]
			},
			{
				color: {
					codHexadecimal: "#B87333",
					nombreColor: "cobre"
				},
				talles: [
					{
						talla: "37-38",
						stock: 12
					},
					{
						talla: "39-40",
						stock: 17
					},
					{
						talla: "41-42",
						stock: 22
					},
					{
						talla: "43-44",
						stock: 12
					}
				]
			}
		]
	},
	{
		id: 29,
		nombre: "sandalias bajas",
		marca: "batistella",
		descripcion: "algo hay que poner",
		precio: 30.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "adulto",
		genero: "femenino",
		subcategoria: "calsado",
		imagen: [
			"https://calzadosbatistella.com.ar/shop/95515-superlarge_default/sandalias-bajas-de-cuero-metalizado-natural.jpg",
			"https://calzadosbatistella.com.ar/shop/95513-superlarge_default/sandalias-bajas-de-cuero-metalizado-natural.jpg",
			"https://calzadosbatistella.com.ar/shop/95514-superlarge_default/sandalias-bajas-de-cuero-metalizado-natural.jpg"
		],
		tallas: ["37-38", "39-40", "41-42", "43-44"],
		colores: ["negro", "blanco"],
		opcion: [
			{
				color: {
					codHexadecimal: "#000000",
					nombreColor: "negro"
				},
				talles: [
					{
						talla: "37-38",
						stock: 10
					},
					{
						talla: "39-40",
						stock: 15
					},
					{
						talla: "41-42",
						stock: 20
					},
					{
						talla: "43-44",
						stock: 10
					}
				]
			},
			{
				color: {
					codHexadecimal: "#FFFFFF",
					nombreColor: "blanco"
				},
				talles: [
					{
						talla: "37-38",
						stock: 12
					},
					{
						talla: "39-40",
						stock: 17
					},
					{
						talla: "41-42",
						stock: 22
					},
					{
						talla: "43-44",
						stock: 12
					}
				]
			}
		]
	},
	{
		id: 30,
		nombre: "botas cortas bajas de cuero",
		marca: "batistella",
		descripcion: "algo hay que poner",
		precio: 35.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "adulto",
		genero: "femenino",
		subcategoria: "calsado",
		imagen: [
			"https://calzadosbatistella.com.ar/shop/82966-superlarge_default/botas-cortas-bajas-de-cuero-en-suela-con-cierres.jpg",
			"https://calzadosbatistella.com.ar/shop/82968-superlarge_default/botas-cortas-bajas-de-cuero-en-suela-con-cierres.jpg",
			"https://calzadosbatistella.com.ar/shop/82969-superlarge_default/botas-cortas-bajas-de-cuero-en-suela-con-cierres.jpg"
		],
		tallas: ["37-38", "39-40", "41-42", "43-44"],
		colores: ["cuero"],
		opcion: [
			{
				color: {
					codHexadecimal: "#8B4513",
					nombreColor: "cuero"
				},
				talles: [
					{
						talla: "37-38",
						stock: 10
					},
					{
						talla: "39-40",
						stock: 15
					},
					{
						talla: "41-42",
						stock: 20
					},
					{
						talla: "43-44",
						stock: 10
					}
				]
			}
		]
	},
	{
		id: 31,
		nombre: "botas cortas abuchonadas",
		marca: "batistella",
		descripcion: "algo hay que poner",
		precio: 55.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "adulto",
		genero: "femenino",
		subcategoria: "calsado",
		imagen: [
			"https://calzadosbatistella.com.ar/shop/89459-superlarge_default/botas-cortas-abuchonadas-de-cuero-suela.jpg",
			"https://calzadosbatistella.com.ar/shop/89455-superlarge_default/botas-cortas-abuchonadas-de-cuero-suela.jpg",
			"https://calzadosbatistella.com.ar/shop/89456-superlarge_default/botas-cortas-abuchonadas-de-cuero-suela.jpg"
		],
		tallas: ["37-38", "39-40", "41-42", "43-44"],
		colores: ["cuero"],
		opcion: [
			{
				color: {
					codHexadecimal: "#8B4513",
					nombreColor: "cuero"
				},
				talles: [
					{
						talla: "37-38",
						stock: 10
					},
					{
						talla: "39-40",
						stock: 15
					},
					{
						talla: "41-42",
						stock: 20
					},
					{
						talla: "43-44",
						stock: 10
					}
				]
			}
		]
	},
	{
		id: 32,
		nombre: "218 POLERA LISA",
		marca: "mambo",
		descripcion: "algo hay que poner",
		precio: 10.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: true,
		categoria: "niño",
		genero: "masculino",
		subcategoria: "prendaSuperior",
		imagen: [
			"https://acdn.mitiendanube.com/stores/243/508/products/218g1-2d82f0bf7d13df366216147916392564-480-0.webp",
			"https://acdn.mitiendanube.com/stores/243/508/products/218-a961400747eb282c8b17053290371188-480-0.webp",
			"https://acdn.mitiendanube.com/stores/243/508/products/218-ro-d84b9fd6374fc3d58717053290327761-480-0.webp"
		],
		tallas: ["4", "6", "8", "10"],
		colores: ["negro", "blanco", "rojo"],
		opcion: [
			{
				color: {
					codHexadecimal: "#000000",
					nombreColor: "negro"
				},
				talles: [
					{
						talla: "4",
						stock: 10
					},
					{
						talla: "6",
						stock: 15
					},
					{
						talla: "8",
						stock: 20
					},
					{
						talla: "10",
						stock: 10
					}
				]
			},
			{
				color: {
					codHexadecimal: "#FFFFFF",
					nombreColor: "blanco"
				},
				talles: [
					{
						talla: "4",
						stock: 12
					},
					{
						talla: "6",
						stock: 17
					},
					{
						talla: "8",
						stock: 22
					},
					{
						talla: "10",
						stock: 12
					}
				]
			},
			{
				color: {
					codHexadecimal: "#FF0000",
					nombreColor: "rojo"
				},
				talles: [
					{
						talla: "4",
						stock: 14
					},
					{
						talla: "6",
						stock: 19
					},
					{
						talla: "8",
						stock: 24
					},
					{
						talla: "10",
						stock: 14
					}
				]
			}
		]
	},
	{
		id: 33,
		nombre: "7818",
		marca: "mambo",
		descripcion: "algo hay que poner",
		precio: 15.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: true,
		categoria: "niño",
		genero: "masculino",
		subcategoria: "prendaSuperior",
		imagen: [
			"https://acdn.mitiendanube.com/stores/243/508/products/whatsapp-image-2023-08-16-at-10-40-31-11-e4f78019ab4cd624b816935030167484-480-0.webp"
		],
		tallas: ["4", "6", "8", "10"],
		colores: ["cemento"],
		opcion: [
			{
				color: {
					codHexadecimal: "#8C8C8C",
					nombreColor: "cemento"
				},
				talles: [
					{
						talla: "4",
						stock: 10
					},
					{
						talla: "6",
						stock: 15
					},
					{
						talla: "8",
						stock: 20
					},
					{
						talla: "10",
						stock: 10
					}
				]
			}
		]
	},
	{
		id: 34,
		nombre: "1807 BUZO NIÑO BORN CON CAPUCHA",
		marca: "mambo",
		descripcion: "algo hay que poner",
		precio: 20.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "niño",
		genero: "masculino",
		subcategoria: "prendaSuperior",
		imagen: [
			"https://acdn.mitiendanube.com/stores/243/508/products/18071-8b60f3dc36e8dbf82916232576827365-480-0.webp",
			"https://acdn.mitiendanube.com/stores/243/508/products/1807v11-337d49aef98a03098116232576827457-480-0.webp"
		],
		tallas: ["4", "6", "8", "10"],
		colores: ["rojo"],
		opcion: [
			{
				color: {
					codHexadecimal: "#FF0000",
					nombreColor: "rojo"
				},
				talles: [
					{
						talla: "4",
						stock: 10
					},
					{
						talla: "6",
						stock: 15
					},
					{
						talla: "8",
						stock: 20
					},
					{
						talla: "10",
						stock: 10
					}
				]
			}
		]
	},
	{
		id: 35,
		nombre: "1815 BUZO CON CAPUCHA RUSTICO",
		marca: "mambo",
		descripcion: "algo hay que poner",
		precio: 22.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "niño",
		genero: "masculino",
		subcategoria: "prendaSuperior",
		imagen: [
			"https://acdn.mitiendanube.com/stores/243/508/products/whatsapp-image-2023-01-30-at-15-37-41-31-aa8bfdd97663d6dca416813195580205-480-0.webp",
			"https://acdn.mitiendanube.com/stores/243/508/products/whatsapp-image-2023-01-30-at-15-37-41-21-11be3ac70e96118daa16813195578503-480-0.webp"
		],
		tallas: ["4", "6", "8", "10"],
		colores: ["negro", "blanco"],
		opcion: [
			{
				color: {
					codHexadecimal: "#000000",
					nombreColor: "negro"
				},
				talles: [
					{
						talla: "4",
						stock: 10
					},
					{
						talla: "6",
						stock: 15
					},
					{
						talla: "8",
						stock: 20
					},
					{
						talla: "10",
						stock: 10
					}
				]
			},
			{
				color: {
					codHexadecimal: "#FFFFFF",
					nombreColor: "blanco"
				},
				talles: [
					{
						talla: "4",
						stock: 12
					},
					{
						talla: "6",
						stock: 17
					},
					{
						talla: "8",
						stock: 22
					},
					{
						talla: "10",
						stock: 12
					}
				]
			}
		]
	},
	{
		id: 36,
		nombre: "3775 CAMPERA RUSHER COMBINADA",
		marca: "mambo",
		descripcion: "algo hay que poner",
		precio: 25.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "niño",
		genero: "masculino",
		subcategoria: "prendaSuperior",
		imagen: [
			"https://acdn.mitiendanube.com/stores/243/508/products/3775-g1-67c4c6e4e07e96785616830348395892-480-0.webp",
			"https://acdn.mitiendanube.com/stores/243/508/products/3775-nh1-4d132eb36d4e82b89916830348398449-480-0.webp",
			"https://acdn.mitiendanube.com/stores/243/508/products/3775-b1-375a0e981c2dfd06b616830348396974-480-0.webp"
		],
		tallas: ["4", "6", "8", "10"],
		colores: ["negro", "blanco"],
		opcion: [
			{
				color: {
					codHexadecimal: "#000000",
					nombreColor: "negro"
				},
				talles: [
					{
						talla: "4",
						stock: 10
					},
					{
						talla: "6",
						stock: 15
					},
					{
						talla: "8",
						stock: 20
					},
					{
						talla: "10",
						stock: 10
					}
				]
			},
			{
				color: {
					codHexadecimal: "#FFFFFF",
					nombreColor: "blanco"
				},
				talles: [
					{
						talla: "4",
						stock: 12
					},
					{
						talla: "6",
						stock: 17
					},
					{
						talla: "8",
						stock: 22
					},
					{
						talla: "10",
						stock: 12
					}
				]
			}
		]
	},
	{
		id: 37,
		nombre: "7761 PANTALON JEAN",
		marca: "mambo",
		descripcion: "algo hay que poner",
		precio: 5.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "niño",
		genero: "masculino",
		subcategoria: "prendaInferior",
		imagen: [
			"https://acdn.mitiendanube.com/stores/243/508/products/7761n1-0f2d134fea52cd43c616609224376174-480-0.webp"
		],
		tallas: ["4", "6", "8"],
		colores: ["negro", "azul"],
		opcion: [
			{
				color: {
					codHexadecimal: "#000000",
					nombreColor: "negro"
				},
				talles: [
					{
						talla: "4",
						stock: 10
					},
					{
						talla: "6",
						stock: 15
					},
					{
						talla: "8",
						stock: 20
					}
				]
			},
			{
				color: {
					codHexadecimal: "#0000FF",
					nombreColor: "azul"
				},
				talles: [
					{
						talla: "4",
						stock: 12
					},
					{
						talla: "6",
						stock: 17
					},
					{
						talla: "8",
						stock: 22
					}
				]
			}
		]
	},
	{
		id: 38,
		nombre: "4795 PANTALÓN DEPORTIVO FRIZADO",
		marca: "mambo",
		descripcion: "algo hay que poner",
		precio: 8.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "niño",
		genero: "masculino",
		subcategoria: "prendaInferior",
		imagen: [
			"https://acdn.mitiendanube.com/stores/243/508/products/4795-azul-17b23127fd2e0b55e017050754381556-480-0.webp",
			"https://acdn.mitiendanube.com/stores/243/508/products/4795-negro-21e02dbbb96ce309e617047339066322-480-0.webp"
		],
		tallas: ["4", "6", "8"],
		colores: ["negro", "azul"],
		opcion: [
			{
				color: {
					codHexadecimal: "#000000",
					nombreColor: "negro"
				},
				talles: [
					{
						talla: "4",
						stock: 10
					},
					{
						talla: "6",
						stock: 15
					},
					{
						talla: "8",
						stock: 20
					}
				]
			},
			{
				color: {
					codHexadecimal: "#0000FF",
					nombreColor: "azul"
				},
				talles: [
					{
						talla: "4",
						stock: 12
					},
					{
						talla: "6",
						stock: 17
					},
					{
						talla: "8",
						stock: 22
					}
				]
			}
		]
	},
	{
		id: 39,
		nombre: "7765 PANTALON RUSTICO ESTAMPADO",
		marca: "mambo",
		descripcion: "algo hay que poner",
		precio: 10.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "niño",
		genero: "masculino",
		subcategoria: "prendaInferior",
		imagen: [
			"https://acdn.mitiendanube.com/stores/243/508/products/77651-900cf7f77f0ee6811516542701926958-480-0.webp"
		],
		tallas: ["4", "6", "8"],
		colores: ["bordo", "azul marino"],
		opcion: [
			{
				color: {
					codHexadecimal: "#800000",
					nombreColor: "bordo"
				},
				talles: [
					{
						talla: "4",
						stock: 10
					},
					{
						talla: "6",
						stock: 15
					},
					{
						talla: "8",
						stock: 20
					}
				]
			},
			{
				color: {
					codHexadecimal: "#000080",
					nombreColor: "azul marino"
				},
				talles: [
					{
						talla: "4",
						stock: 12
					},
					{
						talla: "6",
						stock: 17
					},
					{
						talla: "8",
						stock: 22
					}
				]
			}
		]
	},
	{
		id: 40,
		nombre: "7768 JOGGING FRIZA CON PUÑO",
		marca: "mambo",
		descripcion: "algo hay que poner",
		precio: 11.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "niño",
		genero: "masculino",
		subcategoria: "prendaInferior",
		imagen: [
			"https://acdn.mitiendanube.com/stores/243/508/products/7768-11-d4deb0afc1628eb2ed16853667897115-480-0.webp"
		],
		tallas: ["4", "6", "8"],
		colores: ["negro", "francia"],
		opcion: [
			{
				color: {
					codHexadecimal: "#000000",
					nombreColor: "negro"
				},
				talles: [
					{
						talla: "4",
						stock: 10
					},
					{
						talla: "6",
						stock: 15
					},
					{
						talla: "8",
						stock: 20
					}
				]
			},
			{
				color: {
					codHexadecimal: "#007FFF",
					nombreColor: "francia"
				},
				talles: [
					{
						talla: "4",
						stock: 12
					},
					{
						talla: "6",
						stock: 17
					},
					{
						talla: "8",
						stock: 22
					}
				]
			}
		]
	},
	{
		id: 41,
		nombre: "7774",
		marca: "mambo",
		descripcion: "algo hay que poner",
		precio: 15.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "niño",
		genero: "masculino",
		subcategoria: "prendaInferior",
		imagen: [
			"https://acdn.mitiendanube.com/stores/243/508/products/whatsapp-image-2024-01-10-at-13-30-14-58cacf8cddf2b5ef0517050662179980-480-0.webp",
			"https://acdn.mitiendanube.com/stores/243/508/products/whatsapp-image-2024-01-10-at-13-29-33-5c947ff99aafb0364817050662192036-480-0.webp",
			"https://acdn.mitiendanube.com/stores/243/508/products/whatsapp-image-2024-01-10-at-13-28-32-03f9312e8440e4182817050662204120-480-0.webp"
		],
		tallas: ["4", "6", "8"],
		colores: ["negro", "blanco", "ocre"],
		opcion: [
			{
				color: {
					codHexadecimal: "#000000",
					nombreColor: "negro"
				},
				talles: [
					{
						talla: "4",
						stock: 10
					},
					{
						talla: "6",
						stock: 15
					},
					{
						talla: "8",
						stock: 20
					}
				]
			},
			{
				color: {
					codHexadecimal: "#FFFFFF",
					nombreColor: "blanco"
				},
				talles: [
					{
						talla: "4",
						stock: 12
					},
					{
						talla: "6",
						stock: 17
					},
					{
						talla: "8",
						stock: 22
					}
				]
			},
			{
				color: {
					codHexadecimal: "#CC7722",
					nombreColor: "ocre"
				},
				talles: [
					{
						talla: "4",
						stock: 14
					},
					{
						talla: "6",
						stock: 19
					},
					{
						talla: "8",
						stock: 24
					}
				]
			}
		]
	},
	{
		id: 42,
		nombre: "Zapatillas de símil en rojo",
		marca: "batistella",
		descripcion: "algo hay que poner",
		precio: 5.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "niño",
		genero: "masculino",
		subcategoria: "calsado",
		imagen: [
			"https://calzadosbatistella.com.ar/shop/75059-superlarge_default/zapatillas-de-simil-en-rojo.jpg",
			"https://calzadosbatistella.com.ar/shop/75060-superlarge_default/zapatillas-de-simil-en-rojo.jpg",
			"https://calzadosbatistella.com.ar/shop/75062-superlarge_default/zapatillas-de-simil-en-rojo.jpg"
		],
		tallas: ["18", "19", "21"],
		colores: ["rojo"],
		opcion: [
			{
				color: {
					codHexadecimal: "#FF0000",
					nombreColor: "rojo"
				},
				talles: [
					{
						talla: "18",
						stock: 10
					},
					{
						talla: "19",
						stock: 15
					},
					{
						talla: "21",
						stock: 20
					}
				]
			}
		]
	},
	{
		id: 43,
		nombre: "Zapatillas urbanas de símil en negro",
		marca: "batistella",
		descripcion: "algo hay que poner",
		precio: 7.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "niño",
		genero: "masculino",
		subcategoria: "calsado",
		imagen: [
			"https://calzadosbatistella.com.ar/shop/86191-superlarge_default/zapatillas-urbanas-de-simil-en-negro.jpg",
			"https://calzadosbatistella.com.ar/shop/86192-superlarge_default/zapatillas-urbanas-de-simil-en-negro.jpg",
			"https://calzadosbatistella.com.ar/shop/86194-superlarge_default/zapatillas-urbanas-de-simil-en-negro.jpg"
		],
		tallas: ["18", "19", "21"],
		colores: ["negro"],
		opcion: [
			{
				color: {
					codHexadecimal: "#000000",
					nombreColor: "negro"
				},
				talles: [
					{
						talla: "18",
						stock: 10
					},
					{
						talla: "19",
						stock: 15
					},
					{
						talla: "21",
						stock: 20
					}
				]
			}
		]
	},
	{
		id: 44,
		nombre: "Zapatillas urbanas de cuero en azul",
		marca: "batistella",
		descripcion: "algo hay que poner",
		precio: 10.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "niño",
		genero: "masculino",
		subcategoria: "calsado",
		imagen: [
			"https://calzadosbatistella.com.ar/shop/91457-superlarge_default/zapatillas-urbanas-de-cuero-en-azul.jpg",
			"https://calzadosbatistella.com.ar/shop/91455-superlarge_default/zapatillas-urbanas-de-cuero-en-azul.jpg",
			"https://calzadosbatistella.com.ar/shop/91458-superlarge_default/zapatillas-urbanas-de-cuero-en-azul.jpg"
		],
		tallas: ["18", "19", "21"],
		colores: ["azul"],
		opcion: [
			{
				color: {
					codHexadecimal: "#0000FF",
					nombreColor: "azul"
				},
				talles: [
					{
						talla: "18",
						stock: 10
					},
					{
						talla: "19",
						stock: 15
					},
					{
						talla: "21",
						stock: 20
					}
				]
			}
		]
	},
	{
		id: 45,
		nombre: "Zapatos combinados de cuero en negro",
		marca: "batistella",
		descripcion: "algo hay que poner",
		precio: 12.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "niño",
		genero: "masculino",
		subcategoria: "calsado",
		imagen: [
			"https://calzadosbatistella.com.ar/shop/89517-superlarge_default/zapatos-combinados-de-cuero-en-negro.jpg",
			"https://calzadosbatistella.com.ar/shop/89513-superlarge_default/zapatos-combinados-de-cuero-en-negro.jpg",
			"https://calzadosbatistella.com.ar/shop/89515-superlarge_default/zapatos-combinados-de-cuero-en-negro.jpg"
		],
		tallas: ["18", "19", "21"],
		colores: ["negro"],
		opcion: [
			{
				color: {
					codHexadecimal: "#000000",
					nombreColor: "negro"
				},
				talles: [
					{
						talla: "18",
						stock: 10
					},
					{
						talla: "19",
						stock: 15
					},
					{
						talla: "21",
						stock: 20
					}
				]
			}
		]
	},
	{
		id: 46,
		nombre: "Zapatos combinados de cuero en suela",
		marca: "batistella",
		descripcion: "algo hay que poner",
		precio: 20.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "niño",
		genero: "masculino",
		subcategoria: "calsado",
		imagen: [
			"https://calzadosbatistella.com.ar/shop/89040-superlarge_default/zapatos-combinados-de-cuero-en-suela.jpg",
			"https://calzadosbatistella.com.ar/shop/89044-superlarge_default/zapatos-combinados-de-cuero-en-suela.jpg",
			"https://calzadosbatistella.com.ar/shop/89042-superlarge_default/zapatos-combinados-de-cuero-en-suela.jpg"
		],
		tallas: ["18", "19", "21"],
		colores: ["cuero"],
		opcion: [
			{
				color: {
					codHexadecimal: "#8B4513",
					nombreColor: "cuero"
				},
				talles: [
					{
						talla: "18",
						stock: 10
					},
					{
						talla: "19",
						stock: 15
					},
					{
						talla: "21",
						stock: 20
					}
				]
			}
		]
	},
	{
		id: 47,
		nombre: "354",
		marca: "mambo",
		descripcion: "algo hay que poner",
		precio: 5.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: true,
		categoria: "niño",
		genero: "femenino",
		subcategoria: "prendaSuperior",
		imagen: [
			"https://acdn.mitiendanube.com/stores/243/508/products/whatsapp-image-2023-08-10-at-12-56-51-11-5a1abb549a137ca8f916935121903194-480-0.webp",
			"https://acdn.mitiendanube.com/stores/243/508/products/whatsapp-image-2023-08-10-at-12-57-53-11-ca3e0ed09bc35ec5b116935121901131-480-0.webp"
		],
		tallas: ["4", "6", "8", "10"],
		colores: ["verde", "rosa"],
		opcion: [
			{
				color: {
					codHexadecimal: "#008000",
					nombreColor: "verde"
				},
				talles: [
					{
						talla: "4",
						stock: 10
					},
					{
						talla: "6",
						stock: 15
					},
					{
						talla: "8",
						stock: 20
					},
					{
						talla: "10",
						stock: 10
					}
				]
			},
			{
				color: {
					codHexadecimal: "#FFC0CB",
					nombreColor: "rosa"
				},
				talles: [
					{
						talla: "4",
						stock: 12
					},
					{
						talla: "6",
						stock: 17
					},
					{
						talla: "8",
						stock: 22
					},
					{
						talla: "10",
						stock: 12
					}
				]
			}
		]
	},
	{
		id: 48,
		nombre: "8262",
		marca: "mambo",
		descripcion: "algo hay que poner",
		precio: 7.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: true,
		categoria: "niño",
		genero: "femenino",
		subcategoria: "prendaSuperior",
		imagen: [
			"https://acdn.mitiendanube.com/stores/243/508/products/8262b-37733b34db0815d76a17044668041999-480-0.webp",
			"https://acdn.mitiendanube.com/stores/243/508/products/8262-a64f9be1c908ec690e17044668055707-480-0.webp"
		],
		tallas: ["4", "6", "8", "10"],
		colores: ["negro", "blanco"],
		opcion: [
			{
				color: {
					codHexadecimal: "#000000",
					nombreColor: "negro"
				},
				talles: [
					{
						talla: "4",
						stock: 10
					},
					{
						talla: "6",
						stock: 15
					},
					{
						talla: "8",
						stock: 20
					},
					{
						talla: "10",
						stock: 10
					}
				]
			},
			{
				color: {
					codHexadecimal: "#FFFFFF",
					nombreColor: "blanco"
				},
				talles: [
					{
						talla: "4",
						stock: 12
					},
					{
						talla: "6",
						stock: 17
					},
					{
						talla: "8",
						stock: 22
					},
					{
						talla: "10",
						stock: 12
					}
				]
			}
		]
	},
	{
		id: 49,
		nombre: "6299",
		marca: "mambo",
		descripcion: "algo hay que poner",
		precio: 8.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "niño",
		genero: "femenino",
		subcategoria: "prendaSuperior",
		imagen: [
			"https://acdn.mitiendanube.com/stores/243/508/products/whatsapp-image-2024-01-10-at-14-50-00-854b2d1eb0f162416017050644888911-480-0.webp",
			"https://acdn.mitiendanube.com/stores/243/508/products/whatsapp-image-2024-01-10-at-14-51-57-c4490c704bc4b26b0817050644903500-480-0.webp"
		],
		tallas: ["4", "6", "8", "10"],
		colores: ["negro", "blanco"],
		opcion: [
			{
				color: {
					codHexadecimal: "#000000",
					nombreColor: "negro"
				},
				talles: [
					{
						talla: "4",
						stock: 10
					},
					{
						talla: "6",
						stock: 15
					},
					{
						talla: "8",
						stock: 20
					},
					{
						talla: "10",
						stock: 10
					}
				]
			},
			{
				color: {
					codHexadecimal: "#FFFFFF",
					nombreColor: "blanco"
				},
				talles: [
					{
						talla: "4",
						stock: 12
					},
					{
						talla: "6",
						stock: 17
					},
					{
						talla: "8",
						stock: 22
					},
					{
						talla: "10",
						stock: 12
					}
				]
			}
		]
	},
	{
		id: 50,
		nombre: "6265 BUZO NIÑA FRIZA TODAY",
		marca: "mambo",
		descripcion: "algo hay que poner",
		precio: 10.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "niño",
		genero: "femenino",
		subcategoria: "prendaSuperior",
		imagen: [
			"https://acdn.mitiendanube.com/stores/243/508/products/6265-3797d233dc8ea6300b17072414976300-640-0.webp"
		],
		tallas: ["4", "6", "8", "10"],
		colores: ["negro"],
		opcion: [
			{
				color: {
					codHexadecimal: "#000000",
					nombreColor: "negro"
				},
				talles: [
					{
						talla: "4",
						stock: 10
					},
					{
						talla: "6",
						stock: 15
					},
					{
						talla: "8",
						stock: 20
					},
					{
						talla: "10",
						stock: 10
					}
				]
			}
		]
	},
	{
		id: 51,
		nombre: "7330 CAMPERA FRIZA NIÑA LISA",
		marca: "mambo",
		descripcion: "algo hay que poner",
		precio: 11.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "niño",
		genero: "femenino",
		subcategoria: "prendaSuperior",
		imagen: [
			"https://acdn.mitiendanube.com/stores/243/508/products/7330-7e707007ca69bdf86316986883731513-480-0.webp",
			"https://acdn.mitiendanube.com/stores/243/508/products/7330g-e1d9ac255934c8b32516986883717745-480-0.webp"
		],
		tallas: ["4", "6", "8", "10"],
		colores: ["gris", "rosa"],
		opcion: [
			{
				color: {
					codHexadecimal: "#808080",
					nombreColor: "gris"
				},
				talles: [
					{
						talla: "4",
						stock: 10
					},
					{
						talla: "6",
						stock: 15
					},
					{
						talla: "8",
						stock: 20
					},
					{
						talla: "10",
						stock: 10
					}
				]
			},
			{
				color: {
					codHexadecimal: "#FFC0CB",
					nombreColor: "rosa"
				},
				talles: [
					{
						talla: "4",
						stock: 12
					},
					{
						talla: "6",
						stock: 17
					},
					{
						talla: "8",
						stock: 22
					},
					{
						talla: "10",
						stock: 12
					}
				]
			}
		]
	},
	{
		id: 52,
		nombre: "5396",
		marca: "mambo",
		descripcion: "algo hay que poner",
		precio: 5.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "niño",
		genero: "femenino",
		subcategoria: "prendaInferior",
		imagen: [
			"https://acdn.mitiendanube.com/stores/243/508/products/whatsapp-image-2023-08-17-at-16-36-28-11-3cc16f6ed1d6aff5f816934926762214-480-0.webp"
		],
		tallas: ["4", "6", "8"],
		colores: ["rosa"],
		opcion: [
			{
				color: {
					codHexadecimal: "#FFC0CB",
					nombreColor: "rosa"
				},
				talles: [
					{
						talla: "4",
						stock: 10
					},
					{
						talla: "6",
						stock: 15
					},
					{
						talla: "8",
						stock: 20
					}
				]
			}
		]
	},
	{
		id: 53,
		nombre: "7227 MINI JEAN DEGRADE",
		marca: "mambo",
		descripcion: "algo hay que poner",
		precio: 7.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "niño",
		genero: "femenino",
		subcategoria: "prendaInferior",
		imagen: [
			"https://acdn.mitiendanube.com/stores/243/508/products/whatsapp-image-2023-10-27-at-10-24-15-73cd476c2bf5bafa4316984142486757-480-0.webp"
		],
		tallas: ["4", "6", "8"],
		colores: ["azul"],
		opcion: [
			{
				color: {
					codHexadecimal: "#0000FF",
					nombreColor: "azul"
				},
				talles: [
					{
						talla: "4",
						stock: 10
					},
					{
						talla: "6",
						stock: 15
					},
					{
						talla: "8",
						stock: 20
					}
				]
			}
		]
	},
	{
		id: 54,
		nombre: "7645 JOGGING RUSTICO CORAZON",
		marca: "mambo",
		descripcion: "algo hay que poner",
		precio: 8.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "niño",
		genero: "femenino",
		subcategoria: "prendaInferior",
		imagen: [
			"https://acdn.mitiendanube.com/stores/243/508/products/whatsapp-image-2023-01-30-at-16-01-13-21-c0bd9f378c5dfffaf416813182738103-480-0.webp",
			"https://acdn.mitiendanube.com/stores/243/508/products/whatsapp-image-2023-01-30-at-16-01-30-21-e1faad47d451b02d6316813182739941-480-0.webp"
		],
		tallas: ["4", "6", "8"],
		colores: ["tostado"],
		opcion: [
			{
				color: {
					codHexadecimal: "",
					nombreColor: "tostado"
				},
				talles: [
					{
						talla: "4",
						stock: 10
					},
					{
						talla: "6",
						stock: 15
					},
					{
						talla: "8",
						stock: 20
					}
				]
			}
		]
	},
	{
		id: 55,
		nombre: "7654",
		marca: "mambo",
		descripcion: "algo hay que poner",
		precio: 10.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "niño",
		genero: "femenino",
		subcategoria: "prendaInferior",
		imagen: [
			"https://acdn.mitiendanube.com/stores/243/508/products/whatsapp-image-2024-01-10-at-14-45-52-7a3d42dad65365758617050649510325-480-0.webp"
		],
		tallas: ["4", "6", "8"],
		colores: ["negro"],
		opcion: [
			{
				color: {
					codHexadecimal: "#000000",
					nombreColor: "negro"
				},
				talles: [
					{
						talla: "4",
						stock: 10
					},
					{
						talla: "6",
						stock: 15
					},
					{
						talla: "8",
						stock: 20
					}
				]
			}
		]
	},
	{
		id: 56,
		nombre: "7774",
		marca: "mambo",
		descripcion: "algo hay que poner",
		precio: 11.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "niño",
		genero: "femenino",
		subcategoria: "prendaInferior",
		imagen: [
			"https://acdn.mitiendanube.com/stores/243/508/products/whatsapp-image-2024-01-10-at-13-30-14-58cacf8cddf2b5ef0517050662179980-480-0.webp",
			"https://acdn.mitiendanube.com/stores/243/508/products/whatsapp-image-2024-01-10-at-13-29-33-5c947ff99aafb0364817050662192036-480-0.webp",
			"https://acdn.mitiendanube.com/stores/243/508/products/whatsapp-image-2024-01-10-at-13-26-56-97aaa09f5bd593a93917050662217805-480-0.webp"
		],
		tallas: ["4", "6", "8"],
		colores: ["negro", "azul", "blanco"],
		opcion: [
			{
				color: {
					codHexadecimal: "#000000",
					nombreColor: "negro"
				},
				talles: [
					{
						talla: "4",
						stock: 10
					},
					{
						talla: "6",
						stock: 15
					},
					{
						talla: "8",
						stock: 20
					}
				]
			},
			{
				color: {
					codHexadecimal: "#0000FF",
					nombreColor: "azul"
				},
				talles: [
					{
						talla: "4",
						stock: 12
					},
					{
						talla: "6",
						stock: 17
					},
					{
						talla: "8",
						stock: 22
					}
				]
			},
			{
				color: {
					codHexadecimal: "#FFFFFF",
					nombreColor: "blanco"
				},
				talles: [
					{
						talla: "4",
						stock: 14
					},
					{
						talla: "6",
						stock: 19
					},
					{
						talla: "8",
						stock: 24
					}
				]
			}
		]
	},
	{
		id: 57,
		nombre: "Sandalias con brillo en símil blanco",
		marca: "batistella",
		descripcion: "algo hay que poner",
		precio: 7.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "niño",
		genero: "femenino",
		subcategoria: "calsado",
		imagen: [
			"https://calzadosbatistella.com.ar/shop/95687-superlarge_default/sandalias-con-brillo-en-simil-blanco.jpg",
			"https://calzadosbatistella.com.ar/shop/95691-superlarge_default/sandalias-con-brillo-en-simil-blanco.jpg",
			"https://calzadosbatistella.com.ar/shop/95689-superlarge_default/sandalias-con-brillo-en-simil-blanco.jpg"
		],
		tallas: ["18", "19", "21"],
		colores: ["blanco"],
		opcion: [
			{
				color: {
					codHexadecimal: "#FFFFFF",
					nombreColor: "blanco"
				},
				talles: [
					{
						talla: "18",
						stock: 10
					},
					{
						talla: "19",
						stock: 15
					},
					{
						talla: "21",
						stock: 20
					}
				]
			}
		]
	},
	{
		id: 58,
		nombre: "Sandalias con apliques de símil en blanco",
		marca: "batistella",
		descripcion: "algo hay que poner",
		precio: 10.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "niño",
		genero: "femenino",
		subcategoria: "calsado",
		imagen: [
			"https://calzadosbatistella.com.ar/shop/95102-superlarge_default/sandalias-con-apliques-de-simil-en-blanco.jpg",
			"https://calzadosbatistella.com.ar/shop/95103-superlarge_default/sandalias-con-apliques-de-simil-en-blanco.jpg",
			"https://calzadosbatistella.com.ar/shop/95101-superlarge_default/sandalias-con-apliques-de-simil-en-blanco.jpg"
		],
		tallas: ["18", "19", "21"],
		colores: ["blanco"],
		opcion: [
			{
				color: {
					codHexadecimal: "#FFFFFF",
					nombreColor: "blanco"
				},
				talles: [
					{
						talla: "18",
						stock: 10
					},
					{
						talla: "19",
						stock: 15
					},
					{
						talla: "21",
						stock: 20
					}
				]
			}
		]
	},
	{
		id: 59,
		nombre: "Zapatillas de símil con tachas en plata",
		marca: "batistella",
		descripcion: "algo hay que poner",
		precio: 13.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "niño",
		genero: "femenino",
		subcategoria: "calsado",
		imagen: [
			"https://calzadosbatistella.com.ar/shop/96067-superlarge_default/zapatillas-de-simil-con-tachas-en-plata.jpg",
			"https://calzadosbatistella.com.ar/shop/96069-superlarge_default/zapatillas-de-simil-con-tachas-en-plata.jpg",
			"https://calzadosbatistella.com.ar/shop/96068-superlarge_default/zapatillas-de-simil-con-tachas-en-plata.jpg"
		],
		tallas: ["18", "19", "21"],
		colores: ["plata"],
		opcion: [
			{
				color: {
					codHexadecimal: "",
					nombreColor: "plata"
				},
				talles: [
					{
						talla: "18",
						stock: 10
					},
					{
						talla: "19",
						stock: 15
					},
					{
						talla: "21",
						stock: 20
					}
				]
			}
		]
	},
	{
		id: 60,
		nombre: "Botas cortas de cuero con herrajes en oxido",
		marca: "batistella",
		descripcion: "algo hay que poner",
		precio: 20.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "niño",
		genero: "femenino",
		subcategoria: "calsado",
		imagen: [
			"https://calzadosbatistella.com.ar/shop/84392-superlarge_default/botas-cortas-de-cuero-con-herrajes-en-oxido.jpg",
			"https://calzadosbatistella.com.ar/shop/84393-superlarge_default/botas-cortas-de-cuero-con-herrajes-en-oxido.jpg",
			"https://calzadosbatistella.com.ar/shop/84395-superlarge_default/botas-cortas-de-cuero-con-herrajes-en-oxido.jpg"
		],
		tallas: ["18", "19", "21"],
		colores: ["cuero"],
		opcion: [
			{
				color: {
					codHexadecimal: "",
					nombreColor: "cuero"
				},
				talles: [
					{
						talla: "18",
						stock: 10
					},
					{
						talla: "19",
						stock: 15
					},
					{
						talla: "21",
						stock: 20
					}
				]
			}
		]
	},
	{
		id: 61,
		nombre: "Borcego con puño de símil en natural",
		marca: "batistella",
		descripcion: "algo hay que poner",
		precio: 25.5,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		Activo: true,
		productoNuevo: false,
		categoria: "niño",
		genero: "femenino",
		subcategoria: "calsado",
		imagen: [
			"https://calzadosbatistella.com.ar/shop/91452-superlarge_default/borcego-con-puno-de-simil-en-natural.jpg",
			"https://calzadosbatistella.com.ar/shop/91454-superlarge_default/borcego-con-puno-de-simil-en-natural.jpg",
			"https://calzadosbatistella.com.ar/shop/91450-superlarge_default/borcego-con-puno-de-simil-en-natural.jpg"
		],
		tallas: ["18", "19", "21"],
		colores: ["blanco"],
		opcion: [
			{
				color: {
					codHexadecimal: "#FFFFFF",
					nombreColor: "blanco"
				},
				talles: [
					{
						talla: "18",
						stock: 10
					},
					{
						talla: "19",
						stock: 15
					},
					{
						talla: "21",
						stock: 20
					}
				]
			}
		]
	}
];

module.exports = productos;

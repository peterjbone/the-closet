"use client";

import "./Cart.css";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useCartStore } from "../hooks/cartStore.js";

import Navbar from "../components/navbar/Navbar";
import PayButton from "../components/PayButton";
import { FaArrowLeft } from "react-icons/fa";

function Cart() {
	const getTotals = useCartStore((state) => state.getTotals);
	// //? Generando el precio total y la cantidad total (al cargar el componente)
	useEffect(() => {
		return () => getTotals();
	});

	//? Obteniendo las "actions"
	const addToCart = useCartStore((state) => state.addToCart);
	const decreaseCart = useCartStore((state) => state.decreaseCart);
	const removeFromCart = useCartStore((state) => state.removeFromCart);
	const clearCart = useCartStore((state) => state.clearCart);
	//clearCart();

	//? Obteniendo los "estados globales"
	const cartItems = useCartStore((state) => state.cartItems);
	const cartTotalQuantity = useCartStore((state) => state.cartTotalQuantity);
	const cartTotalAmount = useCartStore((state) => state.cartTotalAmount);

	//? Para redirigir
	const router = useRouter();

	//? Para coger la sesion de usuario
	const { data: session, status } = useSession();
	//console.log(session);
  
	//* -------------------------------- PAGINA CART -------------------------------- *//
	/* prettier-ignore */
	return (
    <>
      <Navbar />
      <div className="cart-container">
        <h1 className="text-start text-3xl font-bold">Mi Carrito 🛒</h1>
        {
          cartItems.length === 0 ? (
            <div className="cart-empty">
                <p>Tu carrito esta vacío por el momento.</p>
                <div className="start-shopping">
                  <Link href={"/"}>
                    <FaArrowLeft size={24} fontWeight={400}/>
                    <span>Comienza a comprar 💲</span>
                  </Link>
                </div>
            </div>
          ) : (
              <div>
                {/* LOS TITULOS */}
              <div className="titles">
                <h3 className="product-title">Producto</h3>
                <h3 className="price">Precio</h3>
                <h3 className="quantity">Cantidad</h3>
                <h3 className="total">Total</h3>
              </div>
              {/* TODOS LOS CART ITEMS */}
              <div className="cart-items">
                  {
                  cartItems &&
                  cartItems.map((cartItem) => (
                    <div className="cart-item" key={cartItem._id + cartItem.color}>
                      {/* Producto */}
                      <div className="cart-product">
                        <img src={cartItem.imagen} alt={cartItem.nombre} />
                        <div>
                          <h3 className="text-xl">{cartItem.nombre.toUpperCase()}</h3>
                          <p className="text-lg font-semibold"> Marca: {cartItem.marca} </p>
                          <p className="text-lg"> Talla seleccionada: {cartItem.talla} </p>
                          <p className="text-lg">
                            Color seleccionados: {" "}
                           <span className="font-semibold text-xl">{cartItem.color}</span> 
                          </p>
                          <button onClick={() => removeFromCart(cartItem)}>
                            Eliminar
                          </button>
                        </div>
                      </div>
                      {/* Precio individual */}
                      <div className="cart-product-price">${cartItem.precio}</div>
                      {/* Cantidad */}
                      <div className="cart-product-quantity">
                        <button onClick={() => decreaseCart(cartItem)}>
                          -
                        </button>
                        <div className="count">{cartItem.cartQuantity}</div>
                        <button onClick={() => addToCart(cartItem)}>
                          +
                        </button>
                      </div>
                      {/* Precio total */}
                      <div className="cart-product-total-price">
                        ${cartItem.precio * cartItem.cartQuantity}
                      </div>
                    </div>
                  ))
                  }
              </div>
              {/* RESUMEN DEL CARRITO */}
                <div className="cart-summary">
                  {/* Boton para vaciar carrito */}
                <button className="clear-btn" onClick={() => clearCart()}>
                  Vaciar carrito
                </button>
                  {/* Boton de Pago */}
                <div className="cart-checkout">
                  <div className="subtotal">
                    <span>Subtotal</span>
                    <span className="amount">${cartTotalAmount}</span>
                  </div>
                  <p>Impuestos y envío calculados al finalizar la compra</p>
                    {
                      session?.email ? (
                        <PayButton cartItems={cartItems} />
                      ) : (
                        <button
                          className="cart-login"
                          onClick={() => router.push("/login")}>
                          Inicia sesión para hacer el pago
                        </button>
                      )
                    }

                  <div className="continue-shopping">
                    <Link href={"/"}>
                      <FaArrowLeft size={24}/>
                      <span>Seguir comprando</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            )
          }
      </div>
    </>
  )
}

export default Cart;

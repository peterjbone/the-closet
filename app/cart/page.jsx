"use client";

import "./Cart.css";

import { useEffect } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import { useCartStore } from "../hooks/cartStore.js";

import Navbar from "../components/navbar/Navbar";
import PayButton from "../components/PayButton";

function Cart() {
	//? Trayendo las "actions"
	const addToCart = useCartStore((state) => state.addToCart);
	const removeFromCart = useCartStore((state) => state.removeFromCart);
	const decreaseCart = useCartStore((state) => state.decreaseCart);
	const clearCart = useCartStore((state) => state.clearCart);
	const getTotals = useCartStore((state) => state.getTotals);

	//? Generando el precio total al cargar el componente
	useEffect(() => {
		getTotals();
	});

	//? Obteniendo los estados globales
	const cartItems = useCartStore((state) => state.cartItems);
	const cartTotalQuantity = useCartStore((state) => state.cartTotalQuantity);
	const cartTotalAmount = useCartStore((state) => state.cartTotalAmount);

	const router = useRouter();
	const { data: session, status } = useSession();
	console.log("SESSION", session);
	console.log("STATUS", status);

	/* prettier-ignore */
	return (
    <>
      <Navbar />
      <div>

        <h1 className="text-start text-3xl font-bold ml-5 mt-4">Mi Carrito 🛒</h1>
        {
          productsCart.length === 0 ? (
            <div className="cart-empty">
                <p>Tu carrito esta vacío por el momento.</p>
                <div className="start-shopping">
                  <Link to="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-arrow-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                        />
                    </svg>
                    <span>Comienza a comprar</span>
                  </Link>
                </div>
            </div>
          ) : (
            <div>
              <div className="titles">
                <h3 className="product-title">Producto</h3>
                <h3 className="price">Precio</h3>
                <h3 className="quantity">Cantidad</h3>
                <h3 className="total">Total</h3>
              </div>
              <div className="cart-items">
                {cartItems &&
                  cartItems.map((cartItem) => (
                    <div className="cart-item" key={cartItem._id}>
                      <div className="cart-product">
                        <img src={cartItem.imagen[0]} alt={cartItem.nombre} />
                        <div>
                          <h3>{cartItem.nombre}</h3>
                         {/*  <p>{cartItem.desc}</p> */}
                          <button onClick={() => removeFromCart(cartItem)}>
                            Eliminar
                          </button>
                        </div>
                      </div>
                      <div className="cart-product-price">${cartItem.precio}</div>
                      <div className="cart-product-quantity">
                        <button onClick={() => decreaseCart(cartItem)}>
                          -
                        </button>
                        <div className="count">{cartItem.cartQuantity}</div>
                        <button onClick={() => addToCart(cartItem)}>+</button>
                      </div>
                      <div className="cart-product-total-price">
                        ${cartItem.precio * cartItem.cartQuantity}
                      </div>
                    </div>
                  ))}
              </div>
              <div className="cart-summary">
                <button className="clear-btn" onClick={() => clearCart()}>
                  Vaciar carrito
                </button>
                <div className="cart-checkout">
                  <div className="subtotal">
                    <span>Subtotal</span>
                    <span className="amount">${cartTotalAmount}</span>
                  </div>
                  <p>Impuestos y envío calculados al finalizar la compra</p>
                  {session.name ? (
                    <PayButton cartItems={cartItems} />
                  ) : (
                    <button
                      className="cart-login"
                      onClick={() => router.push("/login")}
                    >
                      Inicia sesión para hacer el pago
                    </button>
                  )}

                  <div className="continue-shopping">
                    <Link to="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-arrow-left"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                        />
                      </svg>
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

//*******************VERSION DE YOUTUBE*****************
/* 
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../slices/cartSlice";

import { Link } from "react-router-dom";
import PayButton from "./PayButton";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {cart.cartItems &&
              cart.cartItems.map((cartItem) => (
                <div className="cart-item" key={cartItem._id}>
                  <div className="cart-product">
                    <img src={cartItem.image?.url} alt={cartItem.name} />
                    <div>
                      <h3>{cartItem.name}</h3>
                      <p>{cartItem.desc}</p>
                      <button onClick={() => handleRemoveFromCart(cartItem)}>
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="cart-product-price">${cartItem.price}</div>
                  <div className="cart-product-quantity">
                    <button onClick={() => handleDecreaseCart(cartItem)}>
                      -
                    </button>
                    <div className="count">{cartItem.cartQuantity}</div>
                    <button onClick={() => handleAddToCart(cartItem)}>+</button>
                  </div>
                  <div className="cart-product-total-price">
                    ${cartItem.price * cartItem.cartQuantity}
                  </div>
                </div>
              ))}
          </div>
          <div className="cart-summary">
            <button className="clear-btn" onClick={() => handleClearCart()}>
              Clear Cart
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${cart.cartTotalAmount}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              {auth._id ? (
                <PayButton cartItems={cart.cartItems} />
              ) : (
                <button
                  className="cart-login"
                  onClick={() => navigate("/login")}
                >
                  Login to Check out
                </button>
              )}

              <div className="continue-shopping">
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart; 
*/

// src/context/CartContext.jsx
/* eslint-disable react-refresh/only-export-components */

// src/context/CartContext.jsx
import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Agregar producto
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  // ❌ Quitar solo UNA unidad del producto
  const removeFromCart = (id) => {
    setCart((prev) => {
      const index = prev.findIndex((item) => item.id === id);
      if (index === -1) return prev;

      const newCart = [...prev];
      newCart.splice(index, 1);
      return newCart;
    });
  };

  // Vaciar carrito
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
};

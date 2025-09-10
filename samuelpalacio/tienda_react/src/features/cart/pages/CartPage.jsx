// src/features/cart/pages/CartPage.jsx
import { useCart } from "../../../context/CartContext";

export function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  // Calcular total
  const total = cart.reduce((acc, item) => acc + item.precio, 0);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-800">
        Tu Carrito
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">El carrito está vacío</p>
      ) : (
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6">
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between border-b pb-3"
              >
                {/* Imagen */}
                <img
                  src={item.imagen}
                  alt={item.nombre}
                  className="w-16 h-16 object-cover rounded-md shadow"
                />

                {/* Info del producto */}
                <div className="flex-1 px-4">
                  <h2 className="font-semibold text-lg">{item.nombre}</h2>
                  <p className="text-gray-600">${item.precio}</p>
                </div>

                {/* Botón eliminar */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:underline"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>

          {/* Total */}
          <div className="mt-6 text-right">
            <h2 className="text-xl font-bold">Total: ${total}</h2>
          </div>

          {/* Botón vaciar */}
          <button
            onClick={clearCart}
            className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-400 transition"
          >
            Vaciar carrito
          </button>
        </div>
      )}
    </div>
  );
}

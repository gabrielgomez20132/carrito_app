import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Cart() {
  const { cart, removeFromCart, updateQuantity, totalAmount } = useContext(CartContext);

  return (
    <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Carrito</h2>
      
      {cart.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">El carrito está vacío.</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center p-4 border border-gray-300 dark:border-gray-700 rounded-lg"
            >
              <span className="text-lg font-medium text-gray-900 dark:text-gray-100">{item.name}</span>

              {/* Controles de cantidad */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                  disabled={item.quantity <= 1} // Evita valores menores a 1
                >
                  -
                </button>
                <span className="text-lg font-semibold dark:text-gray-400">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                >
                  +
                </button>
              </div>

              {/* Precio total del producto */}
              <span className="mt-4 text-xl font-semibold dark:text-gray-400">
                ${item.quantity * item.price}
              </span>

              {/* Botón eliminar */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-600"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
      <p className="mt-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
        Total: ${totalAmount.toFixed(2)}
      </p>
    </div>
  );
}

export default Cart;

import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { ThemeContext } from '../context/ThemeContext';

function ProductList() {
  const { addToCart } = useContext(CartContext);
  const { theme } = useContext(ThemeContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) throw new Error('Error al cargar los productos');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p className="text-center text-gray-700 dark:text-gray-300">Cargando productos...</p>;
  if (error) return <p className="text-center text-red-500 dark:text-red-400">Error: {error}</p>;

  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900 dark:text-gray-100">Productos Disponibles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
          >
            {/* Imagen con tamaño fijo */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-56 object-contain rounded-t-lg"
            />
            <div className="p-4 flex flex-col items-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {product.title.length > 30 ? product.title.slice(0, 30) + '' : product.title}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-300"
              >
                Añadir al Carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

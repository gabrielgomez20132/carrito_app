import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ThemeButton from './components/ThemeButton';
import Header from './components/Header';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
        <div className="container mx-auto p-4">
          <Header />
          <ThemeButton />
          <ProductList />
          <Cart />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;


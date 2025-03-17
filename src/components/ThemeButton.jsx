import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex items-center space-x-2 mt-4">
      <span className="text-sm text-gray-600 dark:text-gray-300">Claro</span>
      <button
        onClick={toggleTheme}
        className={`relative inline-flex items-center p-1 rounded-full w-12 h-6 transition-colors duration-300 ease-in-out ${
          theme === 'light' ? 'bg-gray-300' : 'bg-black'
        }`}
      >
        <span
          className={`absolute w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
            theme === 'light' ? 'translate-x-0' : 'translate-x-6'
          }`}
        ></span>
      </button>
      <span className="text-sm text-gray-600 dark:text-gray-300">Oscuro</span>
    </div>
  );
}

export default ThemeButton;

import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Header = ({ setIsModalOpen }) => {
  const { theme } = useContext(ThemeContext);

  const onOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <header
      className={`py-4 px-6 flex items-center justify-center transition-colors duration-300 
      ${theme === 'dark' ? 'bg-white' : 'bg-gray-900'}`}
    >
      <div className="w-full max-w-6xl flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1
            className={`font-['Orbitron'] text-2xl font-bold 
            ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`}
          >
            NODO CART
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <i
            className={`ph ph-user-circle text-4xl cursor-pointer transition-colors duration-300
            ${theme === 'dark' ? 'text-gray-300 hover:text-gray-100' : 'text-gray-800 hover:text-gray-600'}`}
            onClick={onOpenModal}
          ></i>
        </div>
      </div>
    </header>
  );
};

export default Header;

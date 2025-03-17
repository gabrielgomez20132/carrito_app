import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Inicializamos el tema con el valor de `localStorage` o por defecto 'light'
  const savedTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(savedTheme);

  const toggleTheme = () => {
    // Alternar entre el tema claro y oscuro
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Guardar el tema en localStorage
  };

  // useEffect para actualizar la clase 'dark' en el contenedor principal
  useEffect(() => {
    // Agregar o eliminar la clase 'dark' al contenedor principal
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]); // Este efecto se ejecuta cada vez que el tema cambie

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


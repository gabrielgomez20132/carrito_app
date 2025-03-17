import React, { useEffect } from 'react';
import movies from '../api/movies.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MovieList({ watchlist, setWatchlist }) {
  
  // Usar useEffect para cargar la watchlist desde localStorage al montar el componente
  useEffect(() => {
    const storedWatchlist = localStorage.getItem('watchlist');
    if (storedWatchlist) {
      setWatchlist(JSON.parse(storedWatchlist)); // Cargar la watchlist desde localStorage
    }
  }, [setWatchlist]); // Asegúrate de que setWatchlist no cambie


  // Función para agregar una película a la watchlist
  const addToWatchList = (movie) => {

    const exists = watchlist.some((m) => m.id === movie.id);

    if (exists) {
      toast.error('¡Esta película ya está en la Watchlist!');  
      return;
    }

    const updatedWatchlist = [...watchlist, movie];
    setWatchlist(updatedWatchlist);
    localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist)); // Guardar la lista actualizada en localStorage
  };

  return (
    <div>
      <ToastContainer 
         position="top-right"
         autoClose={5000}
         hideProgressBar={false}
         closeButton={false}
         pauseOnHover={false}
      />

      {/* Lista de películas */}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={`src/assets/img/${movie.img}.jpg`}
              alt={movie.name}
              className="w-full h-100 object-cover rounded-lg mb-3" //altura del imagen respecto card
            />
            <div className="p-4 text-center">
              <h2 className="text-white text-xl font-semibold mb-3">{movie.name}</h2>
              <button
                className="bg-green-500 text-white font-medium px-5 py-2 rounded-full shadow-md hover:bg-green-600 hover:shadow-lg active:scale-90 active:opacity-80 transition-all duration-150"
                onClick={() => addToWatchList(movie)}
              >
                + Watchlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
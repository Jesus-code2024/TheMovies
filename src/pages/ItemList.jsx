import React, { useEffect } from 'react';
import CardList from '../components/MovieList';
import { useItemStore } from '../store/useItemStore';

const ItemList = () => {
  const { filteredMovies, loading, error, fetchMovies, searchTerm, setSearchTerm } = useItemStore();

  useEffect(() => {
    if (filteredMovies.length === 0 && !loading && !error) { 
      fetchMovies();
    }
  }, [filteredMovies, loading, error, fetchMovies]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <section>
      <h1 className="mb-4 text-center">Listado Completo de Películas</h1>

      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Filtrar por título..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {loading && <p className="text-center">Cargando películas...</p>}
      {error && <p className="alert alert-danger text-center">{error}</p>}
      {!loading && !error && <CardList movies={filteredMovies} />}
    </section>
  );
};

export default ItemList;
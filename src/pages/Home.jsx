import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardList from '../components/MovieCard';
import { useItemStore } from '../store/useItemStore';


const Home = () => {
  const { movies, loading, error, fetchMovies, setInitialFilteredMovies, filteredMovies } = useItemStore();

  useEffect(() => {
    if (movies.length === 0) {
      fetchMovies();
    }
    setInitialFilteredMovies(6);
  }, [movies, fetchMovies, setInitialFilteredMovies]);

  const moviesToShow = filteredMovies.slice(0, 6); 

  return (
    <section>
      <div
        className="jumbotron jumbotron-fluid bg-primary text-white text-center py-5 mb-4"
        style={{ backgroundImage: 'url("https://image.tmdb.org/t/p/original/9n2tJBplPbgR2CjXwVps8gTddtP.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <div className="container">
          <h1 className="display-4">Bienvenido a TMDB App</h1>
          <p className="lead">Explora las películas más populares del momento.</p>
        </div>
      </div>

      <h2 className="mb-4 text-center">Películas Populares</h2>
      {loading && <p className="text-center">Cargando películas...</p>}
      {error && <p className="alert alert-danger text-center">{error}</p>}
      {!loading && !error && moviesToShow.length > 0 && <CardList movies={moviesToShow} />}
      {!loading && !error && moviesToShow.length === 0 && movies.length > 0 && <p className="text-center">No hay películas para mostrar en la vista previa.</p>}


      <div className="text-center mt-4">
        <Link to="/list" className="btn btn-lg btn-success">Ver Todas las Películas</Link>
      </div>
    </section>
  );
};

export default Home;
import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies = [] }) => {
    if (!Array.isArray(movies) || movies.length === 0) {
        return <p className="text-center">No hay películas para mostrar.</p>;
    }

    return (
        <div className="row">
            {movies.map(movie => (
                <div className="col-md-4" key={movie.id}>
                    <MovieCard movie={movie} />
                </div>
            ))}
        </div>
    );
};

export default MovieList;
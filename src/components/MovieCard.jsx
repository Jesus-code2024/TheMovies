import React from 'react';

const MovieCard = ({ movie }) => {
    if (!movie) return null;

    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : 'https://via.placeholder.com/500x750?text=Sin+Imagen';

    return (
        <div className="card mb-4">
            <img src={posterUrl} alt={movie.title} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                {/* Puedes agregar más información aquí */}
            </div>
        </div>
    );
};

export default MovieCard;
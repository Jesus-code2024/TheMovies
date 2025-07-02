import { create } from 'zustand';
import axios from 'axios';

const VITE_API_KEY = import.meta.env.VITE_API_KEY;
const API_BASE_URL = 'https://api.themoviedb.org/3';

export const useItemStore = create((set, get) => ({
    movies: [],
    loading: false,
    error: null,
    filteredMovies: [],
    searchTerm: '',

    fetchMovies: async () => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get(`${API_BASE_URL}/movie/popular?api_key=${VITE_API_KEY}&language=es-ES&page=1`);
            set({ movies: response.data.results, filteredMovies: response.data.results, loading: false });
        } catch (error) {
            console.error("Error fetching movies:", error);
            set({ error: "No se pudieron cargar las películas.", loading: false });
        }
    },

    setSearchTerm: (term) => {
        set({ searchTerm: term });
        get().filterMovies(term);
    },

    filterMovies: (term) => {
        const allMovies = get().movies;
        const lowerCaseTerm = term.toLowerCase();
        const filtered = allMovies.filter(movie =>
            movie.title.toLowerCase().includes(lowerCaseTerm)
        );
        set({ filteredMovies: filtered });
    },

    setInitialFilteredMovies: (count) => {
        const allMovies = get().movies;
        set({ filteredMovies: allMovies.slice(0, count) });
    }
}));
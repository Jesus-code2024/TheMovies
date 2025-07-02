import React from 'react';  
const Footer = () => {
    return (
        <footer className='bg-gray-800 text-white py-4 text-center'>
            <div className='container mx-auto'>
                <p>Desarrollado por Tu Nombre</p>
                <p>Contacto: Alcides Ruiz Hanco</p>
                <p>&copy; {new Date().getFullYear()} TMDB App. Todos los derechos reservados.</p>
                <p>
                    Datos proporcionados por{' '}
                    <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer" className="text-white">
                        The Movie DB (TMDB)
                    </a>.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
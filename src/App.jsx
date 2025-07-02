import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../src/layout/Layout';
import Home from '../src/pages/Home';
import ItemList from '../src/pages/ItemList';
import Contact from '../src/pages/Contact';
import './App.css'; 
import CardList from '../src/components/MovieCard';
import MovieList from '../src/components/MovieList';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="list" element={<ItemList />} />
          <Route path="contact" element={<Contact />} />
          <Route path="movies" element={<MovieList />} />
          <Route path="movies/:id" element={<CardList />} />
          <Route path="*" element={<h1 className="text-center mt-5">404: Página no encontrada</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
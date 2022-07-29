import React from 'react';
import './App.css'
import { useEffect } from 'react';

const API_URL = 'https://www.omdbapi.com?apikey=1bd49d0b'

const App = () => {
    
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }
    useEffect(() => {
        searchMovies('Superman')
    }, []);

  return (
    <h1>
        Hello
    </h1>
  )
}

export default App
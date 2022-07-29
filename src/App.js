import React from 'react';
import { useEffect } from 'react';

const API_URL = 'https://www.omdbapi.com?apikey=1bd49d0b'

const App = () => {
    
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
    }
    
    useEffect(() => {

    }, []);

  return (
    <div>

    </div>
  )
}

export default App
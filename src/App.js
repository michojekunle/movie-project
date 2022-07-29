import React from 'react';
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';
import { useState, useEffect } from 'react';

const API_URL = 'https://www.omdbapi.com?apikey=1bd49d0b'

const App = () => {
    const [movies, setMovies] = useState([]);
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies('Superman')
    }, []);

  return (
    <div className='app'>
        <h1>Movieland</h1>
        <div className='search'>
            <input
                placeholder='Search for movies..'
                value="Superman"
                onChange={() => {}}
            />
            <img 
                src={SearchIcon}
                alt='search'
                onClick={() => {}}
            />
        </div>

        {
            movies?.length>0 ? (
                <div className='container'>
                    {
                        movies.map((movie)=> <MovieCard movie={movie}/>)
                    }
                </div>
            ) : (
                <div className='empty'>
                    <h2>No movies Found</h2>
                </div>
            )
        }
    </div>
  )
}

export default App
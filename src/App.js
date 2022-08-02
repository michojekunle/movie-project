import React from 'react';
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';
import { useState, useEffect } from 'react';
import Spinner from './Spinner';

const API_URL = 'https://www.omdbapi.com?apikey=1bd49d0b'

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);

    const searchMovies = async (title) => {
        setLoading(true);
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setLoading(false);
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
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value) }}
            />
            <img 
                src={SearchIcon}
                alt='search'
                onClick={() => {searchMovies(searchTerm)}}
            />
        </div>
        {
            loading && <Spinner />
        }

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
import {useEffect, useState} from 'react';
import MovieClicked from './MovieClicked';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

//14a907df
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=14a907df'

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        searchMovies('Harry Potter');

    }, [])

    //asynch means asynchronous so it take a while to charge them
    const searchMovies = async (title) => {
        // Use backticks for template strings and correct the interpolation
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
      
        setMovies(data.Search);
    }      

    return (
        <Router>
            <div className="app">
                <h1>MovieLand</h1>
                <div className="search">
                    { /*always have to have a placeholder and a value (dynamic or static) */ }
                    <input 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search for Movies"
                    />
                    <img 
                        src={SearchIcon}
                        alt="search"
                        onClick={() => searchMovies(searchTerm)}
                    />
                </div>

                {movies?.length > 0 ? (
                    <div className="container">
                        {/* we are dynamically mapping*/}
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className ="empty">
                        <h2>No movies found</h2>
                    </div>
                )}

                <Switch>
                    {/* Route for displaying movie details */}
                    <Route path="/movie/:id" component={MovieClicked} />
                </Switch>

            
            </div>
        </Router>

    );



}

export default App;
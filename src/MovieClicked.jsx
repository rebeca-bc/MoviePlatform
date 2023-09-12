//create a component for the screen that will appear when a movieCard is clicked

import React from 'react';
import { Link } from 'react-router-dom';


const MovieClicked = (props) => {

    const movie = props.location.state.movie; // Get the IMDb ID from the URL

    return (
        
        <div className='movie-details'>
            <div className='movie-poster'>
                <img src = {movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title}/>
            </div>

            {movie ? (
                <div>
                <h2>{movie.Title}</h2>
                <p><strong>Year:</strong> {movie.Year}</p>
                <p><strong>Genre:</strong> {movie.Genre}</p>
                <p><strong>Director:</strong> {movie.Director}</p>
                <p><strong>Release Date:</strong> {movie.Released}</p>
                <p><strong>Duration:</strong> {movie.Runtime}</p>
                <p><strong>Rated:</strong> {movie.Rated}</p>
                <p><strong>Actors:</strong> {movie.Actors}</p>
                <p><strong>Description:</strong> {movie.Plot}</p>
                </div>
            ) : (
                <div>Loading movie details...</div>
            )}
        </div>

    );
}

export default MovieClicked;
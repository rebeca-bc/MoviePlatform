// component for all the cards show at the same time on the screen when searched
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    // Ensure 'movie' is destructured properly from props

    const { imdbID, Year, Poster, Title, Type } = movie;
    
    return (
        <Link to={`/movie/${imdbID}`} state={{movie}}>
            <div className="movie" key={imdbID}>
            <div>
                <p>{Year}</p>
            </div>
        
            <div>
                <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
            </div>
        
            <div>
                <span>{Type}</span>
                <h3>{Title}</h3>
            </div>
            </div>
        </Link>
    );

}
    
export default MovieCard;
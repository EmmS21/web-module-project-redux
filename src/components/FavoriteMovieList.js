import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/movieActions';



const FavoriteMovieList = (props) => {
    const favorites = [];
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span class="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = state => {
    return {
        movies: state.movieReducer.movies,
        favorites: state.movieFavReducer.movies
    }
}

export default connect(mapStateToProps, actionCreators) (FavoriteMovieList);
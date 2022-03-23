import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeFavorite } from '../actions/favoritesActions';



const FavoriteMovieList = (props) => {
    const { favorites, removeFavorite } = props; 
    //remove favorites
    const handleRemoveFavs = (id) => {
        removeFavorite(id)
    }

    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span 
                                class="material-icons"
                                onClick={()=>handleRemoveFavs(movie.id)}>remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = state => {
    return {
        favorites: state.movieFavReducer.favorites
    }
}

export default connect(mapStateToProps, {removeFavorite}) (FavoriteMovieList);
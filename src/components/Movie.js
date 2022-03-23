import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { deleteMovie } from '../actions/movieActions';
import { addFavorite } from '../actions/favoritesActions';

const Movie = (props) => {
    // get movies from props
    const { movies, displayFavorites, addFavorite } = props
    // const { displayFavorites } = props;
    // const movies = props.movies
    const { id } = useParams();
    const { push } = useHistory();
    const movie = movies.find(movie=>movie.id===Number(id));
    //event handler to handle deleting a movie
    const handleDelete = (id) => {
        props.deleteMovie(id)
        push('/movies/')
    }
    //handle adding to favorites
    const handleAddFavs = (movie) => {
        addFavorite(movie)
    }

    return(<div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">						
                    <h4 className="modal-title">{movie.title} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">

                        <section className="movie-details">
                            <div>
                                <label>Title: <strong>{movie.title}</strong></label>
                            </div>
                            <div>
                                <label>Director: <strong>{movie.director}</strong></label>
                            </div>
                            <div>
                                <label>Genre: <strong>{movie.genre}</strong></label>
                            </div>
                            <div>
                                <label>Metascore: <strong>{movie.metascore}</strong></label>
                            </div>
                            <div>
                                <label>Description:</label>
                                <p><strong>{movie.description}</strong></p>
                            </div>
                        </section>
                        
                        <section>
                            { displayFavorites && <span 
                                                    onClick={() => handleAddFavs(movie)} 
                                                    className="m-2 btn btn-dark">Favorite</span>}
                            <span className="delete">
                                <input 
                                    type="button" 
                                    className="m-2 btn btn-danger" 
                                    value="Delete"
                                    onClick={() => handleDelete(movie.id)}
                                />
                            </span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}


const mapStateToProps = state => {
    return {
        movies: state.movieReducer.movies,
        displayFavorites: state.movieFavReducer.displayFavorites
    }
}
export default connect(mapStateToProps, {deleteMovie,addFavorite}) (Movie);

// * [ ] Connect the displayFavorites state to the Movie and MovieHeader component.

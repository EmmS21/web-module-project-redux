import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/movieActions';
import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';

const MovieList = (props)=> {
    const{ movies, favorites } = props
    // const movies = [];

    return (
        <div className="col">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Director</th>
                    <th>Genre</th>
                    <th>Metascore</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                    {
                        movies.map(movie=><MovieListItem key={movie.id} movie={movie}/>)
                    }
                </tbody>
            </table>
            
            <MovieFooter totalMovies={movies.length}/>
        </div>
    );
}

//reaching into state and getting specific properties I want
const mapStateToProps = state => {
    return {
        movies: state.movieReducer.movies,
        // favorites: state.movies
    }
}

export default connect(mapStateToProps, actionCreators) (MovieList);

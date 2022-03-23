import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database"
}
//first take state, if there's no state then takes initialState 
const reducer = (state= initialState, action) => {
    switch(action.type) {
        case DELETE_MOVIE:
            return {
                movies: state.movies.filter(item=>(action.payload !== item.id))
            }
        case ADD_MOVIE:
            return {
                movies: [ ...state.movies, action.payload]
            }
        default:
            return state;
    }
}

export default reducer;

/*
* [ ] Add in an ADD_MOVIE case to movieReducer.js.
* [ ] Make this new case return a version of state with new movie values passed in through the payload.
* [ ] Create an action creator for addMovie in movieActions.js.
* [ ] Find the component that triggers the adding of a movie and connect the addMovie action.
* [ ] Create and connect the necessary event handlers to call addMovie.
* [ ] Add in push('/movies/) after calling your action to trigger a redirect.
*/
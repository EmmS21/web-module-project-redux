export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";

export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}

export const addMovie = (newMovie) => {
    console.log(newMovie)
    return({
        type: ADD_MOVIE,
        payload: { title: newMovie.title, 
                   director: newMovie.director, 
                   metascore: newMovie.metascore,
                   genre: newMovie.genre,
                   description: newMovie.description 
                }
    })
}


/*
* [ ] Add in an ADD_MOVIE case to movieReducer.js.
* [ ] Make this new case return a version of state with new movie values passed in through the payload.
* [ ] Create an action creator for addMovie in movieActions.js.
* [ ] Find the component that triggers the adding of a movie and connect the addMovie action.
* [ ] Create and connect the necessary event handlers to call addMovie.
* [ ] Add in push('/movies/) after calling your action to trigger a redirect.
*/
import movies from './../data.js';
import { TOGGLE_DISPLAY_FAVORITES,
    REMOVE_FAVORITE,
    ADD_FAVORITE } from '../actions/favoritesActions';

const initialState = {
    favorites: [],
    displayFavorites: false
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case TOGGLE_DISPLAY_FAVORITES:
            return {
                    ...state,
                    displayFavorites: !state.displayFavorites
            }
        case ADD_FAVORITE:
            //looking for fav in list, if found, already added
            const found = state.favorites.find(item => item.id === action.payload.id)
            //we don't want to add again, that's why we are returning state as is
            if(found)  return state 
            return {
                    ...state,
                    favorites: [  ...state.favorites, action.payload]
            }
        case REMOVE_FAVORITE:
            return {
                    ...state,
                    favorites: state.favorites.filter(item => (item.id !== action.payload))
            }
        default:
            return(state);
    }
}


export default reducer
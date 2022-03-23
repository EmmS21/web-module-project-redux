export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const TOGGLE_DISPLAY_FAVORITES = "TOGGLE_DISPLAY_FAVORITES";

export const toggleFavorites = ()=> {
    return({type: TOGGLE_FAVORITES});
}

export const addFavorite = (movie)=> {
    return({type: ADD_FAVORITE, payload:movie});
}

export const removeFavorite = (id)=> {
    return({type: REMOVE_FAVORITE, payload:id});
}

export const toggleDisplayFavorites = () => {
    return { type: TOGGLE_DISPLAY_FAVORITES }
}
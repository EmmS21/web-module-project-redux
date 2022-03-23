// import { combineReducers } from 'redux';

// import movieReducer from './movieReducer';


// export default movieReducer;
import { combineReducers } from 'redux';

import movieReducer from './movieReducer';

import movieFavReducer from './movieFavReducer';

//combined reducers 
export default combineReducers({ movieReducer, movieFavReducer });
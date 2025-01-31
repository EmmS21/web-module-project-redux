import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
// import * as actionCreators from '../actions/movieActions';
import { toggleDisplayFavorites } from '../actions/favoritesActions' 

const MovieHeader = (props) => {
    const { appTitle,displayFavorites,toggleDisplayFavorites } = props;

    //hide and show display
    const toggleDisplay = () => {
        toggleDisplayFavorites()
    }
    
    return(<div className="table-title">
        <div className="row">
        <div className="col-sm-6">
            <h2>{appTitle}</h2>
        </div>
        <div className="col-sm-6 headerBar">
            <div onClick={toggleDisplay} className="btn btn-sm btn-primary"><span>{ displayFavorites ? "Hide" : "Show"} Favorites</span></div>
            <Link to="/movies" className="btn btn-sm btn-primary">View All Movies</Link>
            <Link to="/movies/add" className="btn btn-sm btn-success"><i className="material-icons">&#xE147;</i> <span>Add New Movie</span></Link>
        </div>
        </div>
    </div>);
}

const mapStateToProps = state => {
    return {
        appTitle: state.movieReducer.appTitle,
        displayFavorites: state.movieFavReducer.displayFavorites
    }
}
// export default connect(mapStateToProps, actionCreators) (Movie);

export default connect(mapStateToProps, { toggleDisplayFavorites }) (MovieHeader);
/*
* [ ] **Finally, MovieHeader uses appTitle to display the title text.** 
Connect this component to appTitle and test appTitle is correctly displayed in your app.

*/
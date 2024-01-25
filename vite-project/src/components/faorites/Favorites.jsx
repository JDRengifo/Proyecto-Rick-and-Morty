import React from "react";
import { connect } from "react-redux";

function Favorites(favorites){
    console.log(favorites)
    return(
    <>
        <h1>Acá estan los Favoritos</h1>
        
    </>
      )
}

const mapStateToProps = (state) => {
    console.log(state.myFavorites)
    return {
        favorites: state.myFavorites 
    };
};
export default connect(mapStateToProps,[])(Favorites);
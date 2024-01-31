import React from "react";
import Card from "../card/Card";
import { useSelector } from "react-redux";

function Favorites(){

    const favorites = useSelector(state => state.myFavorites);
    
    return(
       <div>
       {favorites?.map(fav => (
        <Card 
        name={fav.name}
        id={fav.id}
        key={fav.id}
        image={fav.image}
        />
       ))}
       </div>
    );
};
export default Favorites;
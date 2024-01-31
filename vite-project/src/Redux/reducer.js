// IMPORTO LAS ACCIONES

import { ADD_FAVORITE, REMOVE_FAVORITE } from "./action";



//Acá va el estado inicial del store
const initialState = {
    myFavorites: [],
};

const reducer = (state = initialState, action)=>{
    const { type, payload } = action;
// const reducer = (state = initialState, {type, payload})
    switch (type) {
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: [...state.myFavorites, payload]
               // myFavorites: [...state.myFavorites, payload] <--esto va con la linea 9

               //tambien se podria con concat
               //myFavorites: state.myFavorites.concat(payload)
               
               // O tambien con el push
               //myFavorites: state.myFavorites.push(payload)
            }
            case REMOVE_FAVORITE:
                const filtrados = state.myFavorites.filter((char)=>char.id !== payload);
                return {
                    // spread operator
                    ...state,
                    myFavorites: filtrados
                }
                //también podriamos ponerlo así:
    //          case REMOVE_FAV:
    //              return {
    //                  ...state,
    //                  myFavorites: state.myFavorites.filter((item)=>item.id !== payload); 
    //               }

            default:
               return {...state};
    }
}

export default reducer;
// IMPORTO LAS ACCIONES

import { ADD_FAVORITE, REMOVE_FAVORITE, FILTER_CARDS, ORDER_CARDS } from "./action";



//Acá va el estado inicial del store
const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action)=>{
  const { type, payload } = action;
  console.log(payload)
  // const reducer = (state = initialState, {type, payload})
  switch (type) {
    case ADD_FAVORITE:
      console.log('ADD', payload)
      return {
        ...state,
        allCharacters: [...state.allCharacters, payload],
        myFavorites: [...state.myFavorites, payload],
        
        // myFavorites: [...state.allCharacters, payload],
        // myFavorites: [...state.myFavorites, payload] <--esto va con la linea 9
        
        //tambien se podria con concat
        //myFavorites: state.myFavorites.concat(payload)
        
        // O tambien con el push
        //myFavorites: state.myFavorites.push(payload)
      }
      
      case REMOVE_FAVORITE:
        console.log('REMOVE', payload)
        const filtrados = state.myFavorites.filter((char)=>char.id !== payload);
        return {
          // spread operator
          ...state,
          myFavorites: filtrados,
          
        }
        //también podriamos ponerlo así:
        //   case REMOVE_FAV:
        //       return {
          //         ...state,
          //         myFavorites: state.myFavorites.filter((item)=>item.id !== payload); 
          //       }
          
          case FILTER_CARDS:
            if(payload == 'All'){
          console.log('FILTER', state.allCharacters)
          return {
            ...state,
            myFavorites: state.allCharacters
          }
        } else {
          console.log('FILTER else', state.allCharacters)
          const filter = state.allCharacters.filter((char)=>char.gender === payload);
          return {
            // spread operator
            ...state,
            myFavorites: filter,
          }
        }
        
        
        
        
        case ORDER_CARDS:
          console.log('ORDER', payload)
          if(payload == 'A'){
            return {
              ...state,
              myFavorites: state.allCharacters.sort((a,b)=> a.name > b.name ? 1 : -1),
            }
          } else {
            console.log('ORDER else', state.allCharacters)
            return {
              ...state,
              myFavorites: state.allCharacters.sort((a,b)=> a.name < b.name ? 1 : -1)
            }
        }
                    
      default:
        return state;
  }
}

export default reducer;
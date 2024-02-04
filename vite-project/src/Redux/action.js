// Acá va Estado Global Inicial
// y Logica de cada ACTION

export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const FILTER_CARDS = 'FILTER_CARDS';
export const ORDER_CARDS = 'ORDER_CARDS';


export const addFav = (char) => {
    return {
        type: ADD_FAVORITE,
        payload: char
      //payload    <-- por ES6 si la propiedad es igual al valor se puede solo colocar 
                    //la propiedad y el valor se sobreentiende que es el mismo
    };
};

export const removeFav = (id) => {
    return {
        type: REMOVE_FAVORITE,
        payload: id
    };
};

export const filterCards = (payload) => {
    return {
        type: FILTER_CARDS,
        payload,
    };
};

export const orderCards = (payload) => {
    return {
        type: ORDER_CARDS,
        payload,
    };
};
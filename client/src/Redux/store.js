import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const SET_PRODUCT = "SET_PRODUCT";
const ADD_TO_CART= "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART"

const initState = {
    Products:[],
    cart:[]
}

const storeReducers=(state=initState,action)=>{
    switch(action.type){
        case SET_PRODUCT:
            return{
                ...state,
                Products:action.payload
            }
            default :
            return state

    }
}

export const setproducts=(Products)=>{
    return{
        type:SET_PRODUCT,
        payload: Products,
    }
}
export const addtocart=(id)=>{
    return{
        type:ADD_TO_CART,
        payload:{
            id:id
        }
    }
}

const rootReducer = combineReducers({shop:storeReducers});
const store = createStore(rootReducer,composeWithDevTools());

export default store
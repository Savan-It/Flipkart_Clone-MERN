import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


import {getProductsReducer} from './Redusers/productReducer'

const reducer = combineReducers({
    getProducts: getProductsReducer
});

const middleWare = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleWare))
)

export default store;
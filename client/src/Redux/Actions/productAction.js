import axios from 'axios';

//import Redux constants
import * as actionType from '../Constants/productConstants'
const URL = 'http://localhost:8000'

export const getProducts = () => async (dispatch) =>{
    try {
        const {data} = await axios.get(`${URL}/products`);
        dispatch({type: actionType.GET_PRODUCT_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: actionType.GET_PRODUCT_FAIL, payload: error.message})
    }
}
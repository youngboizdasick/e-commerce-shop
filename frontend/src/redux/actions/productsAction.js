import axios from "axios";

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProducts = (category) => async dispatch => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });
    try {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
        dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: {category, products: response.data} });
    } catch (error) {
        dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
    }
};

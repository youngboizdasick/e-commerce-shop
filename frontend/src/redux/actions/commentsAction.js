import axios from "axios";

export const FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';

export const fetchComments = () => async dispatch => {
    dispatch({ type: FETCH_COMMENTS_REQUEST });
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
        dispatch({ type: FETCH_COMMENTS_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: FETCH_COMMENTS_FAILURE, payload: error.message });
    }
};

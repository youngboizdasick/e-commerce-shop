import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import commentsReducer from './commentsReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  comments: commentsReducer,
});

export default rootReducer;

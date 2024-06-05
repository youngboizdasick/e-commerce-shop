import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { thunk as legacyThunk } from 'redux-thunk';
import rootReducer from './reducers/index'

const store = createStore(rootReducer, applyMiddleware(legacyThunk));

export default store;

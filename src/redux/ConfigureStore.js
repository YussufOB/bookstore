import { createStore, combineReducers } from 'redux';
import booksReducer from './books/Books';
import checkReducer from './categories/Categories';

const reducer = combineReducers({
  booksReducer,
  checkReducer,
});

const store = createStore(
  reducer,
);

export default store;

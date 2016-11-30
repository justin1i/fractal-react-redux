import { combineReducers } from 'redux';
import locationReducer from './location';

export const makeRootReducer = (asyncReducers) =>
  combineReducers({
    location: locationReducer,
    ...asyncReducers,
  });

export const injectReducer = (store, { key, reducer }) => {
  const asyncReducers = store.asyncReducers;
  if (Object.hasOwnProperty.call(asyncReducers, key)) return;
  asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(asyncReducers));
};

export default makeRootReducer;

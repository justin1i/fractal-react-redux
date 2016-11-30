import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { browserHistory } from 'react-router';
import makeRootReducer from './reducers';
import { updateLocation } from './location';

export default (initialState = {}) => {
  const middleware = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
  }

  const store = createStore(
    makeRootReducer(),
    initialState,
    applyMiddleware(...middleware)
  );
  store.asyncReducers = {};

  store.unsubscribeHistory = browserHistory.listen(updateLocation(store));

  return store;
};

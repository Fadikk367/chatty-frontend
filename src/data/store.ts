import { applyMiddleware, createStore, Middleware, Store, Action } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; 

import { socketMiddleware } from './middlewares';

import rootReducer, { StoreState } from './reducers';

export const configureStore = () => {
  const middlewares: Middleware[] = [socketMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];

  const composedEnhancers = composeWithDevTools(...enhancers);
  const store = createStore(rootReducer, composedEnhancers);

  // if (process.env.NODE_ENV !== 'production' && module.hot) {
  //   module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  // }

  return store;
}
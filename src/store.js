import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducer from './reducers';
export default function configureStore(initialState={}) {
  const logger = createLogger();
  const middlewares = [thunk, logger];

 return createStore(
   rootReducer,
   initialState,
   applyMiddleware(...middlewares
   )
 );
}
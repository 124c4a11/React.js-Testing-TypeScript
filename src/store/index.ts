import { combineReducers, configureStore } from '@reduxjs/toolkit';

import counterReducer from './reducers/counterReducer';


const rootReducer = combineReducers({
  counter: counterReducer
});


export const createReduxStore = (initialState?: RootReducer) => configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});


export type RootReducer = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = AppStore['dispatch'];

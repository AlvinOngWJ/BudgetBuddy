// Import createStore and combineReducers functions from redux
import { createStore, combineReducers } from 'redux';

// Import the firebase reducer
import { firebaseReducer } from 'react-redux-firebase';

// Combine the firebase reducer with any other reducers that might be added in the future
const rootReducer = combineReducers({
  firebase: firebaseReducer
});

// Create and export the store
export const store = createStore(rootReducer);

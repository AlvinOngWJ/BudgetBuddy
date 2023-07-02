// Import necessary modules and components
import React from 'react';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { db } from './firebaseSetup';
import { store } from './store';
import ExpensesList from './ExpensesList';
import AddExpenseForm from './AddExpenseForm';

// Create firebase props
const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance: db
};

function App() {
  return (
    // Provide redux store and firebase instance to App
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <div className="App">
          <h1>Expense Tracker</h1>
          <AddExpenseForm />
          <ExpensesList />
        </div>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;

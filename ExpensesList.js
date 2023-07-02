// Import necessary modules and components
import React from 'react';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

function ExpensesList() {
  // Sync expenses collection from Firestore with Redux
  useFirestoreConnect([{ collection: 'expenses' }]);
  const expenses = useSelector(state => state.firestore.ordered.expenses);

  // Show a message while expenses are loading
  if (!isLoaded(expenses)) {
    return <div>Loading...</div>;
  }

  // Show a message if there are no expenses
  if (isEmpty(expenses)) {
    return <div>No expenses found.</div>;
  }

  // List all expenses
  return (
    <div>
      {expenses.map(expense => (
        <div key={expense.id}>
          <h2>{expense.name}</h2>
          <p>{expense.amount}</p>
        </div>
      ))}
    </div>
  );
}

export default ExpensesList;

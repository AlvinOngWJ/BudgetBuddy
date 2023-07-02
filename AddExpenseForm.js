// Import necessary modules and components
import React, { useState } from 'react';
import { useFirestore } from 'react-redux-firebase';

function AddExpenseForm() {
  const firestore = useFirestore();
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');


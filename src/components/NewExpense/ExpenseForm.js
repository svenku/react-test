import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {

  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState('');
  // const [enteredDate, setEnteredDate] = useState('');

  // using below an alternative way to set state

  const [userInput, setUserinput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  });

  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);
    // setUserinput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // safer way to set state

    setUserinput((prevState) => {
      return {
        ...prevState,
        enteredTitle: event.target.value,
      };
    });
  };

  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value);
    // setUserinput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });

    setUserinput((prevState) => {
      return {
        ...prevState,
        enteredAmount: event.target.value,
      };
    });

  };

  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value);
    // setUserinput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });

    setUserinput((prevState) => {
      return {
        ...prevState,
        entereDate: event.target.value,
      };
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input type="number" onChange={amountChangeHandler} min="0.01" step="0.01"/>
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input type="date" onChange={dateChangeHandler} min="2010-01-01" max="2030-01-01"/>
        </div>      
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );  
}

export default ExpenseForm;
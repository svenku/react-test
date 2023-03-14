import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2022, 4, 15);
  const expenseDescription = 'Book';
  const expensePrice = 25.99;

  return (
    <div className="expense-item">
      <div>{expenseDate.toUTCString()}</div>
      <div className="expense-item__description">
        <h2>{expenseDescription}</h2>
        <div className="expense-item__price">${expensePrice}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

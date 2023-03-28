import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  // a stateful component that manages the state of the filter
  // ExpenseFilter values and changes are controlled by the logic in this parent component:

  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log("Expenses.js logs:", selectedYear);
  };

  const filteredItems = props.items.filter((item) => {
    return item.date.getFullYear().toString() ===  filteredYear ;
  });

  let expenseContent = <p>No expenses for year {filteredYear}.</p>

  if (filteredItems.length > 0) {
    expenseContent = filteredItems.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpenseFilter 
        selected={filteredYear} 
        onFilter={filterChangeHandler} 
      />
      {expenseContent}
    </Card>
  );
};

export default Expenses;

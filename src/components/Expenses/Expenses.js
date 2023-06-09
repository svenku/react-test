import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
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

  return (
    <Card className="expenses">
      <ExpenseFilter 
        selected={filteredYear} 
        onFilter={filterChangeHandler} 
      />
      <ExpenseChart expenses = {filteredItems}/>
      <ExpenseList items = {filteredItems}/>
    </Card>
  );
};

export default Expenses;

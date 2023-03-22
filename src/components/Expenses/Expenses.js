import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {

  const filterChangeHandler = selectedYear => {
    console.log('Expenses.js logs:', selectedYear)
  };


  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter onFilter={filterChangeHandler}/>
        {props.items.map((item) => (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
      </Card>
    </div>

  );
}

export default Expenses;
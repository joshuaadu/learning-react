import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

const Expenses = (props) => {
	// Manage the State of the received filter selected value
	// Set the default selected of the ExpenseFilter with the current State value
	const [filteredYear, setSelectedYear] = useState("2020");
	const filterChangeHandler = (selectedYear) => {
		setSelectedYear(selectedYear);
	};

	// Filter expenses by the selected year
	let filteredExpenses = props.expenses.filter(
		(expense) => expense.date.getFullYear().toString() === filteredYear
	);

	return (
		<div>
			<Card className="expenses">
				<ExpenseFilter
					selected={filteredYear}
					selectedYear={filterChangeHandler}
				/>
				<ExpensesList expenses={filteredExpenses} />
			</Card>
		</div>
	);
};

export default Expenses;

import ExpenseItem from "./ExpenseItem";
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

	// Render message when no expenses are recorded for the selected year
	let expenseContent = <p>No expenses recorded for {filteredYear}</p>;

	// Render list of expenses when there are expenses for the selected year
	if (filteredExpenses.length > 0) {
		expenseContent = filteredExpenses.map((expense) => (
			<ExpenseItem
				date={expense.date}
				title={expense.title}
				amount={expense.amount}
			/>
		));
	}

	return (
		<Card className="expenses">
			<ExpenseFilter
				selected={filteredYear}
				selectedYear={filterChangeHandler}
			/>

			{expenseContent}
		</Card>
	);
};

export default Expenses;

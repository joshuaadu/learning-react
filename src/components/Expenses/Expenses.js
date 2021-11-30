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
	return (
		<Card className="expenses">
			<ExpenseFilter
				selected={filteredYear}
				selectedYear={filterChangeHandler}
			/>

			{props.expenses.map((expense) => (
				<ExpenseItem
					date={expense.date}
					title={expense.title}
					amount={expense.amount}
				/>
			))}
		</Card>
	);
};

export default Expenses;

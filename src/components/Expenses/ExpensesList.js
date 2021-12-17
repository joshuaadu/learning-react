import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
	// Render message when no expenses are recorded for the selected year
	if (props.expenses.length === 0)
		return (
			<h2 className="expenses-List_fallback">No expenses recorded.</h2>
		);

	// Render list of expenses when there are expenses for the selected year
	if (props.expenses.length > 0) {
		return (
			<ul className="expenses-List">
				{props.expenses.map((expense) => (
					<ExpenseItem
						date={expense.date}
						title={expense.title}
						amount={expense.amount}
					/>
				))}
			</ul>
		);
	}
};

export default ExpensesList;

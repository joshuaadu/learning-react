import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";

const NewExpense = (props) => {
	const [addNewExpense, setAddNewExpense] = useState(true);

	const saveExpenseDataHandler = (data) => {
		const expenseData = {
			...data,
			id: Math.random().toString(),
		};
		// console.log(expenseData)
		props.onAddExpense(expenseData);
	};

	const addNewExpenseFormHandler = (value = false) => setAddNewExpense(value);

	if (addNewExpense) {
		return (
			<Card className="new-expense">
				<form onSubmit={addNewExpenseFormHandler}>
					<button type="submit">Add New Expense</button>
				</form>
			</Card>
		);
	}

	if (!addNewExpense) {
		return (
			<Card className="new-expense">
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					addNewExpnese={addNewExpenseFormHandler}
				/>
			</Card>
		);
	}
};

export default NewExpense;

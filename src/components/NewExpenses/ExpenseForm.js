import { useState } from "react"
import "./ExpenseForm.css"

const ExpenseForm = (props) => {
	// Set States for form inputs
	const [enteredTitle, setEnteredTitle] = useState("")
	const [enteredAmount, setEnteredAmount] = useState("")
	const [enteredDate, setEnteredDate] = useState("")

	// Update State of the user's title input
	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value)
	}
	// Update State of the user's amount input
	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value)
	}
	// Update State of the user's date input
	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value)
	}

	// Submit form inputs up to the NewExpense component or parent component
	// by lifting up the State values of the input data
	const submitHandler = (event) => {
		event.preventDefault()
		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		}

		props.onSaveExpenseData(expenseData)
		setEnteredTitle("")
		setEnteredAmount("")
		setEnteredDate("")
		props.addNewExpnese(event, true)
	}

	// Display Expense form when the "Cancel" button is clicked
	const showAddNewExpenseFormHandler = (event) => {
		props.addNewExpnese(event, true)
	}

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense_controls">
				<div className="new-expense_control">
					<label>Title</label>
					<input
						type="text"
						onChange={titleChangeHandler}
						value={enteredTitle}
						required
					/>
				</div>
				<div className="new-expense_control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						onChange={amountChangeHandler}
						value={enteredAmount}
						required
					/>
				</div>
				<div className="new-expense_control">
					<label>Date</label>
					<input
						type="date"
						min="2019-01-01"
						max="2022-12-31"
						onChange={dateChangeHandler}
						value={enteredDate}
						required
					/>
				</div>
			</div>
			<div className="new-expense_actions">
				<button type="button" onClick={showAddNewExpenseFormHandler}>
					Cancel
				</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	)
}

export default ExpenseForm

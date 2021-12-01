import { useState } from "react"
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"
import Card from "../UI/Card"

const NewExpense = (props) => {
	const [isEditting, setIsEditting] = useState(false)

	const saveExpenseDataHandler = (data) => {
		const expenseData = {
			...data,
			id: Math.random().toString(),
		}
		// console.log(expenseData)
		props.onAddExpense(expenseData)
	}
	const startEditting = () => {
		setIsEditting(true)
	}

	// Update the State to
	const stopEditting = (event) => {
		setIsEditting(false)
	}

	return (
		<Card className="new-expense">
			{!isEditting && <button onClick={startEditting}>Add New Expense</button>}
			{isEditting && (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					onCancel={stopEditting}
				/>
			)}
		</Card>
	)
}

export default NewExpense

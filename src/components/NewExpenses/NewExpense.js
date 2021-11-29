import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"
import Card from "../UI/Card"

const NewExpense = (props) => {
	const saveExpenseDataHandler = (data) => {
		const expenseData = {
			...data,
			id: Math.random().toString(),
		}
		// console.log(expenseData)
		props.onAddExpense(expenseData)
	}

	return (
		<Card className="new-expense">
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
		</Card>
	)
}

export default NewExpense

import { useState } from "react"
import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpenses/NewExpense"

const DUMMY_EXPENSES = [
	{
		title: "Toilet Paper",
		amount: 98.4,
		date: new Date(2020, 7, 14),
	},
	{
		title: "Car Insurance",
		amount: 198.4,
		date: new Date(2020, 7, 14),
	},
	{
		title: "Car Maintenance",
		amount: 298.4,
		date: new Date(2020, 7, 14),
	},
]

const App = () => {
	const [expenses, setAddExpenses] = useState(DUMMY_EXPENSES)

	const addExpenseHandler = (expense) => {
		setAddExpenses((prevExpenses) => [expense, ...prevExpenses])
	}
	console.log(expenses)

	return (
		<div className="App">
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses expenses={expenses} />
		</div>
	)
}

export default App

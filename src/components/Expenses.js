import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
	return (
		<div>
			<ExpenseItem
				date={props.expenses[0].date}
				title={props.expenses[0].title}
				amount={props.expenses[0].amount}
			/>
			<ExpenseItem
				date={props.expenses[1].date}
				title={props.expenses[1].title}
				amount={props.expenses[1].amount}
			/>
			<ExpenseItem
				date={props.expenses[2].date}
				title={props.expenses[2].title}
				amount={props.expenses[2].amount}
			/>
		</div>
	);
}

export default Expenses;

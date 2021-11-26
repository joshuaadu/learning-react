import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__title">{props.title}</div>
			<div className="expense-item__amount">${props.amount}</div>
		</Card>
	);
};

export default ExpenseItem;

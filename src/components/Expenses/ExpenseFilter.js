import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
	// Lift up the State of the filter selected value
	const dropdownChangeHandler = (event) => {
		props.selectedYear(event.target.value);
	};
	return (
		<div className="expense-filter">
			<label>Filter by year</label>
			<select
				name="years"
				value={props.selected}
				onChange={dropdownChangeHandler}
			>
				<option value="2022">2022</option>
				<option selected value="2021">
					2021
				</option>
				<option value="2020">2020</option>
				<option value="2019">2019</option>
				<option value="2018">2018</option>
			</select>
		</div>
	);
};

export default ExpenseFilter;

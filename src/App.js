import Expenses from "./components/Expenses/Expenses";

const App = () => {
	const expenses = [
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
	];
	return (
		<div className="App">
			<h2>Let's get started</h2>
			<Expenses expenses={[...expenses]} />
		</div>
	);
};

export default App;

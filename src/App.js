import PrimeReact from "primereact/api";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";

// STYLES
import "./App.scss";

function App() {
	PrimeReact.ripple = true;

	return (
		<div className="App">
			<div>header</div>
			<main>routes</main>
			<div>footer</div>
		</div>
	);
}

export default App;

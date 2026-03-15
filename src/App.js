import "assets/scss/vars.scss";

import PrimeReact from "primereact/api";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";

// ROUTES
import AllRoutes from "routes";

// STYLES
import "./App.scss";

function App() {
	PrimeReact.ripple = true;

	return (
		<div className="App">
			<AllRoutes />
		</div>
	);
}

export default App;

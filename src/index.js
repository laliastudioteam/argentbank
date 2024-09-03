import React from "react";
// Import React-dom
import ReactDOM from "react-dom/client";
// Import styles
import "./index.css";
// Import components
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

reportWebVitals();

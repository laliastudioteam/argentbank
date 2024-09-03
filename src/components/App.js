import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// Import Redux
import {Provider} from "react-redux";
import {store} from "../app/store";

// Import components
import Nav from "./Nav";
import Footer from "./Footer";

// Import pages
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import User from "../pages/User";

// Import styles
import "../styles/App.css";
const fakeData = 0;

function App() {
	return (
		<Provider store={store}>
			<React.StrictMode>
				<div>
					<Router>
						<Nav />
						<div className="main-container">
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/user" element={<User />} />
								<Route path="/user:id" element={<User />} />
								<Route path="/home" element={<Home />} />
								<Route path="/signin" element={<Signin />} />
							</Routes>
						</div>
						<Footer />
					</Router>
				</div>
			</React.StrictMode>
		</Provider>
	);
}

export default App;

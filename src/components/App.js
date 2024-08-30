import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//Components
import Nav from "./Nav";
import Footer from "./Footer";

// Pages
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import User from "../pages/User";

import "../styles/App.css";
const fakeData = 0;

function App() {
	return (
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
							<Route path="/signin" element={<Signin unlog={true} />} />
						</Routes>
					</div>
					<Footer />
				</Router>
			</div>
		</React.StrictMode>
	);
}

export default App;

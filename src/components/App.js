import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//Components
import Header from "./Header";
import Footer from "./Footer";

// Pages
import Home from "../pages/Home";

import "../styles/App.css";
const fakeData = 0;

function App() {
	return (
		<React.StrictMode>
			<div>
				<Router>
					<Header />
					<div className="main-container">
						<Routes>
							<Route path="/" element={<Home fake={fakeData} />} />
							<Route path="/:id" element={<Home fake={fakeData} />} />
							<Route path="/home" element={<Home fake={fakeData} />} />
						</Routes>
					</div>
					<Footer />
				</Router>
			</div>
		</React.StrictMode>
	);
}

export default App;

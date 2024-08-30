import React from "react";

import "../styles/Header.css";
import EditUser from "../components/EditUser";

function Header() {
	return (
		<div className="header">
			<h1>
				Welcome back
				<br />
				Tony Jarvis 2!
			</h1>
			<EditUser />
		</div>
	);
}

export default Header;

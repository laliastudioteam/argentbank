import React from "react";
// Import Redux
import {useSelector} from "react-redux";
// Import styles
import "../styles/Header.css";
// Import components
import EditUser from "../components/EditUser";

function Header() {
	const userProfile = useSelector(state => state.auth.userProfile);
	if (!userProfile) {
		return <div>Loading</div>;
	}
	return (
		<div className="header">
			<h1>
				Welcome back
				<br />
				{userProfile.firstName} {userProfile.lastName}
			</h1>
			<EditUser />
		</div>
	);
}

export default Header;

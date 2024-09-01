import React from "react";
import {useSelector} from "react-redux";

import "../styles/Header.css";
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

import "../styles/Nav.css";
import React from "react";
import {NavLink} from "react-router-dom";

function Nav() {
	return (
		<>
			<div>
				<NavLink
					to="/signin"
					className={({isActive}) => (isActive ? "main-nav-item" : "main-nav-item")}
				>
					<i class="fa fa-user-circle"></i>
					Sign In
				</NavLink>
				<NavLink
					to="/user"
					className={({isActive}) => (isActive ? "main-nav-item" : "main-nav-item")}
				>
					<i class="fa fa-user-circle"></i>
					Tony
				</NavLink>
				<NavLink
					to="/signin"
					className={({isActive}) => (isActive ? "main-nav-item" : "main-nav-item")}
				>
					<i class="fa fa-sign-out"></i>
					Sign out
				</NavLink>
			</div>
		</>
	);
}
export default Nav;

import "../styles/Nav.css";
import React from "react";
import {NavLink} from "react-router-dom";

import logoHeader from "../assets/logos/argentBankLogo.png";

function Nav() {
	return (
		<>
			<nav className="main-nav">
				<NavLink to="./home">
					<img src={logoHeader} className="main-nav-logo-image" alt="ArgentBank" />
				</NavLink>

				<h1 className="sr-only">Argent Bank</h1>
				<div>
					<NavLink
						to="/signin"
						className={({isActive}) => (isActive ? "main-nav-item" : "main-nav-item")}
					>
						<i className="fa fa-user-circle"></i>
						Sign In
					</NavLink>
					<NavLink
						to="/user"
						className={({isActive}) => (isActive ? "main-nav-item" : "main-nav-item")}
					>
						<i className="fa fa-user-circle"></i>
						Tony
					</NavLink>
					<NavLink
						to="/signin"
						className={({isActive}) => (isActive ? "main-nav-item" : "main-nav-item")}
					>
						<i className="fa fa-sign-out"></i>
						Sign out
					</NavLink>
				</div>
			</nav>
		</>
	);
}
export default Nav;

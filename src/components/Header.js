import React from "react";
import {NavLink} from "react-router-dom";

import "../styles/Header.css";

import logoHeader from "../assets/logos/argentBankLogo.png";

import Nav from "../components/Nav";

function Header() {
	return (
		<div className="header">
			<div className="header-content">
				<nav class="main-nav">
					<NavLink to="./home">
						<img src={logoHeader} className="main-nav-logo-image" alt="ArgentBank" />
					</NavLink>

					<h1 class="sr-only">Argent Bank</h1>

					<div>
						<a class="main-nav-item" href="./sign-in.html">
							<i class="fa fa-user-circle"></i>
							Sign In
						</a>
					</div>
				</nav>
			</div>
		</div>
	);
}

export default Header;

import React from "react";
// Import Redux
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../features/auth/authSlice";
// Import React-dom
import {NavLink, useNavigate} from "react-router-dom";
// Import styles
import "../styles/Nav.css";
// Import Pictures
import logoHeader from "../assets/logos/argentBankLogo.png";

function Nav() {
	const dispatch = useDispatch();
	const token = useSelector(state => state.auth.token);
	const navigate = useNavigate();
	const userProfile = useSelector(state => state.auth.userProfile);

	const handleLogout = () => {
		dispatch(logout());
	};
	console.log(userProfile);
	return (
		<>
			<nav className="main-nav">
				<NavLink to="./home">
					<img src={logoHeader} className="main-nav-logo-image" alt="ArgentBank" />
				</NavLink>
				<h1 className="sr-only">Argent Bank</h1>
				{token ? (
					<div>
						<NavLink
							to="/user"
							className={({isActive}) => (isActive ? "main-nav-item" : "main-nav-item")}
						>
							<i className="fa fa-user-circle"></i>
							{userProfile ? userProfile.firstName : "Not connected"}
						</NavLink>
						<NavLink
							to="/home"
							onClick={handleLogout}
							className={({isActive}) => (isActive ? "main-nav-item" : "main-nav-item")}
						>
							<i className="fa fa-sign-out"></i>
							Sign out
						</NavLink>
					</div>
				) : (
					<div>
						<NavLink
							to="/signin"
							className={({isActive}) => (isActive ? "main-nav-item" : "main-nav-item")}
						>
							<i className="fa fa-user-circle"></i>
							Sign In
						</NavLink>
					</div>
				)}
			</nav>
		</>
	);
}
export default Nav;

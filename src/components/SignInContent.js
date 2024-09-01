import React, {useState} from "react";

import {useDispatch, useSelector} from "react-redux";

import {loginUser, fetchUserProfile} from "../features/auth/authSlice";

import {useNavigate} from "react-router-dom";

import InputWrapper from "../components/InputWrapper";
import CheckBox from "../components/CheckBox";

function SignInContent() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();

	const navigate = useNavigate();
	const {loading, error, token} = useSelector(state => state.auth);

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(loginUser({email, password}))
			.unwrap()
			.then(() => {
				dispatch(fetchUserProfile()); // Récupérer les informations utilisateur après la connexion
				navigate("/user"); // Rediriger après la récupération des données
			})
			.catch(err => console.error("Failed to login:", err));
	};

	return (
		<section className="sign-in-content">
			<i className="fa fa-user-circle sign-in-icon"></i>
			<h1>Sign In</h1>
			<form onSubmit={handleSubmit}>
				<InputWrapper label="Username" type="text" textId="email" onChange={setEmail} />
				<InputWrapper
					label="Password"
					type="password"
					textId="password"
					onChange={setPassword}
				/>
				<CheckBox data={{label: "Remember me", textid: "remember-me"}} />
				<button type="submit" className="sign-in-button" disabled={loading}>
					{loading ? "loading" : "Sign In"}
				</button>
				{error && <p style={{color: "red"}}>Error : {error}</p>}
			</form>
		</section>
	);
}

export default SignInContent;

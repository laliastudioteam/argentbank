import React from "react";
import {useEffect} from "react";
// Import components
import SignInContent from "../../components/SignInContent.js";
// Import styles
import "../../styles/SignInContent.css";

function Signin() {
	return (
		<main className="main bg-dark">
			<SignInContent />
		</main>
	);
}
export default Signin;

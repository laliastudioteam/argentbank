import React from "react";

import InputWrapper from "../components/InputWrapper";
import CheckBox from "../components/CheckBox";

function SignInContent() {
	return (
		<section className="sign-in-content">
			<i className="fa fa-user-circle sign-in-icon"></i>
			<h1>Sign In</h1>
			<form>
				<InputWrapper data={{label: "username", textId: "username"}} />
				<InputWrapper data={{label: "password", textId: "password"}} />
				<CheckBox data={{label: "Rember me", textid: "remember-me"}} />
				<button className="sign-in-button">Sign In</button>
			</form>
		</section>
	);
}

export default SignInContent;

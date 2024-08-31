import React from "react";

import "../styles/InputUser.css";

function InputUser(d) {
	const {label, textId} = d.data;
	return <input className="input-user" type="text"></input>;
}

export default InputUser;

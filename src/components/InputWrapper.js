import React from "react";

import "../styles/InputWrapper.css";

function inputWrapper(d) {
	const {label, textId} = d.data;
	return (
		<div className="input-wrapper">
			<label for={textId}>{label}</label>
			<input type="text" id={textId} />
		</div>
	);
}
export default inputWrapper;

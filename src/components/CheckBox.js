import React from "react";

import "../styles/CheckBox.css";

function CheckBox(d) {
	const {label, titleId} = d.data;
	return (
		<div className="input-remember">
			<input type="checkbox" id={titleId} />
			<label htmlFor={titleId}>{label}</label>
		</div>
	);
}

export default CheckBox;

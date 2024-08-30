import React from "react";

import "../styles/CheckBox.css";

function CheckBox(d) {
	const {label, titleId} = d.data;
	return (
		<div class="input-remember">
			<input type="checkbox" id={titleId} />
			<label for={titleId}>{label}</label>
		</div>
	);
}

export default CheckBox;

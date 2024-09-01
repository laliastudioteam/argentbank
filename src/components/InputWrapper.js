import React from "react";

import "../styles/InputWrapper.css";

const inputWrapper = ({label, type, textId, onChange}) => {
	return (
		<div className="input-wrapper">
			<label htmlFor={textId}>{label}</label>
			<input
				type={type}
				id={textId}
				onChange={(e, test) => onChange(e.target.value)}
			/>
		</div>
	);
};
export default inputWrapper;

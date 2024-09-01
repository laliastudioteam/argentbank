import React from "react";

import "../styles/InputUser.css";

function InputUser(d) {
	console.log(d);
	const {data, onChange} = d;
	const {textId, placeholder} = data;
	console.log(onChange);
	return (
		<input
			className="input-user"
			name={textId}
			type="text"
			placeholder={placeholder}
			onChange={onChange}
		></input>
	);
}

export default InputUser;

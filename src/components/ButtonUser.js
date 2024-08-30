import React from "react";

import "../styles/ButtonUser.css";

function ButtonUser(d) {
	const {type, text, action} = d.data;
	if (type === "editButton") {
		return <button className="edit-button">{text}</button>;
	} else {
		return <button className="form-button">{text}</button>;
	}
}
export default ButtonUser;

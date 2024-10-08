import React, {useState} from "react";
// Import Redux
import {useDispatch} from "react-redux";
import {toggleFormVisibility} from "../features/form/FormSlice";
// Import styles
import "../styles/ButtonUser.css";

function ButtonUser(d) {
	const {type, text, action} = d.data;

	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(toggleFormVisibility());
	};

	if (type === "editButton") {
		return (
			<button onClick={handleClick} className="edit-button">
				{text}
			</button>
		);
	} else if (type === "cancelButton") {
		return (
			<button onClick={handleClick} className="form-button">
				{text}
			</button>
		);
	} else {
		return <button className="form-button">{text}</button>;
	}
}
export default ButtonUser;

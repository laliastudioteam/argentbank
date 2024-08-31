import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {toggleFormVisibility} from "../features/form/FormSlice";

import "../styles/ButtonUser.css";

function ButtonUser(d) {
	const {type, text, action} = d.data;

	const dispatch = useDispatch();

	const handleClick = () => {
		console.log("click");
		dispatch(toggleFormVisibility());
	};

	if (type === "editButton") {
		return (
			<button onClick={handleClick} className="edit-button">
				{text}
			</button>
		);
	} else {
		return <button className="form-button">{text}</button>;
	}
}
export default ButtonUser;

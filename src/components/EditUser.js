import React from "react";
import {useSelector} from "react-redux";

import "../styles/EditUser.css";

import ButtonUser from "../components/ButtonUser";
import InputUser from "../components/InputUser";

function EditUser() {
	const isFormVisible = useSelector(state => state.form.isFormVisible);
	function onSubmit(event) {
		console.log("form submit");
		event.preventDefault();

		// custom form handling here
	}
	return (
		<>
			{!isFormVisible && (
				<ButtonUser data={{type: "editButton", text: "Edit user", action: "test"}} />
			)}
			{isFormVisible && (
				<form className="formUser" onSubmit={onSubmit}>
					<div className="formUser-line">
						<div className="formUser-line-column formUser-line-column-left">
							<InputUser data={{label: "forename", textId: "forename"}} placeholder="Tony" />
						</div>
						<div className="formUser-line-column formUser-line-column-right">
							<InputUser data={{label: "name", textId: "name"}} placeholder="Jarvis" />
						</div>
					</div>
					<div className="formUser-line">
						<div className="formUser-line-column formUser-line-column-left">
							<ButtonUser data={{type: "formButton", text: "Save", action: "test"}} />
						</div>
						<div className="formUser-line-column formUser-line-column-right">
							<ButtonUser data={{type: "cancelButton", text: "Cancel", action: "test"}} />
						</div>
					</div>
				</form>
			)}
		</>
	);
}
export default EditUser;

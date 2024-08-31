import React from "react";
import {useSelector} from "react-redux";

import "../styles/EditUser.css";

import ButtonUser from "../components/ButtonUser";
import InputUser from "../components/InputUser";

function EditUser() {
	const isFormVisible = useSelector(state => state.form.isFormVisible);

	return (
		<>
			<ButtonUser data={{type: "editButton", text: "Edit user", action: "test"}} />
			{isFormVisible && (
				<form>
					<InputUser data={{label: "forename", textId: "forename"}} />
					<InputUser data={{label: "name", textId: "name"}} />
					<ButtonUser data={{type: "formButton", text: "Save", action: "test"}} />
					<ButtonUser data={{type: "formButton", text: "Cancel", action: "test"}} />
				</form>
			)}
		</>
	);
}
export default EditUser;

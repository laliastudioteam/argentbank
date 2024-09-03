import React, {useState} from "react";
// Import Redux
import {useSelector, useDispatch} from "react-redux";
import {updateUserProfile} from "../features/auth/authSlice";
// Import styles
import "../styles/EditUser.css";
// Import components
import ButtonUser from "../components/ButtonUser";
import InputUser from "../components/InputUser";

function EditUser() {
	const dispatch = useDispatch();
	const isFormVisible = useSelector(state => state.form.isFormVisible);

	const userProfile = useSelector(state => state.auth.userProfile);
	console.log(userProfile.firstName + userProfile.lastName);
	const [firstName, setFirstName] = useState(userProfile.firstName);
	const [lastName, setLastName] = useState(userProfile.lastName);

	function consolog(event) {
		console.log(event);
	}

	function onSubmit(event) {
		event.preventDefault();

		console.log("voila ce que je veux mettre a jour" + firstName + lastName);
		// Envoyer les nouvelles données au backend via Redux
		dispatch(updateUserProfile({firstName, lastName}));
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
							<InputUser
								data={{
									label: "firstname",
									textId: "firstname",

									placeholder: userProfile.firstName,
								}}
								value={firstName}
								onChange={e => setFirstName(e.target.value)}
							/>
						</div>
						<div className="formUser-line-column formUser-line-column-right">
							<InputUser
								data={{
									label: "lastname",
									textId: "lastname",
									placeholder: userProfile.lastName,
								}}
								value={lastName}
								onChange={e => setLastName(e.target.value)}
							/>
						</div>
					</div>
					<div className="formUser-line">
						<div className="formUser-line-column formUser-line-column-left">
							<ButtonUser data={{type: "formButton", text: "Save"}} />
						</div>
						<div className="formUser-line-column formUser-line-column-right">
							<ButtonUser data={{type: "cancelButton", text: "Cancel"}} />
						</div>
					</div>
				</form>
			)}
		</>
	);
}
export default EditUser;

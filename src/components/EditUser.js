import "../styles/EditUser.css";

import ButtonUser from "../components/ButtonUser";
import InputUser from "../components/InputUser";

function EditUser() {
	return (
		<>
			<ButtonUser data={{type: "editButton", text: "Edit user", action: "test"}} />

			<form>
				<InputUser data={{label: "forename", textId: "forename"}} />
				<InputUser data={{label: "name", textId: "name"}} />
				<ButtonUser data={{type: "formButton", text: "Save", action: "test"}} />
				<ButtonUser data={{type: "formButton", text: "Cancel", action: "test"}} />
			</form>
		</>
	);
}
export default EditUser;

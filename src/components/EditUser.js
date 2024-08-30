import "../styles/EditUser.css";

import InputUser from "../components/InputUser";

function EditUser() {
	return (
		<>
			<buttonUser />

			<form>
				<InputUser data={{label: "forename", textId: "forename"}} />
				<InputUser data={{label: "name", textId: "name"}} />
			</form>
		</>
	);
}
export default EditUser;

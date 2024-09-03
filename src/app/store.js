import {configureStore} from "@reduxjs/toolkit";

import formReducer from "../features/form/FormSlice";
import authReducer from "../features/auth/authSlice";

const preloadedState = {
	auth: {
		token: localStorage.getItem("authToken"),
		loading: false,
		error: null,
	},
};

export const store = configureStore({
	reducer: {
		form: formReducer,
		auth: authReducer,
	},
});

export default store;

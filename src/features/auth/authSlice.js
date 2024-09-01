import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
	"auth/loginUser",
	async ({email, password}, thunkAPI) => {
		try {
			const response = await fetch("http://localhost:3001/api/v1/user/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({email, password}),
			});

			if (response.ok) {
				const data = await response.json();
				return data["body"].token;
			} else {
				return thunkAPI.rejectWithValue(response.statusText);
			}
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const fetchUserProfile = createAsyncThunk(
	"auth/fetchUserProfile",
	async (_, thunkAPI) => {
		const token = thunkAPI.getState().auth.token;
		console.log("Bearer " + token);
		const response = await fetch("http://localhost:3001/api/v1/user/profile", {
			method: "POST",
			headers: {
				Authorization: "Bearer " + token,
				"Content-Type": "application/json",
			},
		});

		const data = await response.json();

		if (!response.ok) {
			return thunkAPI.rejectWithValue(data.message);
		}

		return data.body;
	}
);

export const updateUserProfile = createAsyncThunk(
	"auth/updateUserProfile",

	async (profileData, thunkAPI) => {
		const token = thunkAPI.getState().auth.token;
		console.log(profileData);
		const response = await fetch("http://localhost:3001/api/v1/user/profile", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(profileData),
		});

		const data = await response.json();
		console.log(data);

		if (!response.ok) {
			return thunkAPI.rejectWithValue(data.message);
		}

		return data.body;
	}
);

const authSlice = createSlice({
	name: "auth",
	initialState: {
		token: null,
		loading: false,
		error: null,
		userProfile: null,
	},
	reducers: {
		logout: state => {
			state.token = null;
			state.error = null;
			state.userProfile = null;
			localStorage.removeItem("authToken");
		},
	},
	extraReducers: builder => {
		builder
			.addCase(loginUser.pending, state => {
				state.loading = true;
				state.error = null;
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.token = action.payload;
				state.loading = false;
				localStorage.setItem("authToken", action.payload);
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload || "Failed to login";
			})
			.addCase(fetchUserProfile.pending, state => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchUserProfile.fulfilled, (state, action) => {
				state.userProfile = action.payload;
				state.loading = false;
			})
			.addCase(fetchUserProfile.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload || "Failed to fetch user profile";
			})
			.addCase(updateUserProfile.fulfilled, (state, action) => {
				state.userProfile = action.payload;
			})
			.addCase(updateUserProfile.rejected, (state, action) => {
				state.error = action.payload;
			});
	},
});

export const {logout} = authSlice.actions;
export default authSlice.reducer;

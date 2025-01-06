import { api, requestConfig } from "../utils/config";

// Get user details
const profile = async (data, token) => {
	const config = requestConfig("GET", data, token);

	try {
		const response = await fetch(`${api}/users/profile`, config);
		const data = await response.json();

		return data;
	} catch (error) {
		console.log(error);
	}
};

// Update user details
const updateProfile = async (data, token) => {
	const config = requestConfig("PUT", data, token, true);

	try {
		const response = await fetch(`${api}/users/`, config);
		const data = await response.json();

		return data;
	} catch (error) {
		console.log(error);
	}
};

const userService = {
	profile,
	updateProfile,
};

export default userService;

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

// Get user details by id
const getUserDetails = async (id) => {
	const config = requestConfig("GET");

	console.log(id);

	try {
		const response = await fetch(`${api}/users/${id}`, config);
		const data = await response.json();

		console.log(data);

		return data;
	} catch (error) {
		console.log(error);
	}
};

const userService = {
	profile,
	updateProfile,
	getUserDetails,
};

export default userService;

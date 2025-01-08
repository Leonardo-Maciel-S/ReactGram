import { api, requestConfig } from "../utils/config";

// Register an user
const register = async (data) => {
	const config = requestConfig("POST", data);

	try {
		const response = await fetch(`${api}/users/register`, config);
		const data = await response.json();

		if (data._id) {
			localStorage.setItem("user", JSON.stringify(data));
		}

		return data;
	} catch (error) {
		console.log(error);
	}
};

// Logout an user
const logout = () => {
	localStorage.removeItem("user");
};

// Sign in an user
const login = async (data) => {
	const config = requestConfig("POST", data);

	try {
		const response = await fetch(`${api}/users/login`, config);
		const data = await response.json();

		if (data._id) {
			localStorage.setItem("user", JSON.stringify(data));
		}

		return data;
	} catch (error) {
		console.log(error);
	}
};

const authService = {
	register,
	logout,
	login,
};

export default authService;

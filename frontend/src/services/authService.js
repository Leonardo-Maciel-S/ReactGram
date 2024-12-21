import { api, requestConfig } from "../utils/config";

// Register an user
const register = async (data) => {
	const config = requestConfig("POST", data);

	try {
		const res = await fetch(`${api}/user/register`, config);
		const data = await res.json();

		if (data) {
			localStorage.setItem("user", JSON.stringify(data));
		}
	} catch (error) {
		console.log(error);
	}
};

const authService = {
	register,
};

export default authService;

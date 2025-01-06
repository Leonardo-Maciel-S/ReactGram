import { api, requestConfig } from "../utils/config";

const photoService = {};

// Publish an user photo
const publishPhoto = async (data, token) => {
	const config = requestConfig("POST", data, token, true);

	try {
		const response = await fetch(`${api}/photos`, config);
		const data = await response.json();

		return data;
	} catch (error) {
		console.log(error);
	}
};

export default photoService;

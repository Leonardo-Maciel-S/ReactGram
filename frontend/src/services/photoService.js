import { api, requestConfig } from "../utils/config";

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

// Get user photos
const getUserPhotos = async (id, token) => {
	const config = requestConfig("GET", null, token);
	try {
		const response = await fetch(`${api}/photos/user/${id}`, config);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

// Delete a photo
const deletePhoto = async (id, token) => {
	const config = requestConfig("DELETE", null, token);

	try {
		const response = await fetch(`${api}/photos/${id}`, config);
		const data = await response.json();

		return data;
	} catch (error) {
		console.log(error);
	}
};

const photoService = {
	publishPhoto,
	getUserPhotos,
	deletePhoto,
};

export default photoService;

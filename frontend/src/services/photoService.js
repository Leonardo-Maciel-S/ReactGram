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

// Update a photo
const updatePhoto = async (data, id, token) => {
	const config = requestConfig("PUT", data, token);
	console.log(token);

	try {
		const response = await fetch(`${api}/photos/${id}`, config);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

// Get a photo by id
const getPhoto = async (id, token) => {
	const config = requestConfig("GET", null, token);

	try {
		const response = await fetch(`${api}/photos/${id}`, config);
		const data = response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

// Like a photo
const like = async (id, token) => {
	const config = requestConfig("PUT", null, token);
	try {
		const response = await fetch(`${api}/photos/like/${id}`, config);
		const data = await response.json();

		return data;
	} catch (error) {
		console.log(error);
	}
};

// Add comment to a photo
const comment = async (data, id, token) => {
	const config = requestConfig("PUT", data, token);

	try {
		const response = await fetch(`${api}/photos/comment/${id}`, config);
		const data = await response.json();

		return data;
	} catch (error) {
		console.log(error);
	}
};

// Get all photos
const getPhotos = async (token) => {
	const config = requestConfig("GET", null, token);

	try {
		const response = await fetch(`${api}/photos`, config);
		const data = await response.json();

		return data;
	} catch (error) {
		console.log(error);
	}
};

// Search photo by title
const searchPhotos = async (query, token) => {
	const config = requestConfig("GET", null, token);

	try {
		const response = await fetch(`${api}/photos/search?q=${query}`);
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
	updatePhoto,
	getPhoto,
	like,
	comment,
	getPhotos,
	searchPhotos,
};

export default photoService;

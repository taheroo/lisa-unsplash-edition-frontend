import API from '../utils/api';

const getImages = () => {
	const endpoint = 'images';

	return API.get(endpoint)
		.then((response) => {
			return { success: true, data: response.data };
		})
		.catch((error) => {
			return { success: false, error: 'Unauthorized. Please try again.' };
		});
};

const createImage = (newImage) => {
	const endpoint = 'images';

	return API.post(endpoint, newImage)
		.then((response) => {
			return { success: true, data: response.data };
		})
		.catch((error) => {
			return { success: false, error: 'Unauthorized. Please try again.' };
		});
};

const deleteImage = (imageId, password) => {
	const endpoint = 'images/' + imageId;
	const payload = {
		password: password,
	};

	return API.delete(endpoint, { data: payload })
		.then((response) => {
			return { success: true, data: response.data };
		})
		.catch((error) => {
			return { success: false, error: 'Unauthorized. Please try again.' };
		});
};

export { createImage, getImages, deleteImage };

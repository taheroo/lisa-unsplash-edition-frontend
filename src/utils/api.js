import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001/';

const axiosInstance = axios.create({
	baseURL,
	headers: {
		'Content-Type': 'application/json',
	},
});
axiosInstance.interceptors.request.use(function (config) {
	const token = localStorage.getItem('token');
	config.headers.Authorization = token ? `Bearer ${token}` : '';
	return config;
});

export default axiosInstance;

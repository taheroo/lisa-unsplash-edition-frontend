import API from '../utils/api';

const performLogin = (email, password) => {
	const loginData = {
		email: email,
		password: password,
	};

	return API.post('auth/login', loginData)
		.then((response) => {
			const { token } = response.data;
			localStorage.setItem('token', token);
			return { success: true, data: response.data };
		})
		.catch((error) => {
			return { success: false, error: error.response.data.error };
		});
};

export default performLogin;

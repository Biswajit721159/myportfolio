import axios from "axios";
const api = process.env.REACT_APP_API;

const login = async (body) => {
	try {
		const response = await axios.post(`${api}/user/login`, body);
		return response.data;
	} catch (e) {
		throw new Error(e?.response?.data?.message || e?.message);
	}
};

const register = async (body = {}) => {
	try {
		const response = await axios.post(`${api}/user/register`, body);
		return response.data;
	} catch (e) {
		throw new Error(e?.response?.data?.message || e?.message);
	}
};

const forgotPassword = async (body = {}) => {
	try {
		const response = await axios.post(`${api}/user/forgotPassword`, body);
		return response.data;
	} catch (e) {
		throw new Error(e?.response?.data?.message || e?.message);
	}
};

const checkTokenData = async (token) => {
	try {
		const response = await axios.get(`${api}/user/getResetData/${token}`);
		return response.data;
	} catch (e) {
		throw new Error(e?.response?.data?.message || e?.message);
	}
};

const savePassword = async (body = {}) => {
	try {
		const response = await axios.post(`${api}/user/savePassword`, body);
		return response.data;
	} catch (e) {
		throw new Error(e?.response?.data?.message || e?.message);
	}
};

export { login, register, forgotPassword, checkTokenData, savePassword };

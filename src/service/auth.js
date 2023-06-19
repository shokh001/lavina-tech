import axios, { BaseUrl } from './api'
import { calculateHeaders } from '../utils'

const AuthService = {
	async userRegister(user) {
		const { data } = await axios({
			url: "/signup",
			method: "post",
			data: JSON.stringify(user),
		})
		return data
	},

	async getUser() {
		const method = 'GET';
		const { data } = await axios({
			baseURL: BaseUrl,
			url: '/myself',
			method,
			headers: calculateHeaders(method, '/myself', "")
		});
		return data
	}
}

export default AuthService

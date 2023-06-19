import axiosInstance from './api'
import { calculateHeaders } from '../utils'

const ArticleService = {
	async getArticles() {
		const method = 'GET';
		const { data } = await axiosInstance({
			url: '/books',
			method,
			headers: calculateHeaders(method, '/books', "")
		});
		return data
	},
	async postArticle(article) {
		const method = 'POST';
		const { data } = await axiosInstance({
			url: "books",
			method,
			data: article,
			headers: calculateHeaders(method, '/books', JSON.stringify(article))
		})
		return data
	},
	async deleteArticle(slug) {
		const method = 'DELETE';
		const { data } = await axiosInstance({
			url: `/books/${slug}`,
			method,
			headers: calculateHeaders(method, `/books/${slug}`, "")

		})
		return data
	},
	async editArticle(slug, article) {
		const method = 'PATCH';
		const { data } = await axiosInstance({
			url: `/books/${slug}`,
			method,
			data: article,
			headers: calculateHeaders(method, `/books/${slug}`, JSON.stringify(article))
		})
		return data
	},
}

export default ArticleService

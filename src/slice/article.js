import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isLoading: false,
	articles: [],
	error: null,
}

export const articleSlice = createSlice({
	name: 'article',
	initialState,
	reducers: {
		getArticlesStart: state => {
			state.isLoading = true
		},
		getArticleSuccess: (state, action) => {
			state.isLoading = false
			state.articles = action.payload
		},
		getArticleFailure: (state, action) => {
			state.error = action.payload
			state.isLoading = false
		},
		postArticleStart: state => {
			state.isLoading = true
		},
		postArticleSuccess: state => {
			state.isLoading = false
			state.error = null
		},
		postArticleFailure: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export const {
	getArticlesStart,
	getArticleSuccess,
	getArticleFailure,
	postArticleFailure,
	postArticleStart,
	postArticleSuccess,
} = articleSlice.actions
export default articleSlice.reducer

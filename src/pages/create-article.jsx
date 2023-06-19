import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ArticleService from '../service/article'
import ValidationError from '../components/validation-error'
import { postArticleFailure, postArticleStart, postArticleSuccess } from '../slice/article'
import ArticleForm from '../components/article-form'

const CreateArticle = () => {
	const [isbn, setIsbn] = useState('')
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { error } = useSelector(state => state.article)

	const formSubmit = async e => {
		e.preventDefault()
		const article = { isbn }
		dispatch(postArticleStart())
		try {
			await ArticleService.postArticle(article)
			dispatch(postArticleSuccess())
			navigate('/')
		} catch (error) {
			dispatch(postArticleFailure(error.response.data.message))
		}
	}

	const formProps = { item: isbn, setItem: setIsbn, label: "Isbn", formSubmit }

	return (
		<div className='text-center'>
			<h1 className='fs-2'>Create article</h1>
			<div className='w-75 mx-auto'>
				<ValidationError error={error} />
				<ArticleForm {...formProps} />
			</div>
		</div>
	)
}

export default CreateArticle

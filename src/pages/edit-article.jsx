import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import ArticleService from '../service/article'
import {
	postArticleFailure,
	postArticleStart,
	postArticleSuccess,
} from '../slice/article'
import ArticleForm from '../components/article-form'

const EditArticle = () => {

	const { articles } = useSelector(state => state.article)
	const { slug } = useParams()
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const initalStatus = articles?.data?.filter((p) => p.book.id === parseInt(slug))[0].status
	const [status, setStatus] = useState(initalStatus)

	const formSubmit = async e => {
		e.preventDefault()
		const article = { 'status': parseInt(status) }
		dispatch(postArticleStart())
		try {
			await ArticleService.editArticle(slug, article)
			dispatch(postArticleSuccess())
			navigate('/')
		} catch (error) {
			dispatch(postArticleFailure())
		}
	}

	const formProps = { item: status, label: "Status", setItem: setStatus, formSubmit }

	return (
		<div className='text-center'>
			<h1 className='fs-2'>Edit article</h1>			
			<div className='w-75 mx-auto'>
				<ArticleForm {...formProps} />
			</div>
		</div>
	)
}

export default EditArticle

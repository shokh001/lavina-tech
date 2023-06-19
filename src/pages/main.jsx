import { useDispatch, useSelector } from 'react-redux'
import { Loader } from '../ui'
import { useEffect } from 'react'
import { getArticlesStart, getArticleSuccess } from '../slice/article'
import ArticleService from '../service/article'
import ArticleCard from '../components/article-card'

const Main = () => {
	const dispatch = useDispatch()
	const { articles, isLoading } = useSelector(state => state.article)
	const getArticles = async () => {
		dispatch(getArticlesStart())
		try {
			const response = await ArticleService.getArticles()
			dispatch(getArticleSuccess(response))
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getArticles()
	}, [])

	return (
		<>
			{isLoading && <Loader />}
			<div className='album py-5 '>
				{
					articles?.data ? <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
						{articles?.data?.map(item => (
							<ArticleCard key={item.book.id} status={item.status} item={item.book} getArticles={getArticles} />
						))}
					</div> : <h2 className='text-center'>You don't have books! <br />Let`s create!</h2>
				}
			</div>
		</>
	)
}

export default Main

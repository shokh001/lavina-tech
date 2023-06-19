import { useNavigate } from 'react-router-dom'
import ArticleService from '../service/article'

const ArticleCard = ({ item, status, getArticles }) => {
	const navigate = useNavigate()

	const deleteArticle = async slug => {
		try {
			await ArticleService.deleteArticle(slug)
			getArticles()
		} catch (error) {
			console.log(error)
		}
	}

	const getStatus = (id) => {
		switch (id) {
			case 0: return "New"
			case 1: return "Reading"
			case 2: return "Finished"
			default: return 'Finished'
		}
	}

	return (
		<div className='col'>
			<div className='card h-100 shadow-sm book-card'>
				<img className='book-cover' src={item?.cover} alt="cover" />

				<span className={'status ' + getStatus(status)}>{getStatus(status)}</span>

				<div className='card-body'>
					<p className='card-text fw-bold'>{item?.title}</p>
					<p className='card-text fw-bold'>{item?.author}</p>
					<p className='card-text fw-bold'>{item?.published}</p>
					<p className='card-text fw-bold'>{item?.pages}</p>
				</div>
				<div className='card-footer d-flex justify-content-between align-item?s-center'>
					<div className='btn-group'>						
						<button
							onClick={() => navigate(`/edit-article/${item?.id}`)}
							type='button'
							className='btn btn-sm btn-outline-secondary'
						>
							Edit
						</button>
						<button type='button' className='btn btn-sm btn-outline-danger' onClick={() => deleteArticle(item?.id)}>
							Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ArticleCard

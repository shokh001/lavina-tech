import { useSelector } from 'react-redux'
import { Input } from '../ui'
import { useLocation } from 'react-router-dom'

const ArticleForm = props => {
	const { isLoading } = useSelector(state => state.article)
	const { item, setItem, label, formSubmit } = props
	const router = useLocation();

	return (
		<form className='mt-4' onSubmit={formSubmit}>			
			<Input label={label} name='isbn' state={item} setState={setItem} />
			<button className='w-100 btn btn-lg btn-primary mt-2' disabled={isLoading} type='submit'>
				{isLoading ? 'Loading...' : router.pathname === ('/create-article')? 'Create': 'Update'}
			</button>
		</form>
	)
}

export default ArticleForm

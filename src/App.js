import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { Main, Register, CreateArticle, EditArticle } from './pages'
import { Navbar } from './components'
import { getItem } from './helpers/persistance-storage'
import AuthService from './service/auth'
import { signUserSuccess } from './slice/auth'

const App = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const router = useLocation()

	const user = JSON.parse(getItem('user'))
	const getUser = async () => {
		try {
			const response = await AuthService.getUser()
			dispatch(signUserSuccess(response.data))
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		if (user) {
			navigate(router.pathname)
			getUser()
		} else navigate('/register')
	}, [])

	return (
		<div>
			{user && <Navbar />}
			<div className='container'>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/register' element={<Register />} />
					<Route path='/create-article' element={<CreateArticle />} />
					<Route path='/edit-article/:slug' element={<EditArticle />} />
				</Routes>
			</div>
		</div>
	)
}
export default App

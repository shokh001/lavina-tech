import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logo } from '../constants'
import { removeItem } from '../helpers/persistance-storage'
import { logoutUser } from '../slice/auth'

const Navbar = () => {
	const { loggedIn, user } = useSelector(state => state.auth)
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const logoutHandler = () => {
		dispatch(logoutUser())
		removeItem('user')
		navigate('/register')
	}

	return (
		<div className='d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3'>
			<Link to={'/'}>
				<img height={'100px'} width={'100px'} src={logo} alt='' />
			</Link>

			<nav className='d-inline-flex mt-2 mt-md-0 ms-md-auto'>
				{loggedIn ? (
					<>
						<div className='me-3 py-2 m-0 text-dark text-decoration-none'>{user.username}</div>
						<Link className='me-3 py-2 text-dark text-decoration-none btn btn-primary text-white' to={'/create-article'}>
							create book
						</Link>
						<button className='btn btn-outline-danger' onClick={logoutHandler}>
							Logout
						</button>
					</>
				) : (
					<>
						<Link className='me-3 py-2 text-dark text-decoration-none' to={'/register'}>
							Register
						</Link>
					</>
				)}
			</nav>
		</div>
	)
}

export default Navbar

import { useEffect, useState } from 'react'
import { icon } from '../constants'
import { Input } from '../ui'
import { useSelector, useDispatch } from 'react-redux'
import { signUserFailure, signUserStart, signUserSuccess } from '../slice/auth'
import AuthService from '../service/auth'
import { useNavigate } from 'react-router-dom'
import ValidationError from '../components/validation-error'

const Register = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [key, setKey] = useState('')
	const [secret, setSecret] = useState('')
	const [alert, setAlert] = useState('')
	const dispatch = useDispatch()
	const { isLoading, loggedIn, error } = useSelector(state => state.auth)
	const navigate = useNavigate()

	const registerHandler = async e => {
		e.preventDefault()
		if (name !== '' && email !== '', key !== '', secret !== '') {
			dispatch(signUserStart())
			const user = { name, email, key, secret }
			try {
				const response = await AuthService.userRegister(user)
				dispatch(signUserSuccess(response.data))
				navigate('/')
			} catch (error) {
				dispatch(signUserFailure(error.response.data.message))
			}
		} else {
			setAlert(true)
		}
	}

	useEffect(() => {
		if (loggedIn) {
			navigate('/')
		}
	}, [loggedIn])

	return (
		<div className='text-center mt-5'>
			<main className='form-signin w-25 m-auto'>
				<form>
					<img className='mb-2' src={icon} alt='' width='90' height='90' />
					<h1 className='h3 mb-3 fw-normal'>Please register</h1>

					<ValidationError error={error} />
					<Input alert={alert} setAlert={setAlert} name='name' label={'Name'} state={name} setState={setName} />
					<Input alert={alert} setAlert={setAlert} name='email' label={'Email address'} type='email' state={email} setState={setEmail} />
					<Input alert={alert} setAlert={setAlert} name='key' label={'Key'} type={'password'} state={key} setState={setKey} />
					<Input alert={alert} setAlert={setAlert} name='secret' label={'Secret'} type={'password'} state={secret} setState={setSecret} />

					<button className='w-100 btn btn-lg btn-primary mt-2' disabled={isLoading} onClick={registerHandler} type='submit'>
						{isLoading ? 'loading...' : 'Register'}
					</button>
				</form>
			</main>
		</div>
	)
}

export default Register

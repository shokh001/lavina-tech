
const ValidationError = ({error}) => {
	
	return (
		error !== null &&
		<div className='alert alert-danger m-1 p-1 mb-3 text-start' role='alert' key={error}>
			{error}
		</div>
	)
}

export default ValidationError

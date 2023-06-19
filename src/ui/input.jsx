const Input = ({ label, name, state, setState, type = 'text', alert = false, setAlert }) => {
	return (
		<>
			{
				alert && state === '' && <span className="text-danger m-1 d-block text-left">Required {label}*</span>
			}	
			<div className='form-floating'>
				<input
					name={name}
					type={type}
					className='form-control'
					value={state}
					onChange={e => { setAlert && setAlert(false); setState(e.target.value) }}
					placeholder={label}
				/>
				<label htmlFor={name}>{label}</label>
			</div>
		</>
	)
}

export default Input

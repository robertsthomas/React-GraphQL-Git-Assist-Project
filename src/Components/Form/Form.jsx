import React from 'react'

const Form = (props) => {
	
	const submit = (e) => {
		e.preventDefault()
		let searchValue = e.target.elements.searchValue.value.trim()
		props.onSubmit(searchValue)
	}

	const onFormChange = (e) => {
		props.onFormChange(e.target.value)
	}

	return (
		<div className="row justify-content-center">
			<div className="col-8">
				<form onSubmit={submit}>
					<input className="form-control form-control" name='searchValue' type="text" placeholder="Search" onChange={onFormChange} autoComplete='off'></input>
				</form>
			</div>
		</div>
	)
}

export default Form

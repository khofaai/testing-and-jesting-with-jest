import React, { Component } from 'react';

class HomePage extends Component {
	constructor(props) {
		super (props);

		this.state = {
			fields : {},
			fieldErrors : {}
		}

		this.validate = this.validate.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
	}
	
	handleSubmit (e) {
		e.preventDefault();
		console.log("Why you clicked me .. ? ");

		const err = this.validate(this.state.fields);

		this.setState({
			fieldErrors: err
		});

		if (Object.keys(err).length) return;
	}

	onInputChange (e) {
		const fields = this.state.fields;
		const newFields = {};
		newFields[e.target.name] = e.target.value;
		this.setState({
			fields: {...fields, ...newFields}
		});
	}

	validate(formData) {   
		const errors = {};
		if (!formData.name || formData.name === '' || formData.name === null) {
		  errors.name = 'Please type in your email.';
		}
		return errors;
	}

	render() {
		return (
			<form name="form" onSubmit={this.handleSubmit}>
				{/* <img src={logo} className="App-logo" alt="logo"/> */}
				<input 
					type="email" 
					name="Login" 
					placeholder="Login" 
					required
					value={this.state.fields.name || ''}
					onChange={ (e) => this.onInputChange(e)}
				/>
				<br/>
				<input 
					type="password" 
					name="password" 
					placeholder="Password" 
					onChange={ (e) => this.onInputChange(e)}
					required
				/>
				<br/>
				<button type="submit">Click me</button>
			</form>
		);
	}
}

export default HomePage;
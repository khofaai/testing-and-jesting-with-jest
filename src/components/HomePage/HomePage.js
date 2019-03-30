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

		this.setState({
			fieldErrors: this.validate(this.state.fields)
		});

		if ( !this.state.fieldErrors ) {
			console.log("Authentified.");
		} 
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
			console.log(formData.name);
		  errors.name = 'Please fill in the fields.';
		}
		return errors;
	}

	render() {
		return (
			<form name="form" onSubmit={this.handleSubmit}>
				{/* <img src={logo} className="App-logo" alt="logo"/> */}
				<input 
					type="email" 
					name="login" 
					placeholder="Login" 
					// required
					// value={this.state.fields.name || ''}
					onChange={ (e) => this.onInputChange(e)}
				/>
				<br/>
				<input 
					type="password" 
					name="password" 
					placeholder="Password" 
					onChange={ (e) => this.onInputChange(e)}
					// required
				/>
				<br/>
				<button type="submit">Click me</button>
				<p className="error">
				{this.state.fieldErrors.name}
				</p>
			</form>
		);
	}
}

export default HomePage;
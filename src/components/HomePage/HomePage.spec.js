import React from 'react';
import HomePage from './HomePage';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

 configure({ adapter: new Adapter() });


describe('<HomePage />', () => {
	let props, wrapper
  
	beforeEach(() => {
	  props = {
		handleFormSubmit: () => {
		},
	  };
	  wrapper = shallow(<HomePage {...props} />);
	});

	it('should have a `<form>` element', () => {
		expect(
		  wrapper.find('form').length
		).toBe(1);
	});

	describe('<form />', () => {
		it('`<form>` element should have a onSubmit attribute', () => {
		  expect(
			wrapper.props().onSubmit
		  ).toBeDefined();
		});
	
		it('onSubmit attribute should be of type `function`', () => {
		  expect(
			typeof wrapper.props().onSubmit === 'function'
		  ).toBe(true);
		});
	
		it('`<form>` element should have a first`<input />` element', () => {
		  expect(
			wrapper.find('form').childAt(0).type()
		  ).toBe('input');
		});

		it('`<form>` element should have a second `<input />` element', () => {
			expect(
			  wrapper.find('form').childAt(2).type()
			).toBe('input');
		});

		it('`<form>` element should have an `<input type="submit" />` element', () => {
			expect(
			  wrapper.find('form').childAt(4).type()
			).toBe('button');
		});
	
		describe('<input />', () => {

				//Login input
			it('`<input>` element should be of type `text`', () => {
			  expect(
				wrapper.find('form').childAt(0).props().type
			  ).toBe('email');
			});

			it('`<input>` element should have a placeholder attribute with value `Login`', () => {
				expect(
				  wrapper.find('form').childAt(0).props().placeholder
				).toBe('Login');
			});

			it('`<input>` element should be required', () => {
				expect(
				  wrapper.find('form').childAt(0).props().required
				).toBe(true);
			});

			it('should display an error when no value is input', () => {
				const handleFormSubmit = spy();
				wrapper = mount(<HomePage handleSubmit={handleFormSubmit} />);
				wrapper.find('form').simulate('submit');
				expect(
				  wrapper.state().fieldErrors.name
				).toBe('Please type in your email.');
			});

				//Password input
			it('`<input>` element should be of type `password`', () => {
				expect(
				  wrapper.find('form').childAt(2).props().type
				).toBe('password');
			});
		
			it('`<input>` element should have a placeholder attribute with value `Password`', () => {
				expect(
				  wrapper.find('form').childAt(2).props().placeholder
				).toBe('Password');
			});

			it('`<input>` element should be required', () => {
				expect(
				  wrapper.find('form').childAt(0).props().required
				).toBe(true);
			});

				//Submit Input
			
		});
	});
});
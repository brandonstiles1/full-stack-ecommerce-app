import React, { Component } from 'react';

import './sign-in.styles.scss';

// Components
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      email: '',
      password: ''
    })
  }

  render () {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email & password</span>

        <form onSubmit={ this.handleSubmit }>
          <FormInput
            name='email'
            value={ this.state.email }
            handleChange={ this.handleChange }
            label='email'
            required
          />
          <FormInput
            name='password'
            value={ this.state.password }
            handleChange={ this.handleChange }
            label='password'
            required
          />
          <CustomButton type='submit' value='Submit'>
            Sign In
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
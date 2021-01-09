import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            mail: '',
            password: ''
        }
    }

    onNameChange = (e) => {
        this.setState({name: e.target.value});
    }

    onPasswordChange = (e) => {
        this.setState({password: e.target.value});
    }

    onEmailChange = (e) => {
        this.setState({email: e.target.value});
    }

    onSubmitForm = () => {
        this.props.onRouteChange('home');
    }

    render() {
        return (
            <div className='form-page'>
                <form className='form' autoComplete='off'>
                    <h1>Register</h1>
                    <fieldset>
                        <label htmlFor='name'>Name:</label>
                        <input onChange={this.onNameChange} id='name' name='name' type='text'/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor='email'>Email:</label>
                        <input onchange={this.onEmailChange} id='email' name='email' type='email'/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor='password'>Password:</label>
                        <input onchange={this.onPasswordChange} id='password' name='password' type='password'/>
                    </fieldset>
                    <button>Signin</button>
                </form>
            </div>
        );
    }
}

export default Register;
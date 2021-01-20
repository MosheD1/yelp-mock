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

    onSubmitForm = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/register', {
            method: 'post',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.id) {
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
        });
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
                        <input onChange={this.onEmailChange} id='email' name='email' type='email'/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor='password'>Password:</label>
                        <input onChange={this.onPasswordChange} id='password' name='password' type='password'/>
                    </fieldset>
                    <button onClick={this.onSubmitForm}>Signin</button>
                </form>
            </div>
        );
    }
}

export default Register;
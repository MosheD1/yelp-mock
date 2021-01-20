import React from 'react';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    onEmailChange = (e) => {
        this.setState({email: e.target.value});
    }

    onPasswordChange = (e) => {
        this.setState({password: e.target.value});
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/signin', {
            method: 'post',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
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
        })
        .catch(console.log);
    }

    render() {
        return (
            <div className='form-page'>
                <form className="form" autoComplete='off'>
                    <h1>Sign In</h1>
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

export default Signin;
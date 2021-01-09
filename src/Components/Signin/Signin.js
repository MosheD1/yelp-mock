import React from 'react';
import './Signin.css';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: ''
        }
    }

    onNameChange = (e) => {
        this.setState({name: e.target.value});
    }

    onPasswordChange = (e) => {
        this.setState({password: e.target.value});
    }

    onSubmitForm = () => {
        this.props.onRouteChange('home');
    }

    render() {
        return (
            <div className='form-page'>
                <form className="form" autoComplete='off'>
                    <h1>Register</h1>
                    <fieldset>
                        <label htmlFor='name'>Name:</label>
                        <input onChange={this.onNameChange} id='name' name='name' type='text'/>
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

export default Signin;
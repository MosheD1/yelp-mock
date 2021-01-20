import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import MainPage from './Components/MainPage/MainPage';

const initialState = {
  route: 'signin',
  user: {
    id: '',
    name: '',
    email: '',
    joined: ''
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  onRouteChange = (name) => {
    if(name === 'signout') {
      this.setState(initialState);
    } else {
      this.setState({route: name});
    }
  }

  loadUser = (user) => {
    this.setState({user: {
      id: user.id,
      name: user.name,
      email: user.email,
      joined: user.joined
    }});
  }

  render() {
    return (
      <div>
        <Navigation onRouteChange={this.onRouteChange} route={this.state.route} />
        {
          this.state.route === 'home'
            ? <MainPage user={this.state.user} subRoute={this.state.subRoute} />
            :(this.state.route === 'signin'
                ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
            )  
        }
      </div>
    );
  }
}

export default App;

import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import MainPage from './Components/MainPage/MainPage';

const initialState = {
  route: 'home',
  user: {
    name: ''
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
    }
    this.setState({route: name});
  }

  render() {
    return (
      <div>
        <Navigation onRouteChange={this.onRouteChange} route={this.state.route} />
        {
          this.state.route === 'home'
            ? <MainPage user={this.state.user} subRoute={this.state.subRoute} />
            :(this.state.route === 'signin'
                ? <Signin onRouteChange={this.onRouteChange}/>
                : <Register onRouteChange={this.onRouteChange} />
            )  
        }
      </div>
    );
  }
}

export default App;

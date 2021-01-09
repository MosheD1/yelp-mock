import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import CardList from './Components/CardList/CardList';
import BussinessPage from './Components/BussinessPage/BussinessPage';
import ReviewPage from './Components/ReviewPage/ReviewPage';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import Business from './Components/Business/Business';

const initialState = {
  route: 'register',
  subRoute: 'Review',
  user: {
    name: ''
  },
  bussiness: {
    name: '',
    intro: '',
    comments: []
  },
  bussinessList: []
}

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  onRouteChange = (name) => {
    this.setState({route: name});
  }

  onSubRoueChange = (name) => {
    this.setState({subRoute: name});
  }

  onBussinessCardClick = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`)
    .then(res => res.json())
    .then(bussinessData => {
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${bussinessData[0].id}`)
      .then(resp => resp.json())
      .then(bussinessComments => this.setState({bussiness: {
          name: bussinessData[0].name,
          intro: 'doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in',
          comments: bussinessComments
        }
      }));
      this.onSubRoueChange('bussiness');
    }).then(a => console.log(this.state))
    .catch(err => console.log(err));
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/comments?_start=0&_limit=10')
      .then(response => response.json())
      .then(data => this.setState({bussinessList: data}));
  }

  render() {
    return (
      <div>
        <Navigation route={this.state.route} />
        {
          this.state.route === 'home'
            ? (this.state.subRoute === 'main'
              ? <CardList bussinesList={this.state.bussinessList} getBussiness={this.onBussinessCardClick}/>
              : (
                this.state.subRoute === 'Review'
                ? <ReviewPage onSubRoueChange={this.onSubRoueChange} />
                : <BussinessPage onSubRoueChange={this.onSubRoueChange} bussiness={this.state.bussiness}/>
              ))
            :(this.state.route === 'signin'
                ? <Signin onRouteChange={this.onRouteChange}/>
                : <Business onRouteChange={this.onRouteChange} />
            )  
        }
      </div>
    );
  }
}

export default App;

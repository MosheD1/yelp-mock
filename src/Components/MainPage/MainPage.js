import React from 'react';
import StartPage from '../StartPage/StartPage'
import BussinessPage from '../BussinessPage/BussinessPage';
import ReviewPage from '../ReviewPage/ReviewPage';
import Business from '../Business/Business';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subRoute: 'main',
            bussiness: {
              name: '',
              intro: '',
              comments: []
            }
        }
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
        this.onSubRoueChange('BusinessPage');
    }).then(a => console.log(this.state))
    .catch(err => console.log(err));
    }

    render() {
        if(this.state.subRoute === 'main') {
            return (
                <StartPage onSubRoueChange={this.onSubRoueChange} bussinessList={this.state.bussinessList} onBussinessCardClick={this.onBussinessCardClick}/>
            );
        } else if(this.state.subRoute === 'Review') {
            return (
                <ReviewPage onSubRoueChange={this.onSubRoueChange} businessName={this.state.bussiness.name}/>
            );
        } else if(this.state.subRoute === 'BusinessPage') {
            return (
                <BussinessPage onSubRoueChange={this.onSubRoueChange} bussiness={this.state.bussiness}/>
            );
        } else if(this.state.subRoute === 'AddBusiness') {
            return (
                <Business onSubRoueChange={this.onSubRoueChange} bussiness={this.state.bussiness}/>
            );
        }
    }
}

export default MainPage;
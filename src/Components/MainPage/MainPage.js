import React from 'react';
import StartPage from '../StartPage/StartPage'
import BussinessPage from '../BussinessPage/BussinessPage';
import ReviewPage from '../ReviewPage/ReviewPage';
import Business from '../Business/Business';

const mainPageState = {
    subRoute: 'main',
    business: {
        id: '',
        name: '',
        country: '',
        city: '',
        street: '',
        picture: '',
        category: '',
        description: '',
        phoneNumber: ''
    },
    reviews: []
}

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = mainPageState;
    }

    onSubRoueChange = (name) => {
        if(name === 'main') {
            this.setState(mainPageState);    
        } else {
            this.setState({subRoute: name});
        }
    }

    loadBusiness = (business) => {
        this.setState({business: {
            id: business.id,
            name: business.name,
            country: business.country,
            city: business.city,
            street: business.street,
            picture: business.picture,
            category: business.category,
            description: business.description,
            phoneNumber: business.phoneNumber
        }});
    }

    loadReviews = (reviews) => {
        this.setState({reviews: reviews});
    }

    onBussinessCardClick = (id) => {
        fetch(`http://localhost:3001/business/${id}`)
        .then(res => res.json())
        .then(bussinessData => {
            fetch(`http://localhost:3001/review/${bussinessData.id}`)
            .then(resp => resp.json())
            .then(bReviews => {
                this.setState({reviews: bReviews});
            });
            
            this.loadBusiness(bussinessData);
            this.onSubRoueChange('BusinessPage');
        })
        .catch(err => console.log(err));
    }

    render() {
        if(this.state.subRoute === 'main') {
            return (
                <StartPage onSubRoueChange={this.onSubRoueChange} onBussinessCardClick={this.onBussinessCardClick}/>
            );
        } else if(this.state.subRoute === 'Review') {
            return (
                <ReviewPage onSubRoueChange={this.onSubRoueChange} user={this.props.user} business={this.state.business} loadReviews={this.loadReviews}/>
            );
        } else if(this.state.subRoute === 'BusinessPage') {
            return (
                <BussinessPage onSubRoueChange={this.onSubRoueChange} business={this.state.business} reviews={this.state.reviews}/>
            );
        } else if(this.state.subRoute === 'AddBusiness') {
            return (
                <Business onSubRoueChange={this.onSubRoueChange} loadBusiness={this.loadBusiness}/>
            );
        }
    }
}

export default MainPage;
import React from 'react';
import CardList from '../CardList/CardList';
import './StartPage.css';

class StartPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchField: '',
            bussinessList: []
        }
    }

    onSearchChange = (e) => {
        this.setState({searchField: e.target.value});
    }

    componentDidMount() {
    fetch('http://localhost:3001/businesses')
        .then(response => response.json())
        .then(data => this.setState({bussinessList: data}));
    }

    render() {
        let filteredBusiness = this.state.bussinessList.filter(b => {
            return b.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        
        return (
            <div className='start-page'>
                <div className='tc searchbox-container'>
                    <input className='searchbox' onChange={this.onSearchChange} type="text" placeholder='search me'/>
                </div>
                {
                    filteredBusiness.length !== 0 
                    ? <CardList bussinesList={filteredBusiness} getBussiness={this.props.onBussinessCardClick}/>
                    : <button  onClick={() => this.props.onSubRoueChange('AddBusiness')}>Add New Bussiness</button>
                }
            </div>
        );
    }
}

export default StartPage;
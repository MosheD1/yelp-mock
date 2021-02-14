import React from 'react';
import CommentList from '../CommentList/CommentList';
import './BussinessPage.css'

const BussinessPage = ({business, reviews, onSubRoueChange}) => {
    return (
        <div className='bpage'>
            <div>
                <div className='bdetails'>
                    <div className='bimg-container'>
                        <img alt='' src={business.picture} />
                    </div>
                    <h1>{business.name}</h1>
                    <p className='description'>{business.description}</p>
                    <button className='return-button' onClick={() => onSubRoueChange('main')}>Back</button>
                    <button onClick={() => onSubRoueChange('Review')}>Write A Review</button>
                </div>
                <CommentList reviews={reviews}/>
            </div>
        </div>
    );
}

export default BussinessPage;
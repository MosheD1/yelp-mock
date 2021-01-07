import React from 'react';
import CommentList from '../CommentList/CommentList';
import './BussinessPage.css'

const BussinessPage = ({bussiness, onSubRoueChange}) => {
    return (
        <div className='bpage'>
            <div>
                <div className='bdetails'>
                    <div className='bimg-container'>
                        <img alt='' src='https://images.unsplash.com/photo-1609253119912-b3cee27b7ef8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' />
                    </div>
                    <h1>{bussiness.name}</h1>
                    <p className='description'>{bussiness.intro}</p>
                    <button onClick={() => onSubRoueChange('Review')}>Write A Review</button>
                </div>
                <CommentList comments={bussiness.comments}/>
            </div>
        </div>
    );
}

export default BussinessPage;
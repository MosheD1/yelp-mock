import React from 'react';
import './Comment.css';

const Comment = ({user, review}) => {
    return (
        <div className='comment'>
            <p className='name'>{user}</p>
            <div className="commnet-rating">
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
            </div>
            <p className='content-body'>{review}</p>
        </div>
    );
}

export default Comment;
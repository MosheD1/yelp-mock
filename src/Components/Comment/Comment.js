import React from 'react';
import './Comment.css';

const Comment = ({user, comment}) => {
    return (
        <div className='comment'>
            <p className='name'>{user}</p>
            <div className="rating">
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star "></span>
            </div>
            <p className='content-body'>{comment}</p>
        </div>
    );
}

export default Comment;
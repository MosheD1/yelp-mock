import React from 'react';
import './Comment.css';

const Comment = ({user, review, rating}) => {
    const rateStars =[];
    for (let i = 0; i < 5; i++) {
        if (rating > i) {
            rateStars.push(<span key={i} className="fa fa-star red"></span>);
            continue;
        }
        
        rateStars.push(<span key={i} className="fa fa-star"></span>);
    }

    return (
        <div className='comment'>
            <p className='name'>{user}</p>
            <div className="commnet-rating">
                {
                    rateStars
                }
            </div>
            <p className='content-body'>{review}</p>
        </div>
    );
}

export default Comment;
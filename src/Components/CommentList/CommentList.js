import React from 'react';
import Comment from '../Comment/Comment';
import './CommentList.css';

const CommentList = ({reviews}) => {
    return (
        <div className='comment-section'>
            <h3>Recommended Reviews</h3>
            {
                reviews.map((c, i) => {
                    return <Comment key={i} user={c.name} review={c.content}/>
                })
            }
        </div>
    );
}

export default CommentList;
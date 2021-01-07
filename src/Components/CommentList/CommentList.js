import React from 'react';
import Comment from '../Comment/Comment';
import './CommentList.css';

const CommentList = ({comments}) => {
    return (
        <div className='comment-section'>
            <h3>Recommended Reviews</h3>
            {
                comments.map((c, i) => {
                    return <Comment key={i} user={c.name} comment={c.body}/>
                })
            }
        </div>
    );
}

export default CommentList;
import React from 'react';
import './Card.css';

const Card = ({name, description, getBussiness, id}) => {
    return (
        <div className='card' onClick={() => getBussiness(id)}>
            <div className='card-container'>
                <div className='img-container'>
                    <img src='https://images.unsplash.com/photo-1609253119912-b3cee27b7ef8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' alt='bussiness' />
                </div>
                <div className='intro'>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
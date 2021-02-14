import React from 'react';
import './Card.css';

const Card = ({name, picture, description, getBussiness, id}) => {
    return (
        <div className='card' onClick={() => getBussiness(id)}>
            <div className='card-container'>
                <div className='img-container'>
                    <img src={picture} alt='bussiness' />
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
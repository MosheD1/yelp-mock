import React from 'react';
import Card from '../Card/Card';
import './CardList.css';

const CardList = ({bussinesList, getBussiness}) => {
    return (
        <div className='container card-list'>
            {
                bussinesList.map((b, i) => {
                    return <Card key={i} name={b.name} description={b.body} id={b.id} getBussiness={getBussiness}/>
                })
            }
        </div>
    );
}

export default CardList;
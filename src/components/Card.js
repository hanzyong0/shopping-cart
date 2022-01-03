import React from 'react';
import { useParams } from 'react-router-dom';
import { getItem } from '../data';

function Card() {
  const params = useParams();
  const card = getItem(parseInt(params.itemId, 10));
  return (
    <div className='card'>
      <div className='card-container'>
        <div className='card-image'>
          <img src={card.img} alt={card.name}></img>
        </div>
        <div className='card-details'>
          <div className='card-name'>
            {card.name}
          </div>
          <div className='card-effect'>
            {card.effect}
          </div>
          <div className='card-price'>
            Price: {card.price}
          </div>
          <input type="number"></input>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Card

import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getItem } from '../data';

function Card({ cart, setCart, handleChange }) {
  const params = useParams();
  const card = getItem(parseInt(params.itemId, 10));

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/shop')
  };

  const [price, setPrice] = useState(card.price);

  const priceChange = (e) => {
    setPrice(card.price * e.target.value)
  };

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
            Price: {price}
          </div>
          <form onSubmit={handleSubmit}>
            <input
              name={card.name}
              type="number"
              min="1"
              onChange={e => { priceChange(e); handleChange(e); }}
            >
            </input>
            <button type="submit">Add to Cart</button>
          </form>
        </div>
      </div>
    </div >
  )
}

export default Card

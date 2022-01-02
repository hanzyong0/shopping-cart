import React from 'react';
import { useParams } from 'react-router-dom';
import { getItem } from '../data';

function Item() {
  const params = useParams();
  const item = getItem(parseInt(params.itemId, 10));
  return (
    <div>
      <p>{item.name}</p>
    </div>
  )
}

export default Item

import React from 'react';

function Item(props) {
  const { name, effect, handleChange } = props;


  return (
    <div className='item'>
      <div className='item-name'>{name}:
        <span className='item-effect'>{effect}</span>
      </div>
      <input
        type="number"
        name={name}
        onChange={handleChange}
      >
      </input>
    </div>
  )
}

export default Item
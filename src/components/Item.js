import React from 'react';

function Item(props) {
  const { name, handleChange } = props;


  return (
    <div className='item'>
      <div>{name}</div>
      <input type="number" name={name} onChange={handleChange}></input>
    </div>
  )
}

export default Item
import React from 'react';

const Card = ({ el }) => {
  return (
    <div className='card'>
      <img src={el.image} alt={el.name} />
      <h1>{el.name}</h1>
      <h1>${el.price}</h1>
    </div>
  );
}

export default Card;

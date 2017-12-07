import React from 'react';
import './card.css';

const Card = ({name, planet, population, species, itemData, location,}) => {
 console.log(itemData)
  return (
    <div className="card">
      <h3>{name}</h3>
      <h4>{planet}</h4>
      <h4>{population}</h4>
      <h5>{species}</h5>
      {
        location === 'planets' &&
        <h2>{itemData.terrrain}</h2>
      }
    </div>
  )
}

export default Card;

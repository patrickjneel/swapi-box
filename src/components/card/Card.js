import React from 'react';
import './card.css';
import Imperial_Emblem from '../../Imperial_Emblem.svg';
const Card = ( {itemData, location, addFavorite} ) => {

  let mapped;

  if(location === 'planets') {
    if(itemData.residents.length) {
    mapped = itemData.residents.map(people => {
      return <div>{people}</div>

    })
      
    } else {
      mapped = 0;
    }

  }
 
  return (
    <div className="card">
    <div className="top-card">
      <h3>{itemData.name}</h3>
      <img 
        onClick={() => addFavorite()}
        src={Imperial_Emblem}/>
    </div>
      { 
        location === 'people' &&
        <div className="card-data">
          <h4>Planet:</h4> <h5>{itemData.homeworld}</h5>
          <h4>Population:</h4> <h5>{itemData.population}</h5>
          <h4>Species:</h4> <h5>{itemData.species}</h5>
        </div>
      }
      {
        location === 'planets' &&
        <div className="card-data">
          <h4>Terrain:</h4> <h5>{itemData.terrrain}</h5>
          <h4>Climate:</h4> <h5>{itemData.climate}</h5>
          <h4>Residents:</h4> <h5>{mapped}</h5>
        </div>
      }
      {
        location === 'vehicles' &&
        <div className="card-data">
         <h4>Model:</h4> <h5>{itemData.model}</h5>
         <h4>Class:</h4> <h5>{itemData.class}</h5>
         <h4>Passengers:</h4> <h5>{itemData.passengers}</h5>

        </div>
      }
    </div>
  )
}

export default Card;

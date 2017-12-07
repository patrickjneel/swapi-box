import React from 'react';
import './card.css';
import Imperial_Emblem from '../../Imperial_Emblem.svg';
const Card = ( {itemData, location, addFavorite} ) => {
  
  return (
    <div className="card">
      <h3>Name: {itemData.name}</h3>
      <img 
        onClick={() => addFavorite()}
        src={Imperial_Emblem}/>
      { 
        location === 'people' &&
        <div className="card-data">
          <h4>Planet: {itemData.homeworld}</h4>
          <h4>Population: {itemData.population}</h4>
          <h4>Species: {itemData.species}</h4>
        </div>
      }
      {
        location === 'planets' &&
        <div className="card-data">
          <h4>Terrain: {itemData.terrrain}</h4>
          <h4>Climate: {itemData.climate}</h4>
          <h5>Residents: {itemData.resdients}</h5>
        </div>
      }
      {
        location === 'vehicles' &&
        <div className="card-data">
         <h4>Model: {itemData.model}</h4>
         <h4>Class: {itemData.class}</h4>
         <h4>Passengers: {itemData.passengers}</h4>

        </div>
      }
    </div>
  )
}

export default Card;

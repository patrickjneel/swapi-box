import React from 'react';
import './card.css';
import Imperial_Emblem from '../../Imperial_Emblem.svg';
const Card = ( {itemData, location, addFavorite} ) => {
console.log(itemData.residents)
  let mapped;
  if(itemData === 'planets') {
    let mapped = itemData.residents.map(people => {
      console.log(people)
    })
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
          <h4> Residents: {mapped}</h4>
          
          
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

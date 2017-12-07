import React from 'react';
import Card from '../card/Card';
import './cardContainer.css';

const CardContainer = ({itemData, location, addFavorite}) => {
  const persons = itemData.map(card => {
    return <Card
            itemData={card}
            key={card.name}
            addFavorite={addFavorite}
            location={location}
            name={card.name}
            planet={card.homeworld}
            population={card.population}
            species={card.species}
           />
  })
  
  return (
     <div className="container">
     {persons}
    </div>
  )
}

export default CardContainer;

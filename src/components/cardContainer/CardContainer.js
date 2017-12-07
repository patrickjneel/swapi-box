import React from 'react';
import Card from '../card/Card';

const CardContainer = ({itemData}) => {
  
  const persons = itemData.map(person => {
    return <Card
            key={person.name}
            name={person.name}
            planet={person.homeworld}
            population={person.population}
            species={person.species} 
           />
  })
  return (
     <div className="container">
     {persons}
    </div>
  )
}

export default CardContainer;

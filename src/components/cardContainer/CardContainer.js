import React from 'react';
import Card from '../card/Card';

const CardContainer = ({peopleData}) => {
  const persons = peopleData.map(person => {
    return <Card
            name={person.name}
            planet={person.homeworld}
            population={person.population}
            species={person.species} 
            />
  })
  return (
    <div>
     {persons}
    </div>
  )
}

export default CardContainer;

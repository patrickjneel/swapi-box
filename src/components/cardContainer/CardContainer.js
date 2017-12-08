import React from 'react';
import Card from '../card/Card';
import './cardContainer.css';
import PropTypes from 'prop-types';

const CardContainer = ({itemData, location, addFavorite}) => {
  const persons = itemData.map(card => {
    return <Card
      itemData={card}
      key={card.name}
      addFavorite={addFavorite}
      location={location}
    />;
  });
  
  return (
    <div className="container">
      {persons}
    </div>
  );
};

export default CardContainer;

CardContainer.propTypes = {
  itemData: propTypes.object,
  location: propTypes.string,
  addFavorite: propTypes.func
};

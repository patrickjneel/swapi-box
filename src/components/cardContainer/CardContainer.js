import React from 'react';
import Card from '../card/Card';
import './cardContainer.css';
import PropTypes from 'prop-types';

const CardContainer = ({itemData, location, updateFavorite, favorites}) => {
  // const favorites = favorties.map(favorite => {
  //   return <Card />
  // })
  const persons = itemData.map(card => {
    return <Card
      itemData={card}
      key={card.name}
      updateFavorite={updateFavorite}
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
  itemData: PropTypes.array,
  location: PropTypes.string,
  updateFavorite: PropTypes.func
};

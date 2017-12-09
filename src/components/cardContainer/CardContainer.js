import React from 'react';
import Card from '../card/Card';
import './cardContainer.css';
import PropTypes from 'prop-types';

const CardContainer = ({itemData, location, updateFavorite, favorites}) => {
  
  const persons = itemData.map(card => {
    let favoritedCard = favorites.find(favorite => favorite.name === card.name)
    let imperialClass = favoritedCard ? 'imperial favorited' : 'imperial';  
    return <Card
      itemData={card}
      key={card.name}
      updateFavorite={updateFavorite}
      location={location}
      type={imperialClass}
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

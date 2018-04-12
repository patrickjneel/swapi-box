import React from 'react';
import Card from '../card/Card';
import './cardContainer.css';
import PropTypes from 'prop-types';

const CardContainer = ({itemData, location, updateFavorite, favorites}) => {
  console.log(itemData)
  if(location === 'home') {
    return (
      <img className="at-at" src={require("../../at-at.gif")} />
    )
  } else if(!itemData.length) {
    return (
      <img className="droid" src={require("../../tiefighter.gif")} />
    )
  }
  else {
  const persons = itemData.map(card => {
    let favoritedCard = favorites.find(favorite => favorite.name === card.name);
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
}
export default CardContainer;

CardContainer.propTypes = {
  itemData: PropTypes.array,
  location: PropTypes.string,
  updateFavorite: PropTypes.func,
  favorites: PropTypes.array

};

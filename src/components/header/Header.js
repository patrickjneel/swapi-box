import React from 'react';
import './header.css';
import PropTypes from 'prop-types';


const Header = ({upDateData, favorites, location, showHome}) => {
  let peopleClass = location === 'people' ? 'selected' : 'unselected';
  let planetClass = location === 'planets' ? 'selected' : 'unselected';
  let vehicleClass = location === 'vehicles' ? 'selected' : 'unselected';
  let favoriteClass = location === 'favorites' ? 'selected' : 'unselected';
  let starshipClass = location === 'starShips' ? 'selected' : 'unselected';
  let homeClass = location === 'home' ? 'selected' : 'unselected';

  return (
    <div className="header">
      <button 
        onClick={() => upDateData('home')}
        className={homeClass}
      >
        Home
      </button>
      <button 
        onClick={() => upDateData('people')} 
        className={peopleClass}>
       People
      </button>
      <button 
        onClick={() => upDateData('planets')}
        className={planetClass}>
       Planets
      </button>
      <button 
        onClick={() => upDateData('vehicles')}
        className={vehicleClass}>
        Vehicles
      </button>
      <button 
        onClick={() => upDateData('starShips')}
        className={starshipClass}>
        Star Ships
      </button>
      <button 
        onClick={() => upDateData('favorites')}
        className={favoriteClass}>
       Favorites {favorites}
      </button>
    </div>
  );
};

export default Header;

Header.propTypes = {
  upDateData: PropTypes.func,
  favorites: PropTypes.number,
  location: PropTypes.string
};

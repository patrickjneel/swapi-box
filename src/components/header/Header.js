import React from 'react';
import './header.css';
import PropTypes from 'prop-types';


const Header = ({upDateData, favorites}) => {
  // let classChange = upDateData ? 'unselected' : 'selected'

  return (
    <div className="header">
      <button onClick={() => upDateData('people')}>
       People
      </button>
      <button onClick={() => upDateData('planets')}>
       Planets
      </button>
      <button onClick={() => upDateData('vehicles')}>
       Vehicles
      </button>
      <button onClick={() => upDateData('favorites')}>
       Favorites {favorites}
      </button>
    </div>
  );
};

export default Header;

Header.propTypes = {
  upDateData: PropTypes.func,
  favorites: PropTypes.number
};

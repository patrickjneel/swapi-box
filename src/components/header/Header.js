import React from 'react';
import './header.css';
import PropTypes from 'prop-types';


const Header = ({upDateData, favorites}) => {
 
  return (
    <div className="header">
      <button onClick={(event) => upDateData('people')}>
       People
      </button>
      <button onClick={(event) => upDateData('planets')}>
       Planets
      </button>
      <button onClick={(event) => upDateData('vehicles')}>
       Vehicles
      </button>
      <button onClick={(event) => upDateData('favorites')}>
       Favorites {favorites}
      </button>
    </div>
  );
};

export default Header;

Header.propTypes = {
  upDateData: PropTypes.func
};

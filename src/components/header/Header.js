import React from 'react';
import './header.css';


const Header = ({fetchPeople}) => {
  return (
    <div className="header">
      <button onClick={() => fetchPeople()}>
       People
      </button>
      <button>
       Planets
      </button>
      <button>
       Vehicles
      </button>
      <button>
       Favorites
      </button>
    </div>
  )
}

export default Header;

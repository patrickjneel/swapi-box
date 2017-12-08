import React from 'react';
import './scrolling-text.css';

const Scrolling = ({film}) => {
  const { title, crawl, episodeNumber } = film;
  const epNumerial = {  
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII'
  };

  return (
    <div className="scrolling-area">
      <div className="scroll-text">
        <h3>{title}</h3>
        <h5>EPISODE {epNumerial[episodeNumber]}</h5>
        <h4>{crawl}</h4>
      </div>
    </div>
  );
};

export default Scrolling;

 

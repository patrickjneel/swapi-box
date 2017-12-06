import React from 'react';
import './scrolling-text.css';

const Scrolling = ({titleName, scrollCrawl, episodeNumber}) => {

  const epNumerial = {
      1: 'I',
      2: 'II',
      3: 'III',
      4: 'IV',
      5: 'V',
      6: 'VI',
      7: 'VII'
    }
  return (
    <div className="scrolling-area">
     <div className="scroll-text">
        <h3>{titleName}</h3>
        <h5>EPISODE {epNumerial[episodeNumber]}</h5>
        <h4>{scrollCrawl}</h4>
     </div>
    </div>
  )
}

export default Scrolling;

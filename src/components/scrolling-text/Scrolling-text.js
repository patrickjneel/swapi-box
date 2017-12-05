import React from 'react';
import './scrolling-text.css';

const Scrolling = ({titleName, scrollCrawl, episodeNumber}) => {
  return (
    <div className="scrolling-area">
     <div className="scroll-text">
        <h4>{scrollCrawl}</h4>
        <h3>{titleName}</h3>
        <h5>{episodeNumber}</h5>
     </div>
    </div>
  )
}

export default Scrolling;

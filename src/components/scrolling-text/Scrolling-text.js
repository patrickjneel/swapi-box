import React from 'react';
import './scrolling-text.css';

const Scrolling = ({titleName, scrollCrawl, episodeNumber}) => {
  return (
    <div className="scrolling-area">
      <h3>{titleName}</h3>
      <h5>{episodeNumber}</h5>
      <h4>{scrollCrawl}</h4>

    </div>
  )
}

export default Scrolling;

import React, { Component } from 'react';
import './App.css';
import Scrolling from './components/scrolling-text/Scrolling-text';

class App extends Component {
  constructor() {
    super();
    this.state = {
      scrollingText: ''
    }
  }

  async componentDidMount() {
    const randFilm = Math.floor(Math.random() * (7) + 1);
    const fetchedData = await fetch(`https://swapi.co/api/films/${randFilm}/`)
    const data = await fetchedData.json()
    const title = data.title
    const crawl = data.opening_crawl
    const episodeNumber = data.episode_id
    
    this.setState({ title, crawl, episodeNumber })
  }

  
  render() {
    return (
      <div className="App">
        <Scrolling />
       
      </div>
    );
  }
}

export default App;

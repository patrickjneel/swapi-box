import React, { Component } from 'react';
import './App.css';
import Scrolling from './components/scrolling-text/Scrolling-text';
import Header from './components/header/Header';
import CardContainer from './components/cardContainer/CardContainer';
import Card from './components/card/Card';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      crawl: '',
      episodeNumber: ''
      
    }
    this.fetchPeople = this.fetchPeople.bind(this);
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

  fetchPeople() {
    console.log('click');
  }
  
  render() {
    return (
      <div className="App">
      <div className="top">
        <Scrolling 
          titleName={this.state.title}
          scrollCrawl={this.state.crawl}
          episodeNumber={this.state.episodeNumber}
        />
      </div>
      <div className="bottom">
        <Header fetchPeople={this.fetchPeople}/>
        <CardContainer />
        <Card />
      </div>
       
      </div>
    );
  }
}

export default App;

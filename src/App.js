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
      episodeNumber: '',
      people: []
  
    }
    this.fetchPeople = this.fetchPeople.bind(this);
  }

  async componentDidMount() {
    const randFilm = Math.floor(Math.random() * (7) + 1);
    const fetchedData = await fetch(`https://swapi.co/api/films/${randFilm}/`);
    const data = await fetchedData.json();
    const title = data.title
    const crawl = data.opening_crawl
    const episodeNumber = data.episode_id
    const people = await this.fetchPeople()
    this.setState({ title, crawl, episodeNumber, people })
  }

  async fetchPeople() {
    const peopleData = await fetch('https://swapi.co/api/people/')
    const people = await peopleData.json();
    const peopleArray = await people.results;
    const mappedPeople = await peopleArray.map(async(person) => {
      let homeWorldFetch = await fetch(person.homeworld);
      let homeWorldData = await homeWorldFetch.json();
      let speciesFetch = await fetch (person.species);
      let speciesData = await speciesFetch.json();
      return Object.assign({}, {homeworld: homeWorldData.name}, {name:person.name}, {species:speciesData.name} , {population: homeWorldData.population})

    });
        return Promise.all(mappedPeople)
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
        <Header 
          fetchPeople={this.fetchPeople}
        />
        <CardContainer 
          peopleData={this.state.people}
        />
      </div>
       
      </div>
    );
  }
}

export default App;

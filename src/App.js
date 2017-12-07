import React, { Component } from 'react';
import './App.css';
import Scrolling from './components/scrolling-text/Scrolling-text';
import Header from './components/header/Header';
import CardContainer from './components/cardContainer/CardContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      crawl: '',
      episodeNumber: '',
      people: [],
      vehicles: [],
      planets: [],
      location: 'people'
  
    }
      this.upDateData = this.upDateData.bind(this)    
  }

  upDateData(event) {
    this.setState({location: event.target.innerText.toLowerCase()})
    
  }

  async componentDidMount() {
    const randFilm = Math.floor(Math.random() * (7) + 1);
    const fetchedData = await fetch(`https://swapi.co/api/films/${randFilm}/`);
    const data = await fetchedData.json();
    const title = data.title
    const crawl = data.opening_crawl
    const episodeNumber = data.episode_id
    const people =  await this.fetchPeople()
    const vehicles = await this.fetchVehicles();
    const planets =  await this.fetchPlanets();
    this.setState({ title, crawl, episodeNumber, people, vehicles, planets })
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
        return Promise.all(mappedPeople);
  }

  async fetchVehicles() {
    const vehicleFetch = await fetch('https://swapi.co/api/vehicles/');
    const vehicleData = await vehicleFetch.json();
    const vehicleResults = await vehicleData.results;
    const vehicleMapped =  vehicleResults.map(vehicle => {
   
      return Object.assign({}, {name: vehicle.name}, {model: vehicle.model}, {class: vehicle.vehicle_class}, {passengers: vehicle.passengers})
    })
     
      return Promise.all(vehicleMapped);
  }

  async fetchPlanets() {
    const planetFetch = await fetch('https://swapi.co/api/planets/');
    const planetData = await planetFetch.json();
    const mappedPlanets = planetData.results.map(async(planet) => {
    const planetRes = planet.residents;
    const planetFetch = await this.planetResidents(planetRes)
    return Object.assign({name: planet.name}, {terrrain: planet.terrain}, {climate: planet.climate}, {population: planet.population}, {residents: ''})
    })
    return Promise.all(mappedPlanets)
  }

  async planetResidents(planetRes) {
    const residents = planetRes.map(async(resident) => {
    const fetchRes = await fetch(resident)
    const resData = await fetchRes.json();
    return resData.name 
    })
    return Promise.all(residents)
  }
  
  render() {
    console.log(this.state)

    const arrayToRender = this.state.location;

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
          upDateData={this.upDateData}
        />
        <CardContainer 
          peopleData={this.state[arrayToRender]}
        />
      </div>
       
      </div>
    );
  }
}

export default App;

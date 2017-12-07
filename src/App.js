import React, { Component } from 'react';
import './App.css';
import Scrolling from './components/scrolling-text/Scrolling-text';
import Header from './components/header/Header';
import CardContainer from './components/cardContainer/CardContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      film: '',
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
    const film = await this.fetchFilm();
    const people =  await this.fetchPeople()
    const vehicles = await this.fetchVehicles();
    const planets =  await this.fetchPlanets();
    this.setState({ film, people, vehicles, planets })
  }

  async fetchFilm() {
    const randFilm = Math.floor(Math.random() * (7) + 1);
    const fetchedData = await fetch(`https://swapi.co/api/films/${randFilm}/`);
    const data = await fetchedData.json();
    return Object.assign({}, {title: data.title}, {crawl: data.opening_crawl}, {episodeNumber: data.episode_id})
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
    const planetFetch = await this.planetResidents(planetRes);

    return Object.assign({name: planet.name}, {terrrain: planet.terrain}, {climate: planet.climate}, {population: planet.population}, {residents: planetFetch});
    })

    return Promise.all(mappedPlanets)
  }

  async planetResidents(planetRes) {
    const residents = planetRes.map(async(resident) => {
    const fetchResident = await fetch(resident);
    const residentData = await fetchResident.json();

    return residentData.name

    })

    return Promise.all(residents)
  }
  
  render() {
    
    const arrayToRender = this.state.location;

    return (
      <div className="App">
      <div className="top">
        <Scrolling 
          film={this.state.film}
          
        />
      </div>
      <div className="bottom">
        <Header 
          upDateData={this.upDateData}
        />
        <CardContainer 
          itemData={this.state[arrayToRender]}
          location={this.state.location}
        />
      </div>
       
      </div>
    );
  }
}

export default App;

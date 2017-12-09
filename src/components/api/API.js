async function fetchFilm() {
try {
    const randFilm = Math.floor(Math.random() * (7) + 1);
    const fetchedData = await fetch(`https://swapi.co/api/films/${randFilm}/`);
    const data = await fetchedData.json();
    return Object.assign({}, {title: data.title}, {crawl: data.opening_crawl}, {episodeNumber: data.episode_id})
  }
 catch (e) {
  const error = new Error('didnt work to well');
  return error;
  }
}

  async function fetchPeople() {
    try {
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
    catch (e) {
      const error = new Error('didnt work to well');
      return error;
    }
  }

  async function fetchVehicles() {
    try {
    const vehicleFetch = await fetch('https://swapi.co/api/vehicles/');
    const vehicleData = await vehicleFetch.json();
    const vehicleResults = await vehicleData.results;
    const vehicleMapped =  vehicleResults.map(vehicle => {
   
      return Object.assign({}, {name: vehicle.name}, {model: vehicle.model}, {class: vehicle.vehicle_class}, {passengers: vehicle.passengers})
    })
     
      return Promise.all(vehicleMapped);
    }
    catch (e) {
      const error = new Error('didnt work to well');
      return error;
    }
  }

  async function fetchPlanets() {
    try {
    const planetFetch = await fetch('https://swapi.co/api/planets/');
    const planetData = await planetFetch.json();
    const mappedPlanets = planetData.results.map(async(planet) => {
    const planetRes = planet.residents;

    const planetFetch = await planetResidents(planetRes);

    return Object.assign({name: planet.name}, {terrrain: planet.terrain}, {climate: planet.climate}, {population: planet.population}, {residents: planetFetch });
    })

    return Promise.all(mappedPlanets)
    }
    catch (e) {
      const error = new Error('didnt work to well');
      return error;
    }
  }

  async function planetResidents(planetRes) {
    try {
    const residents = planetRes.map(async(resident) => {
    const fetchResident = await fetch(resident);
    const residentData = await fetchResident.json();

    return residentData.name

    })

    return Promise.all(residents)
    }
    catch (e) {
      const error = new Error('didnt work to well');
      return error;
    }
  }

export default {fetchFilm, fetchPeople, fetchVehicles, fetchPlanets, planetResidents};

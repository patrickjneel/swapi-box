 import APIFunction from '../components/api/API';
 import mockApi from './mockAPI';

 const {fetchFilm, fetchPeople, fetchVehicles, fetchPlanets, planetResidents} = APIFunction;

 const {peopleData, planetData, vehicleData} = mockApi;



describe('Fetch People Tests', () => {

  beforeEach(() => {
    window.fetch = 
      jest.fn().mockImplementation(() => 
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(
            {results: peopleData.results}
          ),
        }))
      });
  

  it('should be called with the correct params', async () => {
    const mockData = peopleData;
    const expected = [
    'https://swapi.co/api/people/',
    ];

    fetchPeople();
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it('should return the data if the status code is good', () => {
    const expectedResponse = [{"homeworld": undefined, "name": "Luke Skywalker", "population": undefined, "species": undefined}];

    expect(fetchPeople()).resolves.toEqual(expectedResponse);
  })

});

describe('Fetch Vehicle Tests', () => {

  beforeEach(() => {
    window.fetch = 
      jest.fn().mockImplementation(() => 
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(
            {results: vehicleData.results}
          ),
        }))
      });
  

  it('should be called with the correct params', async () => {
  const mockData = vehicleData;
  const expected = [
   'https://swapi.co/api/vehicles/',
  ];
  fetchVehicles();
  expect(window.fetch).toHaveBeenCalledWith(...expected)
 })

  it('should return the data if the status code is good', () => {
    const expectedResponse = [{"class": "wheeled", "model": "Digger Crawler", "name": "Sand Crawler", "passengers": "30"}]

    expect(fetchVehicles()).resolves.toEqual(expectedResponse);
  })

});

describe('Fetch Planet Tests', () => {

  beforeEach(() => {
    window.fetch = 
      jest.fn().mockImplementation(() => 
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(
            {results: planetData.results}
          ),
        }))
      });
  

  it('should be called with the correct params', async () => {
  const mockData = planetData;
  const expected = [
  'https://swapi.co/api/planets/',
  ];
    fetchPlanets();
  expect(window.fetch).toHaveBeenCalledWith(...expected)
 })

 it('should return the data if the status code is good', () => {
    const expectedResponse = [{"climate": "temperate", "name": "Alderaan", "population": "2000000000", "residents": [undefined, undefined, undefined], "terrrain": "grasslands, mountains"}]

    expect(fetchPlanets()).resolves.toEqual(expectedResponse);
  })


});

 

 


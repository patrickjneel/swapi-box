 import API from '../components/api/API';
 import mockApi from './mockAPI';

 const {fetchFilm, fetchPeople, fetchVehicles, fetchPlanets, planetResidents} = API;

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
  

  it('should fetch people data', async () => {
    const mockData = peopleData;
    const expected = [
    'https://swapi.co/api/people/',
    ];

    fetchPeople();
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

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
  

  it('should fetch vehicle data', async () => {
  const mockData = vehicleData;
  const expected = [
   'https://swapi.co/api/vehicles/',
  ];
  fetchVehicles();
  expect(window.fetch).toHaveBeenCalledWith(...expected)
 })

});

describe('Fetch Planet Tests', () => {

  beforeEach(() => {
    window.fetch = 
      jest.fn().mockImplementation(() => 
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(
            {results: planetData}
          ),
        }))
      });
  

  it.skip('should fetch planet data', async () => {
  const mockData = planetData;
  const expected = [
  'https://swapi.co/api/planets/',
  ];
  planetResidents();
  fetchPlanets();
  expect(window.fetch).toHaveBeenCalledWith(...expected)
 })

});

 

 


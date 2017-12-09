 import API from '../components/api/API';
 import mockApi from './mockAPI';

 const {fetchFilm, fetchPeople, fetchVehicles, fetchPlanets, planetResidents} = API;

 const {peopleData, planetData, vehicleData, filmData, favorites} = mockApi;



describe('Fetch Tests', () => {
  beforeEach(() => {
    window.fetch = 
      jest.fn().mockImplementation(() => 
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve({
            results: peopleData
          }),
        }))
      });
  

  it('should have the correct params', async () => {
    const mockData = filmData;
    const expected = [
    'https://swapi.co/api/people/',
     
    ];
    await fetchPeople();
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

});

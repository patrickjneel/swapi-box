import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';


jest.mock('./__mocks__/fetchAPIDATA');

describe('App Test', () => {

  it('should be defined', () => {
  const renderedApp = shallow(<App />, {disableLifeCycleMethods: true});

  expect(renderedApp).toBeDefined();
    
  });

  it('should render the correct components', () => {
    const renderedApp = shallow(<App />)
    const foundHeader = renderedApp.find('Header');
    const foundConatiner = renderedApp.find('CardContainer')
    const foundScroll = renderedApp.find('Scrolling')

    expect(foundHeader.length).toEqual(1)
    expect(foundConatiner.length).toEqual(1)
    expect(foundScroll.length).toEqual(1)
  })
  
  it('should have a default state', () => {
    const renderedApp = shallow(<App />)
    const expectedFilm = {};
    const expectedPeople = [];
    const expectedVehicles = [];
    const expectedPlanets = [];
    const expectedLocation = 'people';
    const expectedFavorites = [] 

    expect(renderedApp.state('film')).toEqual(expectedFilm)
    expect(renderedApp.state('people')).toEqual(expectedPeople)
    expect(renderedApp.state('vehicles')).toEqual(expectedVehicles)
    expect(renderedApp.state('planets')).toEqual(expectedPlanets)
    expect(renderedApp.state('location')).toEqual(expectedLocation)
    expect(renderedApp.state('favorites')).toEqual(expectedFavorites)

  })

  it('should match the snap shot', () => {
    const renderedApp = shallow(<App />);

    expect(renderedApp).toMatchSnapshot();
  })

  it('should set the location when the vehicle is passed in', () => {
    const renderedApp = shallow(<App />);
    const expectedLocation = 'vehicles';

    renderedApp.instance().upDateData('vehicles');
    expect(renderedApp.state('location')).toEqual(expectedLocation);
  })

  it('should set the people location when  people is passed in', () => {
    const renderedApp = shallow(<App />);
    const expectedLocation = 'people';

    renderedApp.instance().upDateData('people');
    expect(renderedApp.state('location')).toEqual(expectedLocation);
  })

  it('should set the planets location when the planets is passed in', () => {
    const renderedApp = shallow(<App />);
    const expectedLocation = 'planets';

    renderedApp.instance().upDateData('planets');
    expect(renderedApp.state('location')).toEqual(expectedLocation);
  })

  it('should set the planets when the favorites is called', () => {
    const renderedApp = shallow(<App />);
    const expectedLocation = 'favorites';

    renderedApp.instance().upDateData('favorites');
    expect(renderedApp.state('location')).toEqual(expectedLocation);
  })

  it('should add a favorite when a card is clicked', () => {
    const renderedApp = shallow(<App />);
    const initialState = [];
    const favoritedCard = 
       {
         homeworld: "Stewjon",   
         name: "Obi-Wan Kenobi",
         population: "unknown",
         species: "Human"
       }
     const expectedState = [{
         homeworld: "Stewjon",   
         name: "Obi-Wan Kenobi",
         population: "unknown",
         species: "Human"
       }]

    expect(renderedApp.state('favorites')).toEqual(initialState);
    renderedApp.instance().updateFavorite(favoritedCard);
    expect(renderedApp.state('favorites')).toEqual(expectedState);

  })

  it('should add and remove a card from favorites when clicked twice', () => {
    const renderedApp = shallow(<App />);
    const initialState = [];
    // const 
  })





  // it.skip('should add a favorite card to favorties when card has been clicked' , () => {
  //   const renderedApp = shallow(<App />);
  //   const initialState = [];
  //   const mockData = [
  //     {
  //       name: "Luke Skywalker",
  //       homeworld: "Tatooine",
  //       population: "200000",
  //       species: "Human"
  //     }
  //   ]
  //   expect(renderedApp.state('favorites')).toEqual(initialState);
  //     console.log(renderedApp.debug())
  //     renderedApp.setState({ favorites: mockData })

  //     renderedApp.instance().updateFavorite()

  //   expect(renderedApp.state('favorites')).toEqual(mockData)



  // });
});

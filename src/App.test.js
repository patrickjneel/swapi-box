import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

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
    const expectedLocation = 'people' ;
    const expectedFavorites = [] 

    expect(renderedApp.state('film')).toEqual(expectedFilm)
    expect(renderedApp.state('people')).toEqual(expectedPeople)
    expect(renderedApp.state('vehicles')).toEqual(expectedVehicles)
    expect(renderedApp.state('planets')).toEqual(expectedPlanets)
    expect(renderedApp.state('location')).toEqual(expectedLocation)
    expect(renderedApp.state('favorites')).toEqual(expectedFavorites)

  })

  
  
});

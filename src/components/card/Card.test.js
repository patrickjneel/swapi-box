import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from './Card';

describe('Card Test', () => {


  it('should be defined', () => {
const mockFunc = jest.fn();
    const mockData = [
      {
        homeworld: "Tatooine", 
        name: "Darth Vader", 
        species: "Human", 
        population: "200000"
     }
    ]
    const mockLocation = 'people';
    const mockFavs = [];
    const renderedCard = shallow(
      <Card
        itemData={mockData} 
        location={mockFunc} 
        updateFavorite={mockFunc} 
        favorites={mockFunc}
      />);

    expect(renderedCard).toBeDefined();
  });

   it('should receive props', () => {
const mockFunc = jest.fn();
    const mockData = 
      {
        homeworld: "Tatooine", 
        name: "Darth Vader", 
        species: "Human", 
        population: "200000"
     }
    
    const mockLocation = 'people';
    const mockFavs = [];
    const mockType= 'imperial'
    const renderedCard = mount(
      <Card
        itemData={mockData} 
        location={mockLocation} 
        updateFavorite={mockFunc} 
        favorites={mockFunc}
        type={mockType}
      />);
    expect(renderedCard.props().itemData).toEqual(mockData)
    expect(renderedCard.props().location).toEqual(mockLocation)
    expect(renderedCard.props().updateFavorite).toEqual(mockFunc)
    expect(renderedCard.props().favorites).toEqual(mockFunc)
    expect(renderedCard.props().type).toEqual(mockType)
  });


   it('should match snap shot', () => {
const mockFunc = jest.fn();
    const mockData = 
      {
        homeworld: "Tatooine", 
        name: "Darth Vader", 
        species: "Human", 
        population: "200000"
     }
    
    const mockLocation = 'people';
    const mockFavs = [];
    const type= 'imperial'
    const renderedCard = mount(
      <Card
        itemData={mockData} 
        location={mockLocation} 
        updateFavorite={mockFunc} 
        favorites={mockFunc}
        type={type}
      />);

    expect(renderedCard).toMatchSnapshot();

  });


});


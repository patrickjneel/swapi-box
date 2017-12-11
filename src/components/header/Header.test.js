import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';

describe('Header Test', () => {

  it('should be defined', () => {
    const renderedHeader = shallow(<Header />);

    expect(renderedHeader).toBeDefined();
  });

  it('should receive props', () => {
    const mockFunc = jest.fn();
    const renderedHeader = mount(<Header upDateData={mockFunc} />);
    
    expect(renderedHeader.props().upDateData).toEqual(mockFunc);
  });

  it('should render four buttons', () => {
    const mockFunc = jest.fn();
    const mockLocation = 'people';
    const mockFavorites = 0;
    const renderedHeader = shallow(
      <Header 
        upDateData={mockFunc} 
        favorites={mockFavorites} 
        location={mockLocation}/>
    );
    expect(renderedHeader.find('button').length).toEqual(4);

  });

  it('should match sanp shot', () => {
    const mockFunc = jest.fn();
    const mockLocation = 'people';
    const mockFavorites = 0;
    const renderedHeader = shallow(
      <Header 
        upDateData={mockFunc} 
        favorites={mockFavorites} 
        location={mockLocation}/>
    );
    expect(renderedHeader).toMatchSnapshot();
  });

});



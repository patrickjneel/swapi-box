import React from 'react';
import { shallow, mount } from 'enzyme';
import Scrolling from './Scrolling-text';

describe('Scrolling-text Test', () => {

  it('should be defined', () => {
    const mockData = {
      title: "The Empire Strikes Back", 
      crawl: "things arent chill in the galaxy",
      episodeNumber: 5
    }
    const renderedScroll = shallow(<Scrolling film={mockData}/>);

    expect(renderedScroll).toBeDefined();
  });

  it('should receive props', () => {
    const mockData = {
      title: "The Empire Strikes Back", 
      crawl: "things arent chill in the galaxy",
      episodeNumber: 5
    }
    const renderedScroll = mount(<Scrolling film={mockData}/>);

    expect(renderedScroll.props().film).toEqual(mockData);
  
  });

  it('should match snap shot', () => {
    const mockData = {
      title: "The Empire Strikes Back", 
      crawl: "things arent chill in the galaxy",
      episodeNumber: 5
    }
    const renderedScroll = shallow(<Scrolling film={mockData}/>);

    expect(renderedScroll).toMatchSnapshot();
  })

});

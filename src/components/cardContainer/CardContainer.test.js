import React from 'react';
import { shallow, mount } from 'enzyme';
import CardContainer from './CardContainer';

describe('CardContainer Test', () => {

  it('should be defined', () => {
    const renderedContainer = shallow(<CardContainer />);

    expect(renderedContainer).toBeDefined();
  })
})

import React from 'react';
import { shallow, mount } from 'enzyme';
import Scrolling from './Scrolling-text';

describe('Scrolling-text Test', () => {

  it('should be defined', () => {
    const renderedScroll = shallow(<Scrolling />);

    expect(renderedScroll).toBeDefined();
  });
});

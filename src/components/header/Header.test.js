import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';

describe('Header Test', () => {

  it('should be defined', () => {
    const renderedHeader = shallow(<Header />);

    expect(renderedHeader).toBeDefined();
  });
});

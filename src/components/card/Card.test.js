import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from './Card';

describe('Card Test', () => {
  it('should be defined', () => {
    const renderedCard = shallow(<Card />);

    expect(renderedCard).toBeDefined();
  });
});

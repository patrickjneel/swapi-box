import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('App Test', () => {

  it('should be defined', () => {
  const renderedApp = shallow(<App />, {disableLifeCycleMethods: true});

  expect(renderedApp).toBeDefined();
    
  });
  
});

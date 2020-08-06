import React from 'react';
import ReviewParent from '../src/components/ReviewParent';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Review Parent should render successfully', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ReviewParent />);
  });

  test('Should render on the page', () => {
    expect(wrapper.find('#title').text()).toBe('Ratings and Reviews')
  });

  test('Should contain a Ratings Summary section', () => {
    expect(wrapper.find('.col-4').text()).toBe('Ratings Summary')
  });

  test('Should contain a Reviews List section', () => {
    expect(wrapper.find('.col-8').text()).toBe('Reviews List')
  });

});

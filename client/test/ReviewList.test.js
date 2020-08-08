import React from 'react';
import ReviewList from '../src/components/ReviewList';
import IndividualReview from '../src/components/IndividualReview';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Review List should render each child component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ReviewList />)
  });

  test('Should render a total reviews', () => {
    expect(wrapper.find(".align-self-start").text()).toBe('Total # Reviews, sort options')
  });

  test('Should render a More Reviews button', () => {
    expect(wrapper.find('.order-first')).toBeTruthy();
  })

  test('Should render Add a Review button', () => {
    expect(wrapper.find('.order-last')).toBeTruthy();
  })

  //Missing checking for <IndividualReview /> components
})

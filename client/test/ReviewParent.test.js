import React from 'react';
import ReviewParent from '../src/components/ReviewParent';
import ReviewList from '../src/components/ReviewList';
import RatingSummary from '../src/components/RatingSummary';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Review Parent should render successfully', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ReviewParent />);
  });

  test('Should render successfully', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('Should render a title', () => {
    expect(wrapper.find('#reviewtitle').text()).toBe('RATINGS & REVIEWS')
  });

  // If it find the component, will return {}
  test('Should contain a <RatingsSummary /> component', () => {
    expect(wrapper.find(RatingSummary)).toEqual({})
  });

  // If it finds the component, will return {}
  test('Should contain a <ReviewList /> component', () => {
    expect(wrapper.find(ReviewList)).toEqual({});
  });

});

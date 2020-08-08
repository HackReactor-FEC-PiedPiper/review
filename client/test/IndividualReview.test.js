import React from 'react';
import IndividualReview from '../src/components/IndividualReview';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Individual Review should contain the proper elements', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<IndividualReview rating={5} name={'TestName'} date={'Invalid date'} title={'reviewTitle'} body={'reviewBody'} />)
  });

  test('Should contain a username and date', () => {
    expect(wrapper.find('#namedate').text()).toBe('TestName, Invalid date')
  })

  test('Should contain a rating', () => {
    expect(wrapper.find('#rating').text()).toBe('Star Rating 5')
  })

  test('Should contain a title', () => {
    expect(wrapper.find('#title').text()).toBe('reviewTitle')
  })

  test('Should contain a body', () => {
    expect(wrapper.find('#body').text()).toBe('reviewBody')
  })
})

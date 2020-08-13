import React from 'react';
import AddReview from '../src/components/AddReview';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Should render self and parts', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AddReview id={1} characteristics={[["Fit", {id: 1, value: "3.4"}]]} />)
  })

  test('Should render itself', () => {
    expect(wrapper).toMatchSnapshot()
  })

  // If found, returns {}
  test('Should contain an overall rating', () => {
    expect(wrapper.find('#OverallRating')).toEqual({})
  })

  test('Should contain a recommended', () => {
    expect(wrapper.find('#Recommend')).toEqual({})
  })

  test('Should contain characterstics', () => {
    expect(wrapper.find('#Characteristics')).toEqual({})
  })

  test('Should contain a summary', () => {
    expect(wrapper.find('#Summary')).toEqual({})
  })

  test('Should contain a body', () => {
    expect(wrapper.find('#Body')).toEqual({})
  })

  test('Should contain identification (id and email)', () => {
    expect(wrapper.find('#identification')).toEqual({})
  })
})
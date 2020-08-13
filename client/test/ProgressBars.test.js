import React from 'react';
import ProgressBars from '../src/components/ProgressBars';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Progress Bars should contain the proper elements', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ProgressBars data={{'1': 1, '2': 2, '3': 3, '4': 4, '5': 5}} />)
  })

  test('Should render successfully', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('Should contain a bar for 5 stars', () => {
    expect(wrapper.find('#fivestars').text()).toBe('5 stars')
  })

  test('Should contain a bar for 4 stars', () => {
    expect(wrapper.find('#fourstars').text()).toBe('4 stars')
  })

  test('Should contain a bar for 3 stars', () => {
    expect(wrapper.find('#threestars').text()).toBe('3 stars')
  })

  test('Should contain a bar for 2 stars', () => {
    expect(wrapper.find('#twostars').text()).toBe('2 stars')
  })

  test('Should contain a bar for 1 stars', () => {
    expect(wrapper.find('#onestars').text()).toBe('1 stars')
  })

})
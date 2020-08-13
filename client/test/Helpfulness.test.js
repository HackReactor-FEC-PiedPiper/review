import React from 'react';
import Helpfulness from '../src/components/Helpfulness';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Should render itself and inner components', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Helpfulness id={1} help={1} />)
  })

  test('Should render successfully', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('Should render Helpful', () => {
    expect(wrapper.find('#helpful').text()).toBe('Helpful?')
  })

  test('Should render Yes', () => {
    expect(wrapper.find('#yes').text()).toBe('Yes')
  })

  test('Should render help amount', () => {
    expect(wrapper.find('#helpnumber').text()).toBe('(1)')
  })

  test('Should render report', () => {
    expect(wrapper.find('#report').text()).toBe('Report')
  })
})
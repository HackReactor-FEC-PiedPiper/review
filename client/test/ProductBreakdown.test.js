import React from 'react';
import ProductBreakdown from '../src/components/ProductBreakdown';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Should render', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ProductBreakdown data={[['Fit', {id: 1, value: '3.4'}]]}/>)
  })

  test('Should render successfully', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('Should have a label', () => {
    expect(wrapper.find(".col.h6.font-weight-light").text()).toBe('Fit')
  })
})
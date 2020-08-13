import React from 'react';
import RatingSummary from '../src/components/RatingSummary';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Should render itself and all components', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<RatingSummary metaData={{
      "product_id": "2",
      "ratings": {
        2: 1,
        3: 1,
        4: 2,
      },
      "recommended": {
        0: 5
      },
      "characteristics": {
        "Size": {
          "id": 14,
          "value": "4.0000"
        },
        "Width": {
          "id": 15,
          "value": "3.5000"
        },
        "Comfort": {
          "id": 16,
          "value": "4.0000"
        }
      }
    }} />)
  })

  test('Should render successfully', () => {
    expect(wrapper).toMatchSnapshot()
  })

  // If found, will return {}
  test('Should contain a star rating at the top', () => {
    expect(wrapper.find('.Stars')).toEqual({})
  })

  test('Should contain a % recommend section', () => {
    expect(wrapper.find('.h6.font-weight-light').text()).toBe('NaN% of reviews recommend this product')
  })
})
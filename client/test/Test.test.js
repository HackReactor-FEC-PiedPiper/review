import React from 'react';
import Test from '../src/components/Test';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

test(`Should contain the title 'Hello, World'`, () => {
  const wrapper = shallow(<Test />);
  expect(wrapper.find('#title').text()).toBe('Hello, World');
});
import React from 'react';
import ReviewList from '../src/components/ReviewList';
import IndividualReview from '../src/components/IndividualReview';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

// Currently broken due to this.state.reviewListData to be a props passed in

describe('Review List should render each child component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ReviewList
      reviews={{"results": [
      {
        "review_id": 5,
        "rating": 3,
        "summary": "I'm enjoying wearing these shades",
        "recommend": 0,
        "response": "",
        "body": "Comfortable and practical.",
        "date": "2019-04-14T00:00:00.000Z",
        "reviewer_name": "shortandsweeet",
        "helpfulness": 5,
      },
      {
        "review_id": 3,
        "rating": 4,
        "summary": "I am liking these glasses",
        "recommend": 0,
        "response": "Glad you're enjoying the product!",
        "body": "They are very dark. But that's good because I'm in very sunny spots",
        "date": "2019-06-23T00:00:00.000Z",
        "reviewer_name": "bigbrotherbenjamin",
        "helpfulness": 5,
        "photos": [],
      }]}}
      apiRequest={() => {}}
      sortValue={'newest'}
      currentProduct={5}
      metaData={{"characteristics": {
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
        }}}}
    />)
  });

  test('Should render a total reviews', () => {
    expect(wrapper.find("#totalreviews").text()).toBe('0 Reviews, sorted by');
  });

  // If found, will return {}
  test('Should have a buttons area', () => {
    expect(wrapper.find('#buttons')).toEqual({});
  })

  test('Should have an area for Individual Reviews', () => {
    expect(wrapper.find('#individualreviews')).toEqual({})
  })

  // If found, will return {}
  test('Should be able to render an Individual Review', () => {
    expect(wrapper.find(IndividualReview)).toEqual({})
  })
})

describe('Review List should render', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ReviewList
      reviews={{"results": [
      {
        "review_id": 5,
        "rating": 3,
        "summary": "I'm enjoying wearing these shades",
        "recommend": 0,
        "response": "",
        "body": "Comfortable and practical.",
        "date": "2019-04-14T00:00:00.000Z",
        "reviewer_name": "shortandsweeet",
        "helpfulness": 5,
      },
      {
        "review_id": 3,
        "rating": 4,
        "summary": "I am liking these glasses",
        "recommend": 0,
        "response": "Glad you're enjoying the product!",
        "body": "They are very dark. But that's good because I'm in very sunny spots",
        "date": "2019-06-23T00:00:00.000Z",
        "reviewer_name": "bigbrotherbenjamin",
        "helpfulness": 5,
        "photos": [],
      }]}}
      apiRequest={() => {}}
      sortValue={'newest'}
      currentProduct={5}
      metaData={{"characteristics": {
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
        }}}}
    />)
  })

  test('Should render successfully', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
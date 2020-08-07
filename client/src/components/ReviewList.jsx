import React from 'react';
import axios from 'axios';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewListData: {},
    };
  }

  componentDidMount() {
    this.pullReviewData();
  }

  pullReviewData(productID = 1, sortValue = 'newest') {
    axios({
      method: 'get',
      url: `http://52.26.193.201:3000/reviews/${productID}/list`,
      data: {
        product_id: productID,
        count: 20,
        sort: sortValue,
      },
    })
      .then((results) => {
        this.setState = {
          reviewListData: results.data,
        };
        console.log('Current review list data: ', results.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row align-self-start">Total # Reviews, sort options</div>
        <div className="row align-self-center">Individual Reviews Area</div>
        <div className="row align-self-center">
          <input type="button" value="More Reviews" className="col order-first" />
          <input type="button" value="Add a Review" className="col order-last" />
        </div>
      </div>
    );
  }
}

export default ReviewList;

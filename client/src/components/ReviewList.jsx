import React from 'react';
import axios from 'axios';

import IndividualReview from './IndividualReview';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewListData: [],
      currentList: [],
    };
  }

  componentDidMount() {
    // FIND WAY TO GRAB CURRENT PRODUCT ID TO PASS
    this.pullReviewData();
  }

  componentDidUpdate() {
    console.log('state at time of component update: ', this.state);
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
        console.log('Data sent to setState', results.data.results);
        this.setState({
          reviewListData: results.data.results,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row align-self-start">Total # Reviews, sort options</div>
        <div className="row align-self-center">
          {this.state.reviewListData.map((review) => (
            <IndividualReview
              rating={review.rating}
              name={review.reviewer_name}
              date={review.date}
              title={review.summary}
              body={review.body}
            />
          ))}
        </div>
        <div className="row align-self-center">
          <input type="button" value="More Reviews" className="col order-first" />
          <input type="button" value="Add a Review" className="col order-last" />
        </div>
      </div>
    );
  }
}

export default ReviewList;

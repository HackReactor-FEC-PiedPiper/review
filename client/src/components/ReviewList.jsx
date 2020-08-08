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
    // console.log('state at time of component update: ', this.state);
  }

  grabTwoReviews() {
    if (this.state.currentList.length === 0) {
      // console.log('inside conditional', this.state.currentList);
      const firstTwo = this.state.reviewListData.slice(0, 2);
      // console.log('first two reviews', firstTwo);
      this.setState({
        currentList: firstTwo,
      });
    } else {
      // grab current length n and offset next slice by n
      const n = this.state.currentList.length;
      const nextTwo = this.state.reviewListData.slice(n, n + 2);
      this.setState({
        currentList: this.state.currentList.concat(nextTwo),
      });
    }
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
        // console.log('Data sent to setState', results.data.results);
        this.setState({
          reviewListData: results.data.results,
        });
        this.grabTwoReviews();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleMoreReviewClick() {
    // console.log('Clicked More Reviews!');
    this.grabTwoReviews();
  }

  render() {
    return (
      <div className="container">
        <h5 className="row align-self-start">
          {this.state.reviewListData.length}
          {' '}
          Reviews, sorted by SORTOPTIONTHING
        </h5>
        <div className="row align-self-center mh-25 overflow-auto">
          {this.state.currentList.map((review) => (
            <IndividualReview
              rating={review.rating}
              name={review.reviewer_name}
              date={review.date}
              title={review.summary}
              body={review.body}
              key={review.review_id}
            />
          ))}
        </div>
        <div className="row align-self-center">
          {(this.state.currentList.length < this.state.reviewListData.length)
            ? (
              <div className="col">
                <button
                  type="button"
                  className="order-first btn btn-outline-secondary mw-75"
                  onClick={this.handleMoreReviewClick.bind(this)}
                >
                  More Reviews
                </button>
              </div>
            )
            : null}
          <div className="col">
            <button
              type="button"
              className="order-last btn btn-outline-secondary mw-75"
            >
              Add a ReviewList
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewList;

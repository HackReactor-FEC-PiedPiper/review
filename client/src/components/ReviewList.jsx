import React from 'react';
import axios from 'axios';

import IndividualReview from './IndividualReview';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewListData: [],
      currentList: [],
      sortValue: 'newest',
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
      const firstTwo = this.state.reviewListData.slice(0, 2);
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

  pullReviewData(productID = 1, sortValue = this.state.sortValue) {
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
        this.setState({
          reviewListData: results.data.results,
        }, () => {
          console.log('current product data grabbed', results.data);
          this.grabTwoReviews();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleMoreReviewClick() {
    this.grabTwoReviews();
  }

  handleSortOptionClick(event) {
    // Grab the link
    console.log('Grabbing event', typeof event.target.innerText);
    const sort = event.target.innerText;
    this.setState({
      sortValue: sort,
      currentList: [],
    }, () => {
      this.pullReviewData(1, sort);
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="h5 my-auto">
            {this.state.reviewListData.length}
            {' '}
            Reviews, sorted by
          </div>
          <div className="btn-group dropdown px-2">
            <button
              className="btn btn-outline-secondary btn-sm dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {this.state.sortValue}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <button type="button" className="dropdown-item" onClick={this.handleSortOptionClick.bind(this)}>newest</button>
              <button type="button" className="dropdown-item" onClick={this.handleSortOptionClick.bind(this)}>helpful</button>
              <button type="button" className="dropdown-item" onClick={this.handleSortOptionClick.bind(this)}>relevant</button>
            </div>
          </div>
        </div>
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

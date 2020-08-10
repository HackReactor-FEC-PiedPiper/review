import React from 'react';

import IndividualReview from './IndividualReview';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewListData: this.props.reviews,
      currentList: [],
      sortValue: this.props.sortValue,
      currentProduct: this.props.currentProduct,
    };
  }

  componentDidMount() {
    // FIND WAY TO GRAB CURRENT PRODUCT ID TO PASS
    this.grabTwoReviews();
  }

  componentDidUpdate() {
    // console.log('state at time of ReviewList component update: ', this.state);
    if (this.state.currentList.length === 0) {
      this.grabTwoReviews();
    }
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

  handleMoreReviewClick() {
    this.grabTwoReviews();
  }

  handleSortOptionClick(event) {
    // Grab the link
    // console.log('Grabbing event', typeof event.target.innerText);
    const sort = event.target.innerText;
    this.setState({
      sortValue: sort,
      currentList: [],
    }, () => {
      this.props.apiRequest(this.state.currentProduct, sort);
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

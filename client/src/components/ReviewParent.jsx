import React from 'react';
import 'bootstrap';
import axios from 'axios';
import ReviewList from './ReviewList';

class ReviewParent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      apiAccessed: false,
      currentProduct: 5,
      stateSortValue: 'newest',
      apiReviews: [],
      apiMeta: [],
    };
    // List of Reviews stored HERE
    // Review Metadata stored HERE
  }

  componentDidMount() {
    this.pullReviewData();
  }

  pullReviewData(productID = this.state.currentProduct, sortValue = this.state.stateSortValue) {
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
          apiReviews: results.data.results,
          apiAccessed: true,
          stateSortValue: sortValue,
        }, () => {
          console.log('apiReviews', this.state.apiReviews);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div id="title">
          Ratings and Reviews
        </div>
        <div className="container-fluid">
          <div className="row no-gutters">
            <div className="col-4">
              Ratings Summary
            </div>
            <div className="col-8">
              {this.state.apiAccessed
                ? (
                  <ReviewList
                    reviews={this.state.apiReviews}
                    apiRequest={this.pullReviewData.bind(this)}
                    sortValue={this.state.stateSortValue}
                  />
                )
                : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewParent;

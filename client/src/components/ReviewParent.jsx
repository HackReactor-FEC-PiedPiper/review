import React from 'react';
import 'bootstrap';
import ReviewList from './ReviewList';

class ReviewParent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
    // List of Reviews stored in Reviews List
    // Review Metadata stored in Ratings Summary
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
              <ReviewList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewParent;

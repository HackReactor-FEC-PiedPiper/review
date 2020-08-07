import React from 'react';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div>Total # Reviews, sort options</div>
        <div>Individual Reviews Area</div>
        <div>
          Container for buttons
          <input type="button" value="More Reviews" />
          <input type="button" value="Add a Review" />
        </div>
      </div>
    );
  }
}

export default ReviewList;
